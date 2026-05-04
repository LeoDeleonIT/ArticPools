"use client";

/**
 * BubbleIntro
 * Premium load animation: bubbles rise from the bottom of the screen,
 * grow and refract light, then a glass/ripple reveal lifts to expose
 * the homepage. Pure canvas + CSS — no animation libs.
 *
 * Total runtime: ~2.0s. Honors prefers-reduced-motion.
 */

import { useEffect, useRef, useState } from "react";

export default function BubbleIntro() {
  const canvasRef = useRef(null);
  const [phase, setPhase] = useState("active"); // active -> reveal -> done

  useEffect(() => {
    // Skip animation if the user prefers reduced motion
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setPhase("done");
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let running = true;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = () => window.innerWidth;
    const H = () => window.innerHeight;

    const resize = () => {
      canvas.width = W() * dpr;
      canvas.height = H() * dpr;
      canvas.style.width = W() + "px";
      canvas.style.height = H() + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Generate bubble particles with natural variation
    const count = Math.min(60, Math.floor((W() * H()) / 22000));
    const bubbles = Array.from({ length: count }, () => {
      const r = 6 + Math.random() * 60;
      return {
        x: Math.random() * W(),
        y: H() + Math.random() * H() * 0.6,
        r,
        vy: 0.6 + Math.random() * 1.6 + r * 0.02, // larger = faster
        vx: (Math.random() - 0.5) * 0.4,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.01 + Math.random() * 0.03,
        alpha: 0.4 + Math.random() * 0.5,
        hue: 195 + Math.random() * 20, // aqua range
      };
    });

    const start = performance.now();
    const DURATION = 1700; // bubble loop length

    const drawBubble = (b) => {
      const grd = ctx.createRadialGradient(
        b.x - b.r * 0.3,
        b.y - b.r * 0.3,
        b.r * 0.1,
        b.x,
        b.y,
        b.r
      );
      grd.addColorStop(0, `hsla(${b.hue}, 100%, 90%, ${b.alpha})`);
      grd.addColorStop(0.5, `hsla(${b.hue}, 100%, 60%, ${b.alpha * 0.45})`);
      grd.addColorStop(1, `hsla(${b.hue}, 100%, 50%, 0)`);
      ctx.beginPath();
      ctx.fillStyle = grd;
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fill();

      // Highlight to fake refraction
      ctx.beginPath();
      ctx.fillStyle = `rgba(255,255,255,${0.35 * b.alpha})`;
      ctx.arc(b.x - b.r * 0.35, b.y - b.r * 0.4, b.r * 0.18, 0, Math.PI * 2);
      ctx.fill();

      // Outline ring
      ctx.beginPath();
      ctx.strokeStyle = `hsla(${b.hue}, 100%, 80%, ${b.alpha * 0.55})`;
      ctx.lineWidth = 1;
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.stroke();
    };

    const loop = (t) => {
      if (!running) return;
      const elapsed = t - start;
      ctx.clearRect(0, 0, W(), H());

      // Background tint that fades with progress
      const p = Math.min(elapsed / DURATION, 1);
      ctx.fillStyle = `rgba(4,17,30,${0.85 - p * 0.85})`;
      ctx.fillRect(0, 0, W(), H());

      bubbles.forEach((b) => {
        b.wobble += b.wobbleSpeed;
        b.x += b.vx + Math.sin(b.wobble) * 0.6;
        b.y -= b.vy * (1 + p * 0.5);
        b.r *= 1 + 0.0015; // gentle expansion
        if (b.y + b.r < -20) {
          b.y = H() + 40;
          b.r = 6 + Math.random() * 40;
        }
        drawBubble(b);
      });

      if (elapsed < DURATION) {
        raf = requestAnimationFrame(loop);
      } else {
        // Trigger glass reveal
        setPhase("reveal");
        setTimeout(() => {
          running = false;
          setPhase("done");
        }, 700);
      }
    };
    raf = requestAnimationFrame(loop);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] pointer-events-none transition-opacity duration-700 ${
        phase === "reveal" ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Backdrop blur layer that lifts away */}
      <div
        className={`absolute inset-0 bg-ink/95 backdrop-blur-2xl transition-all duration-700 ease-out ${
          phase === "reveal" ? "scale-110 opacity-0" : "opacity-100"
        }`}
      />
      {/* Bubble canvas */}
      <canvas ref={canvasRef} className="absolute inset-0" />
      {/* Glass shimmer sweep on reveal */}
      <div
        className={`absolute inset-0 pointer-events-none transition-transform duration-700 ease-out ${
          phase === "reveal" ? "translate-y-[-100%]" : "translate-y-0"
        }`}
        style={{
          background:
            "linear-gradient(180deg, rgba(127,219,255,0) 0%, rgba(127,219,255,0.18) 50%, rgba(0,191,255,0.35) 100%)",
        }}
      />
    </div>
  );
}

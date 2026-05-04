"use client";

/**
 * Tiny IntersectionObserver wrapper that fades + lifts children
 * into view when they enter the viewport.
 */

import { useEffect, useRef } from "react";

export default function RevealOnScroll({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add("in"), delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}

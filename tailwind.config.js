/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette extracted from the truck wrap
        ink: "#04111E",          // near-black background
        deep: "#0B3C5D",         // deep electric blue
        midnight: "#072742",     // navy backdrop
        aqua: "#00BFFF",         // bright glow blue
        ice: "#7FDBFF",          // light cyan accent
        frost: "#E6F6FF",        // soft white-blue
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "ui-sans-serif", "system-ui"],
        sans: ['Inter', "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(0,191,255,0.25), 0 10px 40px -10px rgba(0,191,255,0.55)",
        glowStrong: "0 0 30px rgba(0,191,255,0.55), 0 0 80px rgba(0,191,255,0.25)",
        card: "0 10px 30px -10px rgba(2, 20, 40, 0.45)",
      },
      backgroundImage: {
        "brand-radial":
          "radial-gradient(1200px 600px at 70% -10%, rgba(0,191,255,0.25), transparent 60%), radial-gradient(800px 500px at 0% 100%, rgba(11,60,93,0.45), transparent 60%)",
        "brand-grad":
          "linear-gradient(135deg, #00BFFF 0%, #0B3C5D 100%)",
        "ripple":
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.06) 0 1px, transparent 2px), radial-gradient(circle at 70% 60%, rgba(0,191,255,0.06) 0 1px, transparent 2px)",
      },
      keyframes: {
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        rise: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        ripple: {
          "0%": { transform: "scale(0.8)", opacity: 0.6 },
          "100%": { transform: "scale(2.4)", opacity: 0 },
        },
      },
      animation: {
        floatY: "floatY 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        rise: "rise 0.7s ease-out both",
        ripple: "ripple 2.4s ease-out infinite",
      },
    },
  },
  plugins: [],
};

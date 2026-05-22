/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"]
      },
      colors: {
        abyss: {
          950: "#030712",
          900: "#06101f",
          850: "#08182d",
          800: "#0b2038",
          700: "#102b4b"
        },
        aurora: {
          blue: "#5EA7FF",
          cyan: "#54E0FF",
          indigo: "#7C8CFF",
          violet: "#A78BFA",
          mint: "#4DEBC8",
          rose: "#FB7185"
        }
      },
      boxShadow: {
        cinematic: "0 34px 120px rgba(0, 0, 0, 0.48)",
        glow: "0 0 60px rgba(94, 167, 255, 0.22)",
        glass: "inset 0 1px 0 rgba(255,255,255,.08), 0 24px 80px rgba(0,0,0,.34)"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 50% 0%, rgba(94,167,255,.18), transparent 32rem), linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)"
      },
      animation: {
        "slow-spin": "slowSpin 20s linear infinite",
        "soft-pulse": "softPulse 3.5s ease-in-out infinite"
      },
      keyframes: {
        slowSpin: {
          to: { transform: "rotate(360deg)" }
        },
        softPulse: {
          "0%, 100%": { opacity: 0.58, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.035)" }
        }
      }
    }
  },
  plugins: []
};

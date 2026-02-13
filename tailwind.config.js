/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Semantic (CSS-var driven)
                "brand-red": "var(--primary)",
                "brand-gold": "var(--accent)",
                paper: "var(--background)",
                ink: "var(--foreground)",

                // Functional mappings
                primary: {
                    DEFAULT: "var(--primary)",
                    foreground: "var(--primary-foreground)",
                },
                background: "var(--background)",
                foreground: "var(--foreground)",
                accent: "var(--accent)",
                muted: {
                    DEFAULT: "var(--muted)",
                    foreground: "var(--muted-foreground)",
                },
                border: "var(--border)",
                input: "var(--input)",
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
                serif: ["var(--font-playfair)"],
            },
            boxShadow: {
                subtle: "var(--shadow-subtle)",
                card: "var(--shadow-card)",
                floating: "var(--shadow-floating)",
                glow: "var(--shadow-glow)",
                "red-glow": "var(--shadow-red-glow)",
            },
            animation: {
                float: "float 6s ease-in-out infinite",
                shimmer: "shimmer 2s infinite",
                "pulse-glow": "pulse-glow 2s ease-in-out infinite",
                "gold-glow": "gold-glow 2s ease-in-out infinite",
                "fade-up": "fade-up 0.6s ease-out forwards",
                "fade-down": "fade-down 0.6s ease-out forwards",
                "scale-in": "scale-in 0.5s ease-out forwards",
                "spin-slow": "spin-slow 20s linear infinite",
                "spin-slow-reverse": "spin-slow-reverse 25s linear infinite",
                "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
                "slide-in-left": "slide-in-left 0.6s ease-out forwards",
                "slide-in-right": "slide-in-right 0.6s ease-out forwards",
                "diya-flicker": "diya-flicker 3s ease-in-out infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                shimmer: {
                    "0%": { backgroundPosition: "-200% 0" },
                    "100%": { backgroundPosition: "200% 0" },
                },
                "pulse-glow": {
                    "0%, 100%": { boxShadow: "0 0 5px rgba(178, 34, 34, 0.4)" },
                    "50%": { boxShadow: "0 0 20px rgba(178, 34, 34, 0.6), 0 0 40px rgba(178, 34, 34, 0.3)" },
                },
                "gold-glow": {
                    "0%, 100%": { boxShadow: "0 0 5px rgba(212, 175, 55, 0.4)" },
                    "50%": { boxShadow: "0 0 20px rgba(212, 175, 55, 0.6), 0 0 40px rgba(212, 175, 55, 0.3)" },
                },
                "fade-up": {
                    from: { opacity: "0", transform: "translateY(20px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                "fade-down": {
                    from: { opacity: "0", transform: "translateY(-20px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                "scale-in": {
                    from: { opacity: "0", transform: "scale(0.9)" },
                    to: { opacity: "1", transform: "scale(1)" },
                },
                "spin-slow": {
                    from: { transform: "rotate(0deg)" },
                    to: { transform: "rotate(360deg)" },
                },
                "spin-slow-reverse": {
                    from: { transform: "rotate(360deg)" },
                    to: { transform: "rotate(0deg)" },
                },
                "bounce-subtle": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-5px)" },
                },
                "slide-in-left": {
                    from: { opacity: "0", transform: "translateX(-30px)" },
                    to: { opacity: "1", transform: "translateX(0)" },
                },
                "slide-in-right": {
                    from: { opacity: "0", transform: "translateX(30px)" },
                    to: { opacity: "1", transform: "translateX(0)" },
                },
                "diya-flicker": {
                    "0%, 100%": { opacity: "1", transform: "scale(1)" },
                    "25%": { opacity: "0.8" },
                    "50%": { opacity: "1", transform: "scale(1.05)" },
                    "75%": { opacity: "0.9" },
                },
            },
            transitionTimingFunction: {
                smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
                bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
            },
            backdropBlur: {
                xs: "2px",
            },
        },
    },
    plugins: [],
};

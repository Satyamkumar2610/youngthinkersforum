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
                // Semantic Brand Colors
                "brand-red": "var(--brand-red)",
                "brand-gold": "var(--brand-gold)",
                "bg-white": "var(--bg-white)",
                "bg-paper": "var(--bg-paper)",
                "text-charcoal": "var(--text-charcoal)",

                // Functional Mappings
                primary: {
                    DEFAULT: "var(--brand-red)",
                    foreground: "var(--primary-foreground)",
                },
                background: "var(--bg-white)",
                foreground: "var(--text-charcoal)",
                accent: "var(--brand-gold)",
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
            },
            animation: {
                float: "var(--animate-float)",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
            },
        },
    },
    plugins: [],
};

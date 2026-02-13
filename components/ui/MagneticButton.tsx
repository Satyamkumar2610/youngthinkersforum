"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { MouseEvent } from "react";

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    strength?: number;
    href?: string;
    variant?: "primary" | "secondary" | "ghost";
}

export function MagneticButton({
    children,
    className = "",
    onClick,
    strength = 0.3,
    href,
    variant = "primary",
}: MagneticButtonProps) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distX = (e.clientX - centerX) * strength;
        const distY = (e.clientY - centerY) * strength;

        x.set(distX);
        y.set(distY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const baseStyles = "relative overflow-hidden font-semibold transition-all duration-300 focus-ring";

    const variants = {
        primary: "bg-primary text-white hover:bg-red-800 px-6 py-3 rounded-none shadow-lg",
        secondary: "bg-white text-primary border-2 border-primary hover:bg-red-50 px-6 py-3 rounded-none",
        ghost: "text-primary hover:text-red-800 px-4 py-2",
    };

    if (href) {
        return (
            <motion.a
                href={href}
                onClick={onClick}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ x: springX, y: springY }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`${baseStyles} ${variants[variant]} ${className} btn-shimmer`}
            >
                {children}
            </motion.a>
        );
    }

    return (
        <motion.button
            type="button"
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${className} btn-shimmer`}
        >
            {children}
        </motion.button>
    );
}

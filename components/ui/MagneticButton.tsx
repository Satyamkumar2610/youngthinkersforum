"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, MouseEvent } from "react";

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
    const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: MouseEvent) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
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

    const Component = href ? motion.a : motion.button;

    return (
        <Component
            ref={ref as any}
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
        </Component>
    );
}

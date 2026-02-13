"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, MouseEvent } from "react";
import Link from "next/link";

interface GlowCardProps {
    children: React.ReactNode;
    className?: string;
    href?: string;
    glowColor?: string;
    tiltStrength?: number;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

export function GlowCard({
    children,
    className = "",
    href,
    glowColor = "rgba(178, 34, 34, 0.15)",
    tiltStrength = 10,
    onMouseEnter,
    onMouseLeave: externalMouseLeave,
}: GlowCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 300 };
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [tiltStrength, -tiltStrength]), springConfig);
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-tiltStrength, tiltStrength]), springConfig);

    const glowX = useSpring(useTransform(x, [-0.5, 0.5], [0, 100]), springConfig);
    const glowY = useSpring(useTransform(y, [-0.5, 0.5], [0, 100]), springConfig);

    const handleMouseMove = (e: MouseEvent) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const xPos = (e.clientX - rect.left) / rect.width - 0.5;
        const yPos = (e.clientY - rect.top) / rect.height - 0.5;

        x.set(xPos);
        y.set(yPos);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        externalMouseLeave?.();
    };

    const content = (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={onMouseEnter}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            whileHover={{
                y: -8,
                boxShadow: `0 20px 40px -15px ${glowColor}, 0 0 30px ${glowColor}`,
            }}
            transition={{ duration: 0.3 }}
            className={`
                group relative overflow-hidden rounded-xl bg-white/70 backdrop-blur border border-border
                transition-all duration-500 cursor-pointer
                ${className}
            `}
        >
            {/* Red accent bar at top - expands on hover */}
            <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-primary"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
                style={{ transformOrigin: "center" }}
            />

            {/* Glow gradient that follows mouse */}
            <motion.div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: `radial-gradient(circle at ${glowX}% ${glowY}%, ${glowColor}, transparent 50%)`,
                }}
            />

            {/* Content with 3D lift */}
            <div style={{ transform: "translateZ(20px)" }}>
                {children}
            </div>
        </motion.div>
    );

    if (href) {
        return <Link href={href} className="block">{content}</Link>;
    }

    return content;
}

"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef, MouseEvent } from "react";

// ============================================
// YOUTH-APPEALING FRAMER MOTION ANIMATIONS
// ============================================

// 3D Perspective Card with tilt effect
export function Perspective3DCard({
    children,
    className = "",
    intensity = 15
}: {
    children: ReactNode;
    className?: string;
    intensity?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${intensity}deg`, `-${intensity}deg`]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${intensity}deg`, `${intensity}deg`]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`perspective-1000 ${className}`}
        >
            <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
                {children}
            </div>
        </motion.div>
    );
}

// Elastic Button with spring physics
export function ElasticButton({
    children,
    className = "",
    onClick
}: {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}) {
    return (
        <motion.button
            className={className}
            onClick={onClick}
            whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            whileTap={{
                scale: 0.95,
                transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
        >
            {children}
        </motion.button>
    );
}

// Magnetic hover effect
export function MagneticWrapper({
    children,
    className = "",
    strength = 0.3
}: {
    children: ReactNode;
    className?: string;
    strength?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 150, damping: 15 });
    const springY = useSpring(y, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) * strength;
        const deltaY = (e.clientY - centerY) * strength;
        x.set(deltaX);
        y.set(deltaY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Staggered text reveal animation
export function StaggeredText({
    text,
    className = "",
    delay = 0,
    staggerDelay = 0.03
}: {
    text: string;
    className?: string;
    delay?: number;
    staggerDelay?: number;
}) {
    const words = text.split(" ");

    return (
        <motion.span className={className}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0, y: 20, rotateX: 90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: delay + i * staggerDelay,
                        ease: [0.215, 0.61, 0.355, 1],
                    }}
                >
                    {word}
                    {i < words.length - 1 && "\u00A0"}
                </motion.span>
            ))}
        </motion.span>
    );
}

// Floating cultural element with physics
export function FloatingCulturalElement({
    children,
    className = "",
    delay = 0,
    amplitude = 20,
    duration = 6
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
    amplitude?: number;
    duration?: number;
}) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: 1,
                scale: 1,
                y: [0, -amplitude, 0],
                rotate: [0, 5, -5, 0],
            }}
            transition={{
                opacity: { duration: 0.5, delay },
                scale: { duration: 0.5, delay },
                y: { duration, repeat: Infinity, ease: "easeInOut", delay },
                rotate: { duration: duration * 1.5, repeat: Infinity, ease: "easeInOut", delay },
            }}
        >
            {children}
        </motion.div>
    );
}

// Parallax layer component
export function ParallaxLayer({
    children,
    className = "",
    speed = 0.5
}: {
    children: ReactNode;
    className?: string;
    speed?: number;
}) {
    const y = useMotionValue(0);

    return (
        <motion.div
            className={className}
            style={{ y }}
            initial={{ y: 0 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
}

// Reveal on scroll with cultural flair
export function CulturalReveal({
    children,
    className = "",
    direction = "up",
    delay = 0
}: {
    children: ReactNode;
    className?: string;
    direction?: "up" | "down" | "left" | "right";
    delay?: number;
}) {
    const variants = {
        up: { y: 60, opacity: 0 },
        down: { y: -60, opacity: 0 },
        left: { x: -60, opacity: 0 },
        right: { x: 60, opacity: 0 },
    };

    return (
        <motion.div
            className={className}
            initial={variants[direction]}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.215, 0.61, 0.355, 1],
            }}
        >
            {children}
        </motion.div>
    );
}

// Pulsing glow effect for CTAs
export function PulsingGlow({
    children,
    className = "",
    color = "rgba(178, 34, 34, 0.4)"
}: {
    children: ReactNode;
    className?: string;
    color?: string;
}) {
    return (
        <motion.div className={`relative ${className}`}>
            <motion.div
                className="absolute inset-0 rounded-inherit blur-xl"
                style={{ backgroundColor: color }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}

// Card flip animation
export function FlipCard({
    front,
    back,
    className = ""
}: {
    front: ReactNode;
    back: ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            className={`relative ${className}`}
            style={{ transformStyle: "preserve-3d" }}
            initial={false}
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
            <div
                className="absolute inset-0 backface-hidden"
                style={{ backfaceVisibility: "hidden" }}
            >
                {front}
            </div>
            <div
                className="absolute inset-0"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
                {back}
            </div>
        </motion.div>
    );
}

// Typewriter effect for cultural slogans
export function TypewriterText({
    text,
    className = "",
    speed = 0.05,
    delay = 0
}: {
    text: string;
    className?: string;
    speed?: number;
    delay?: number;
}) {
    return (
        <motion.span className={className}>
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.1,
                        delay: delay + i * speed,
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.span>
    );
}

// Shimmer loading effect
export function ShimmerEffect({ className = "" }: { className?: string }) {
    return (
        <motion.div
            className={`absolute inset-0 ${className}`}
            style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                backgroundSize: "200% 100%",
            }}
            animate={{
                backgroundPosition: ["200% 0", "-200% 0"],
            }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
            }}
        />
    );
}

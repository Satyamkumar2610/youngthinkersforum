"use client";

import { motion } from "framer-motion";

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    className?: string;
    animation?: "fade-up" | "slide-in" | "scale-up" | "blur-in" | "rotate-in" | "slide-in-right";
    duration?: number;
    once?: boolean;
}

export const ScrollReveal = ({
    children,
    width = "fit-content",
    delay = 0,
    className = "",
    animation = "fade-up",
    duration = 0.8,
    once = true,
}: ScrollRevealProps) => {
    const variants = {
        "fade-up": {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
        },
        "slide-in": {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
        },
        "slide-in-right": {
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
        },
        "scale-up": {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
        },
        "blur-in": {
            hidden: { opacity: 0, filter: "blur(10px)" },
            visible: { opacity: 1, filter: "blur(0px)" },
        },
        "rotate-in": {
            hidden: { opacity: 0, rotate: -5, y: 30 },
            visible: { opacity: 1, rotate: 0, y: 0 },
        },
    };

    return (
        <div style={{ position: "relative", width, overflow: "hidden" }} className={className}>
            <motion.div
                variants={variants[animation]}
                initial="hidden"
                whileInView="visible"
                viewport={{ once, margin: "-50px" }}
                transition={{
                    duration,
                    delay,
                    ease: [0.25, 0.1, 0.25, 1],
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

// Staggered children reveal
interface StaggerContainerProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    staggerDelay?: number;
}

export const StaggerContainer = ({
    children,
    className = "",
    delay = 0,
    staggerDelay = 0.1,
}: StaggerContainerProps) => {
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: delay,
                staggerChildren: staggerDelay,
            },
        },
    };

    return (
        <motion.div
            className={className}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
            },
        },
    };

    return (
        <motion.div variants={item} className={className}>
            {children}
        </motion.div>
    );
};

"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
    staggerChildren?: number;
    type?: "words" | "chars";
    once?: boolean;
}

export function AnimatedText({
    text,
    className = "",
    delay = 0,
    duration = 0.05,
    staggerChildren = 0.03,
    type = "words",
    once = true,
}: AnimatedTextProps) {
    const items = type === "words" ? text.split(" ") : text.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren,
                delayChildren: delay,
            },
        },
    };

    const child = {
        hidden: {
            opacity: 0,
            y: 20,
            rotateX: -90,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.span
            className={`inline-flex flex-wrap ${className}`}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once }}
            style={{ perspective: "1000px" }}
        >
            {items.map((item, index) => (
                <motion.span
                    key={index}
                    variants={child}
                    className="inline-block"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {item}
                    {type === "words" && index < items.length - 1 && "\u00A0"}
                </motion.span>
            ))}
        </motion.span>
    );
}

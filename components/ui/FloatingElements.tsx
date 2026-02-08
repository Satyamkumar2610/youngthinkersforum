"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface FloatingElement {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
}

interface FloatingElementsProps {
    count?: number;
    className?: string;
    color?: string;
    minSize?: number;
    maxSize?: number;
}

export function FloatingElements({
    count = 15,
    className = "",
    color = "rgba(212, 175, 55, 0.3)",
    minSize = 4,
    maxSize = 12,
}: FloatingElementsProps) {
    const elements = useMemo<FloatingElement[]>(() => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * (maxSize - minSize) + minSize,
            duration: Math.random() * 10 + 10,
            delay: Math.random() * 5,
        }));
    }, [count, minSize, maxSize]);

    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {elements.map((el) => (
                <motion.div
                    key={el.id}
                    className="absolute rounded-full"
                    style={{
                        left: `${el.x}%`,
                        top: `${el.y}%`,
                        width: el.size,
                        height: el.size,
                        backgroundColor: color,
                    }}
                    animate={{
                        y: [-20, 20, -20],
                        x: [-10, 10, -10],
                        opacity: [0.2, 0.6, 0.2],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: el.duration,
                        delay: el.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

// Cultural shapes variant
export function FloatingDiyas({
    count = 8,
    className = "",
}: {
    count?: number;
    className?: string;
}) {
    const elements = useMemo(() => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            duration: Math.random() * 8 + 8,
            delay: Math.random() * 3,
            scale: Math.random() * 0.5 + 0.5,
        }));
    }, [count]);

    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {elements.map((el) => (
                <motion.div
                    key={el.id}
                    className="absolute"
                    style={{
                        left: `${el.x}%`,
                        top: `${el.y}%`,
                        transform: `scale(${el.scale})`,
                    }}
                    animate={{
                        y: [-15, 15, -15],
                        opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                        duration: el.duration,
                        delay: el.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    {/* Diya flame */}
                    <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
                        <ellipse cx="10" cy="20" rx="8" ry="4" fill="rgba(212, 175, 55, 0.6)" />
                        <path
                            d="M10 4C10 4 6 8 6 12C6 14.2091 7.79086 16 10 16C12.2091 16 14 14.2091 14 12C14 8 10 4 10 4Z"
                            fill="rgba(255, 150, 50, 0.8)"
                        >
                            <animate
                                attributeName="d"
                                dur="0.5s"
                                repeatCount="indefinite"
                                values="
                                    M10 4C10 4 6 8 6 12C6 14.2091 7.79086 16 10 16C12.2091 16 14 14.2091 14 12C14 8 10 4 10 4Z;
                                    M10 3C10 3 5 8 5 12C5 14.7614 7.23858 17 10 17C12.7614 17 15 14.7614 15 12C15 8 10 3 10 3Z;
                                    M10 4C10 4 6 8 6 12C6 14.2091 7.79086 16 10 16C12.2091 16 14 14.2091 14 12C14 8 10 4 10 4Z
                                "
                            />
                        </path>
                        <circle cx="10" cy="10" r="2" fill="rgba(255, 255, 200, 0.9)">
                            <animate
                                attributeName="r"
                                dur="0.3s"
                                repeatCount="indefinite"
                                values="2;2.5;2"
                            />
                        </circle>
                    </svg>
                </motion.div>
            ))}
        </div>
    );
}

"use client";

import { motion } from "framer-motion";

function LotusIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
            <path d="M50 0 C60 20 80 40 50 60 C20 40 40 20 50 0 Z" opacity="0.8" />
            <path d="M50 0 C70 30 90 50 50 70 C10 50 30 30 50 0 Z" opacity="0.6" transform="rotate(45 50 60)" />
            <path d="M50 0 C70 30 90 50 50 70 C10 50 30 30 50 0 Z" opacity="0.6" transform="rotate(-45 50 60)" />
            <circle cx="50" cy="60" r="10" opacity="0.9" />
        </svg>
    );
}

function ChakraIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
            <circle cx="50" cy="50" r="45" />
            <circle cx="50" cy="50" r="5" fill="currentColor" />
            {[...Array(24)].map((_, i) => (
                <line
                    key={i}
                    x1="50"
                    y1="50"
                    x2="50"
                    y2="5"
                    transform={`rotate(${i * 15} 50 50)`}
                />
            ))}
        </svg>
    );
}

function PaisleyIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
            <path d="M50,90 C20,90 10,70 10,50 C10,25 30,10 50,10 C70,10 90,30 90,50 C90,60 85,65 80,60 C75,55 80,45 80,40 C80,30 70,25 60,30 C50,35 50,45 55,50 C60,55 65,50 65,45" fill="none" stroke="currentColor" strokeWidth="3" />
            <circle cx="50" cy="50" r="2" />
        </svg>
    );
}


import { useEffect, useState } from "react";

export function ArtisticBackground() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-white">
            {/* Subtle Gradient Mesh */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-50/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-orange-50/20 via-transparent to-transparent" />

            {/* Floating Elements */}
            <div className="absolute inset-0 opacity-[0.03]"> {/* Very low opacity to keep it white/clean */}

                {/* Large Rotating Chakra - Top Left */}
                <motion.div
                    className="absolute -top-20 -left-20 text-[#D32F2F] w-96 h-96"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                >
                    <ChakraIcon className="w-full h-full" />
                </motion.div>

                {/* Large Rotating Chakra - Bottom Right (Slower) */}
                <motion.div
                    className="absolute -bottom-32 -right-32 text-[#D32F2F] w-[500px] h-[500px]"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
                >
                    <ChakraIcon className="w-full h-full" />
                </motion.div>

                {/* Floating Lotuses */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={`lotus-${i}`}
                        className="absolute text-[#D32F2F]"
                        initial={{
                            x: Math.random() * 100 + "vw",
                            y: Math.random() * 100 + "vh",
                            scale: Math.random() * 0.5 + 0.5,
                            opacity: 0,
                        }}
                        animate={{
                            y: [null, Math.random() * -100],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 20 + 20,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 10,
                        }}
                        style={{
                            width: `${Math.random() * 100 + 50}px`,
                            height: `${Math.random() * 100 + 50}px`,
                        }}
                    >
                        <LotusIcon className="w-full h-full" />
                    </motion.div>
                ))}

                {/* Floating Paisleys */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={`paisley-${i}`}
                        className="absolute text-yellow-600"
                        initial={{
                            x: Math.random() * 100 + "vw",
                            y: Math.random() * 100 + "vh",
                            rotate: 0,
                        }}
                        animate={{
                            y: [null, Math.random() * 50],
                            rotate: 360,
                        }}
                        transition={{
                            duration: Math.random() * 30 + 30,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{
                            width: `${Math.random() * 80 + 40}px`,
                            height: `${Math.random() * 80 + 40}px`,
                            opacity: 0.6
                        }}
                    >
                        <PaisleyIcon className="w-full h-full" />
                    </motion.div>
                ))}

            </div>
        </div>
    );
}

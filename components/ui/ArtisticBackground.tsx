"use client";

import { motion } from "framer-motion";
import { useId, useMemo } from "react";

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
function hashString(input: string) {
    let hash = 2166136261;
    for (let i = 0; i < input.length; i++) {
        hash ^= input.charCodeAt(i);
        hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
}

function makeRng(seed: number) {
    let state = seed || 1;
    return () => {
        state ^= state << 13;
        state ^= state >>> 17;
        state ^= state << 5;
        return (state >>> 0) / 4294967296;
    };
}

export function ArtisticBackground() {
    const id = useId();
    const { lotuses, paisleys } = useMemo(() => {
        const rand = makeRng(hashString(id));

        const lotuses = Array.from({ length: 5 }, (_, i) => {
            const size = 56 + rand() * 88;
            return {
                key: `lotus-${i}`,
                x: `${rand() * 100}vw`,
                y: `${rand() * 100}vh`,
                scale: 0.55 + rand() * 0.6,
                size,
                drift: -(40 + rand() * 140),
                duration: 22 + rand() * 22,
                delay: rand() * 10,
            };
        });

        const paisleys = Array.from({ length: 3 }, (_, i) => {
            const size = 44 + rand() * 72;
            return {
                key: `paisley-${i}`,
                x: `${rand() * 100}vw`,
                y: `${rand() * 100}vh`,
                size,
                drift: 20 + rand() * 60,
                duration: 30 + rand() * 30,
            };
        });

        return { lotuses, paisleys };
    }, [id]);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background">
            {/* Subtle Gradient Mesh */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-50/25 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-red-50/20 via-transparent to-transparent" />

            {/* Floating Elements */}
            <div className="absolute inset-0 opacity-[0.03]"> {/* Very low opacity to keep it white/clean */}

                {/* Large Rotating Chakra - Top Left */}
                <motion.div
                    className="absolute -top-20 -left-20 text-primary w-96 h-96"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                >
                    <ChakraIcon className="w-full h-full" />
                </motion.div>

                {/* Large Rotating Chakra - Bottom Right (Slower) */}
                <motion.div
                    className="absolute -bottom-32 -right-32 text-primary w-[500px] h-[500px]"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
                >
                    <ChakraIcon className="w-full h-full" />
                </motion.div>

                {/* Floating Lotuses */}
                {lotuses.map((l) => (
                    <motion.div
                        key={l.key}
                        className="absolute text-primary"
                        initial={{
                            x: l.x,
                            y: l.y,
                            scale: l.scale,
                            opacity: 0,
                        }}
                        animate={{
                            y: [null, l.drift],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: l.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: l.delay,
                        }}
                        style={{
                            width: `${l.size}px`,
                            height: `${l.size}px`,
                        }}
                    >
                        <LotusIcon className="w-full h-full" />
                    </motion.div>
                ))}

                {/* Floating Paisleys */}
                {paisleys.map((p) => (
                    <motion.div
                        key={p.key}
                        className="absolute text-accent"
                        initial={{
                            x: p.x,
                            y: p.y,
                            rotate: 0,
                        }}
                        animate={{
                            y: [null, p.drift],
                            rotate: 360,
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{
                            width: `${p.size}px`,
                            height: `${p.size}px`,
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

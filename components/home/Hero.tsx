"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { WarliBorder, MandalaBackground, ScrollIndicator, AnimatedDiya } from "@/components/ui/patterns";
import { FloatingElements } from "@/components/ui/FloatingElements";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div ref={ref} className="relative isolate px-6 pt-14 lg:px-8 bg-[#B22222] pb-12 overflow-hidden min-h-[95vh] flex items-center justify-center">
            {/* Floating decorative elements */}
            <FloatingElements
                count={20}
                color="rgba(212, 175, 55, 0.25)"
                minSize={4}
                maxSize={16}
            />

            {/* Floating Diyas on sides */}
            <motion.div
                className="absolute left-10 top-1/4 opacity-30"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
                <AnimatedDiya size={50} />
            </motion.div>
            <motion.div
                className="absolute right-10 top-1/3 opacity-30"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
                <AnimatedDiya size={40} />
            </motion.div>

            {/* 3D Background Pattern - Parallax Layer */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 z-0 opacity-20 pointer-events-none"
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]">
                    <MandalaBackground className="w-full h-full text-black mix-blend-overlay animate-spin-slow-reverse origin-center" />
                </div>
            </motion.div>

            {/* Secondary mandala for depth */}
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
                className="absolute inset-0 z-0 opacity-10 pointer-events-none"
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%]">
                    <MandalaBackground className="w-full h-full text-white animate-spin-slow origin-center" />
                </div>
            </motion.div>

            <motion.div
                style={{ y: textY, opacity }}
                className="mx-auto max-w-3xl text-center relative z-10 perspective-1000"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30, rotateX: 20 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {/* Announcement badge */}
                    <motion.div
                        className="hidden sm:mb-8 sm:flex sm:justify-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <motion.div
                            className="relative rounded-full px-4 py-2 text-sm leading-6 text-red-100 ring-1 ring-white/20 hover:ring-white/40 transition-all backdrop-blur-sm bg-white/5 cursor-pointer group"
                            whileHover={{ scale: 1.02 }}
                        >
                            <span className="inline-flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                                </span>
                                Announcing our next global summit.
                            </span>
                            {" "}
                            <a href="/confluence" className="font-semibold text-white hover:text-accent transition-colors">
                                Read more <span aria-hidden="true">&rarr;</span>
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Tilak-style element - Gold for contrast on Red */}
                    <div className="flex justify-center mb-6">
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 64, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="w-1 bg-accent rounded-full animate-gold-glow"
                        />
                    </div>

                    {/* Animated headline */}
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif drop-shadow-lg">
                        <AnimatedText
                            text="Cultivating the Next Generation of Intellectuals"
                            delay={0.6}
                            staggerChildren={0.05}
                        />
                    </h1>

                    <motion.p
                        className="mt-6 text-lg leading-8 text-red-100 font-light max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        The Young Thinkers' Forum is a dedicated space for rigorous debate, critical analysis, and the nurturing of young Indian thought leaders.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="mt-10 flex items-center justify-center gap-x-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.6 }}
                    >
                        <Link href="/join">
                            <motion.button
                                className="group relative overflow-hidden rounded-none bg-white px-8 py-4 text-sm font-bold text-[#B22222] shadow-xl flex items-center gap-2"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Join the Discussion
                                    <motion.span
                                        animate={{ x: [0, 4, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.span>
                                </span>
                                {/* Shimmer effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full"
                                    animate={{ translateX: ["−100%", "200%"] }}
                                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                                />
                            </motion.button>
                        </Link>
                        <Link
                            href="/about"
                            className="group text-sm font-semibold leading-6 text-white hover:text-accent transition-colors flex items-center gap-1"
                        >
                            <span>Learn more</span>
                            <motion.span
                                aria-hidden="true"
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                →
                            </motion.span>
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
            >
                <ScrollIndicator />
            </motion.div>

            {/* Warli Border at bottom */}
            <div className="absolute inset-x-0 bottom-0 z-10 w-full translate-y-1">
                <WarliBorder className="text-white/30 w-full" />
            </div>

            {/* Gradient overlay at bottom for smooth transition */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
        </div>
    );
}

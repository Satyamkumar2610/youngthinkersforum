"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
    WarliBorder,
    MandalaBackground,
    AnimatedDiya,
    TajMahalSilhouette,
    PaisleyButa,
    MadhubaniMotif
} from "@/components/ui/patterns";
import { FloatingElements } from "@/components/ui/FloatingElements";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { FloatingCulturalElement, PulsingGlow } from "@/components/ui/IndianAnimations";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const monumentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div ref={ref} className="relative isolate px-6 pt-14 lg:px-8 bg-[#B22222] pb-12 overflow-hidden min-h-[100vh] flex items-center justify-center">
            {/* Floating decorative elements */}
            <FloatingElements
                count={25}
                color="rgba(212, 175, 55, 0.2)"
                minSize={3}
                maxSize={12}
            />

            {/* Taj Mahal Silhouette - Main parallax background */}
            <motion.div
                style={{ y: monumentY }}
                className="absolute inset-x-0 bottom-0 z-0 opacity-15 pointer-events-none flex justify-end pr-[5%]" // Align to right for balance
            >
                <TajMahalSilhouette className="text-white" size={700} />
            </motion.div>

            {/* Floating Paisley elements */}
            <FloatingCulturalElement
                className="absolute right-[10%] top-[20%] opacity-20"
                delay={0}
                amplitude={15}
                duration={7}
            >
                <PaisleyButa className="text-accent" size={60} />
            </FloatingCulturalElement>
            {/* ... other floating elements can remain similar or be adjusted ... */}

            {/* ... (keep background patterns) ... */}

            <motion.div
                style={{ y: textY, opacity }}
                className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full"
            >
                <motion.div
                    className="max-w-3xl" // Container for left-aligned content
                    initial={{ opacity: 0, x: -30 }} // Slide in from left
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {/* Announcement badge */}
                    <motion.div
                        className="hidden sm:mb-8 sm:flex" // Removed justify-center
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
                    <div className="flex justify-start mb-6 pl-1"> {/* Left align */}
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 64, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="w-1 bg-accent rounded-full animate-gold-glow"
                        />
                    </div>

                    {/* Animated headline with 3D effect */}
                    <motion.h1
                        className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl font-serif drop-shadow-lg text-left" // Explicit text-left
                        style={{ textShadow: "0 4px 30px rgba(0,0,0,0.3)" }}
                    >
                        <AnimatedText
                            text="Cultivating the Next"
                            delay={0.6}
                            staggerChildren={0.04}
                        />
                        <br />
                        <span className="text-accent">
                            <AnimatedText
                                text="Generation of Intellectuals"
                                delay={1.2}
                                staggerChildren={0.04}
                            />
                        </span>
                    </motion.h1>

                    <motion.p
                        className="mt-8 text-lg leading-8 text-red-100/90 font-light max-w-2xl text-left" // Left align
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8, duration: 0.8 }}
                    >
                        The Young Thinkers' Forum is a dedicated space for rigorous debate, critical analysis, and the nurturing of young Indian thought leaders.
                    </motion.p>

                    {/* CTA Buttons with cultural styling */}
                    <motion.div
                        className="mt-12 flex items-center justify-start gap-x-6" // Left align justify-start
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.2, duration: 0.6 }}
                    >
                        <Link href="/join">
                            <PulsingGlow>
                                <motion.button
                                    className="group relative overflow-hidden rounded-none bg-white px-8 py-4 text-sm font-bold text-[#B22222] shadow-xl flex items-center gap-2 hover:bg-red-50 transition-colors"
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
                            </PulsingGlow>
                        </Link>
                        <Link
                            href="/about"
                            className="group text-sm font-semibold leading-6 text-white hover:text-accent transition-colors flex items-center gap-1"
                        >
                            <span className="border-b border-white/30 hover:border-accent transition-colors pb-0.5">Learn more</span>
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



            {/* Warli Border at bottom */}
            <div className="absolute inset-x-0 bottom-0 z-10 w-full translate-y-1">
                <WarliBorder className="text-white/25 w-full" />
            </div>

            {/* Gradient overlay at bottom for smooth transition */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
        </div>
    );
}

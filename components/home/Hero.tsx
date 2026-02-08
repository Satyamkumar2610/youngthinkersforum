"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WarliBorder, MandalaBackground } from "@/components/ui/patterns";
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

    return (
        <div ref={ref} className="relative isolate px-6 pt-14 lg:px-8 bg-[#B22222] pb-12 overflow-hidden min-h-[90vh] flex items-center justify-center">
            {/* 3D Background Pattern - Parallax Layer */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 z-0 opacity-20 pointer-events-none"
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]">
                    <MandalaBackground className="w-full h-full text-black mix-blend-overlay animate-spin-slow-reverse origin-center" />
                </div>
            </motion.div>

            <motion.div
                style={{ y: textY }}
                className="mx-auto max-w-3xl text-center relative z-10 perspective-1000"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30, rotateX: 20 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-red-100 ring-1 ring-white/20 hover:ring-white/40 transition-all backdrop-blur-sm bg-white/5">
                            Announcing our next global summit.{" "}
                            <a href="/confluence" className="font-semibold text-white hover:text-accent">
                                Read more <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>

                    {/* Tilak-style element - Gold for contrast on Red */}
                    <div className="flex justify-center mb-6">
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 64 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="w-1 bg-accent rounded-full opacity-100 shadow-[0_0_15px_rgba(212,175,55,0.6)]"
                        ></motion.div>
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif drop-shadow-lg">
                        Cultivating the Next Generation of Intellectuals
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-red-100 font-light max-w-2xl mx-auto">
                        The Young Thinkers' Forum is a dedicated space for rigorous debate, critical analysis, and the nurturing of young Indian thought leaders.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/join"
                            className="rounded-none bg-white px-8 py-4 text-sm font-bold text-[#B22222] shadow-xl hover:bg-gray-100 hover:scale-105 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white flex items-center gap-2"
                        >
                            Join the Discussion <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/about" className="text-sm font-semibold leading-6 text-white hover:text-accent transition-colors flex items-center gap-1 hover:translate-x-1">
                            Learn more <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </motion.div>
            </motion.div>

            <div className="absolute inset-x-0 bottom-0 z-10 w-full translate-y-1">
                <WarliBorder className="text-white/30 w-full" />
            </div>
        </div>
    );
}

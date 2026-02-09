"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="hero-split">
            {/* Background Year Element */}
            <motion.span
                className="bg-year right-0 top-1/2 -translate-y-1/2"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                2018
            </motion.span>

            {/* Left Side: Large, Bold Serif Text */}
            <div className="flex flex-col justify-center px-8 lg:px-16 py-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Tilak accent */}
                    <div className="w-1 h-16 bg-[#B22222] mb-8" />

                    <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1A1A1A] leading-[1.1] tracking-tight">
                        Shaping India&apos;s
                        <br />
                        <span className="text-[#B22222]">Intellectual Future.</span>
                    </h1>

                    <p className="mt-8 text-lg text-gray-600 max-w-lg leading-relaxed">
                        The Young Thinkers' Forum is a dedicated space for rigorous debate, 
                        critical analysis, and the nurturing of young Indian thought leaders.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-12 flex flex-wrap items-center gap-6">
                        <Link href="/join">
                            <button className="group inline-flex items-center gap-2 bg-[#B22222] px-8 py-4 text-white font-medium hover:bg-[#8B0000] transition-none">
                                Join the Discussion
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                        <Link
                            href="/about"
                            className="text-[#1A1A1A] font-medium border-b-2 border-[#B22222] pb-1 hover:text-[#B22222] transition-none"
                        >
                            Learn more →
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Right Side: Sharp B&W Photo with Red Border */}
            <motion.div
                className="hidden md:flex items-center justify-center p-8 lg:p-16 relative z-10"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <div className="image-frame-red w-full max-w-lg aspect-[4/3] relative">
                    {/* Placeholder for forum discussion photo */}
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <div className="text-center text-gray-500">
                            <svg
                                className="w-16 h-16 mx-auto mb-2 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1}
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                            <span className="text-sm font-medium">Forum Discussion</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Bottom Warli Border */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B22222]/30 to-transparent" />
        </section>
    );
}

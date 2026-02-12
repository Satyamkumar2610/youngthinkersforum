"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-transparent overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full py-12 lg:py-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left: Content */}
                    <div className="relative z-10 max-w-2xl order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="tag-academic mb-6 inline-block">
                                The Young Thinkers Lab
                            </span>

                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1F2937] leading-[1.1] mb-6 tracking-tight">
                                Shaping India&apos;s <br />
                                <span className="text-[#D32F2F] relative inline-block">
                                    Intellectual Future
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#D32F2F]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                    </svg>
                                </span>
                            </h1>

                            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                                A premier platform for rigorous debate, critical analysis, and nurturing
                                the next generation of thought leaders. Est. 2018.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/events"
                                    className="btn-academic btn-academic-outline group"
                                >
                                    Explore Verticals
                                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                                <Link
                                    href="/contact"
                                    className="btn-academic btn-academic-primary"
                                >
                                    Join the Community
                                </Link>
                            </div>
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div
                            className="mt-12 pt-8 border-t border-gray-100 flex items-center gap-4 text-sm text-gray-500"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gray-300 animate-pulse" />
                                    </div>
                                ))}
                            </div>
                            <p>Joined by <strong>500+</strong> Young Thinkers</p>
                        </motion.div>
                    </div>

                    {/* Right: Heritage Modernism Art */}
                    <motion.div
                        className="relative h-full flex justify-center lg:justify-end order-1 lg:order-2"
                        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    >
                        <div className="relative w-full max-w-lg aspect-square">
                            {/* Decorative background blob */}
                            <div className="absolute inset-0 bg-[#D32F2F]/5 rounded-full blur-3xl transform translate-x-4 translate-y-4 scale-90" />

                            <Image
                                src="/images/hero_heritage_modern.png"
                                alt="Heritage Modernism - Young Thinkers Forum"
                                width={800}
                                height={800}
                                className="object-contain relative z-10 drop-shadow-sm mix-blend-multiply"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 1 }}
                    >
                        <span className="text-[10px] uppercase tracking-widest text-gray-400">Scroll</span>
                        <motion.div
                            className="w-[1px] h-12 bg-gray-200 overflow-hidden relative"
                        >
                            <motion.div
                                className="absolute top-0 left-0 w-full h-1/2 bg-[#D32F2F]"
                                animate={{ top: ["-100%", "100%"] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

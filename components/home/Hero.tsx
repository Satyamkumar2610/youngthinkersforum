"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RangoliCorner, ScrollIndicator } from "@/components/ui/patterns";

export function Hero() {
    return (
        <section className="relative min-h-[92vh] flex items-center bg-transparent overflow-hidden">
            <div className="absolute inset-0 bg-jaali opacity-[0.03] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(178,34,34,0.10),_transparent_55%)] pointer-events-none" />
            <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full py-12 lg:py-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left: Content (Clean Style) - Spans 7 cols */}
                    <div className="relative z-10 lg:col-span-7 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-transparent p-4 lg:p-0"
                        >
                            <span className="tag-academic mb-6 inline-block bg-white/70 backdrop-blur text-primary font-serif border border-border">
                                Est. 2018 | The Young Thinkers Lab
                            </span>

                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.06] mb-6 tracking-tight font-heading">
                                Shaping India&apos;s
                                <br />
                                <span className="text-primary relative inline-block">
                                    Intellectual Future
                                    <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-primary/20" />
                                </span>
                            </h1>

                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg font-medium">
                                A premier platform for rigorous debate, critical analysis, and nurturing
                                the next generation of thought leaders.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <MagneticButton href="/events" variant="secondary" className="uppercase tracking-wider text-sm">
                                    Explore Verticals <ArrowRight className="ml-2 w-4 h-4" />
                                </MagneticButton>
                                <MagneticButton href="/contact" variant="primary" className="uppercase tracking-wider text-sm">
                                    Join Community
                                </MagneticButton>
                            </div>
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div
                            className="mt-12 flex items-center gap-4 text-sm text-gray-600 font-medium"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-white/70 overflow-hidden relative shadow-subtle ring-1 ring-border">
                                        <div className="absolute inset-0 bg-jaali opacity-[0.10]" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-muted-foreground">
                                Joined by <strong className="text-primary">500+</strong> Young Thinkers
                            </p>
                        </motion.div>
                    </div>

                    {/* Right: Cyber-Traditional Art - Spans 5 cols */}
                    <motion.div
                        className="relative h-full flex justify-center lg:justify-end order-1 lg:order-2 lg:col-span-5"
                        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    >
                        <div className="relative w-full max-w-[460px] aspect-[4/5] overflow-hidden bg-white/70 backdrop-blur border border-border shadow-floating">
                            <div className="absolute inset-0 bg-jaali opacity-[0.10]" />
                            <div className="absolute -top-2 -left-2 text-primary/60">
                                <RangoliCorner size={90} />
                            </div>
                            <div className="absolute -bottom-2 -right-2 text-primary/50 rotate-180">
                                <RangoliCorner size={90} />
                            </div>

                            <Image
                                src="/images/hero_heritage_modern.png"
                                alt="Cyber-Traditional Young Thinker"
                                width={800}
                                height={1000}
                                className="object-cover w-full h-full relative z-10 hover:scale-[1.03] transition-transform duration-700"
                                priority
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent z-20 pointer-events-none" />
                            <div className="absolute bottom-0 left-0 right-0 z-30 p-5">
                                <p className="text-white/90 text-xs tracking-[0.25em] uppercase">
                                    Rooted • Rigorous • Modern
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 1 }}
                    >
                        <div className="text-primary">
                            <ScrollIndicator />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

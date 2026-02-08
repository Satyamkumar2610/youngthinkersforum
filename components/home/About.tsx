"use client";

import Link from "next/link";
import { BlockPrintIcon, MandalaBackground, LotusPattern } from "@/components/ui/patterns";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

const benefits = [
    "Rigorous intellectual debate",
    "Policy analysis & formulation",
    "Networking with thought leaders",
    "Cultural & historical immersion",
];

export function About() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 pattern-rangoli opacity-30 pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
                    <ScrollReveal animation="slide-in" className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            {/* Tilak-style Heading */}
                            <motion.h2
                                className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif tilak-heading tilak-heading-animated"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                Who We Are
                            </motion.h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                The Young Thinkers' Forum is a premier platform for the youth of India to engage with critical national and global issues. We believe in the power of ideas to shape the future.
                            </p>

                            {/* Staggered benefits list */}
                            <StaggerContainer className="mt-10 max-w-xl space-y-6 text-base leading-7 text-gray-600 lg:max-w-none" delay={0.2}>
                                {benefits.map((benefit) => (
                                    <StaggerItem key={benefit}>
                                        <motion.div
                                            className="relative pl-9 group cursor-default"
                                            whileHover={{ x: 4 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <dt className="inline font-semibold text-gray-900">
                                                <motion.div
                                                    className="absolute left-1 top-1"
                                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                                >
                                                    <BlockPrintIcon className="h-5 w-5 text-primary" />
                                                </motion.div>
                                            </dt>
                                            <dd className="inline group-hover:text-primary transition-colors">{benefit}</dd>
                                        </motion.div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>

                            <motion.div
                                className="mt-10"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                <Link
                                    href="/about"
                                    className="group inline-flex items-center gap-2 text-sm font-semibold leading-6 text-primary hover:text-red-800 transition-colors"
                                >
                                    <span className="link-underline">Read our full mission statement</span>
                                    <motion.span
                                        aria-hidden="true"
                                        animate={{ x: [0, 4, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        →
                                    </motion.span>
                                </Link>
                            </motion.div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="scale-up" delay={0.2} className="relative">
                        {/* Abstract visual representation */}
                        <motion.div
                            className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-gray-50 to-red-50/30 object-cover shadow-xl ring-1 ring-gray-400/10 flex items-center justify-center overflow-hidden relative group"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Animated mandala background */}
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            >
                                <MandalaBackground className="text-primary/10 w-[150%] h-[150%]" />
                            </motion.div>

                            {/* Jaali pattern overlay */}
                            <div className="absolute inset-0 bg-jaali opacity-20" />

                            {/* Central content */}
                            <motion.div
                                className="text-center p-8 relative z-10"
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <motion.span
                                    className="font-serif text-7xl text-primary/30 font-bold block"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                >
                                    YTF
                                </motion.span>
                                <span className="text-sm text-gray-400 uppercase tracking-widest mt-2 block">Est. 2026</span>
                            </motion.div>

                            {/* Decorative lotus */}
                            <div className="absolute bottom-4 right-4 opacity-20">
                                <LotusPattern className="text-primary" size={80} />
                            </div>

                            {/* Decorative glow */}
                            <motion.div
                                className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute -top-10 -left-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl"
                                animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
                                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                            />
                        </motion.div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}

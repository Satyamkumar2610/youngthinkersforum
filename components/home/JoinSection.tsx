"use client";

import Link from "next/link";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { FloatingElements } from "@/components/ui/FloatingElements";
import { motion } from "framer-motion";
import { BookOpen, Users, ArrowRight } from "lucide-react";

const features = [
    {
        icon: BookOpen,
        title: "Weekly Articles",
        description: "Access exclusive analysis and opinion pieces from our members.",
    },
    {
        icon: Users,
        title: "Global Network",
        description: "Connect with like-minded individuals from universities across India.",
    },
];

export function JoinSection() {
    return (
        <section className="relative isolate overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
            {/* Animated background gradient */}
            <motion.div
                className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.15, 0.25, 0.15],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
            >
                <div
                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary/30 to-accent/30"
                    style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                    }}
                />
            </motion.div>

            {/* Floating elements */}
            <FloatingElements count={10} color="rgba(178, 34, 34, 0.08)" minSize={6} maxSize={14} />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <ScrollReveal width="100%">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        {/* Left content */}
                        <motion.div
                            className="max-w-xl lg:max-w-lg"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif tilak-heading tilak-heading-animated">
                                Join the Movement
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-gray-600">
                                Be a part of the Young Thinkers' Forum. Contribute your voice to the discourse that matters.
                                Membership is open to all students and young professionals.
                            </p>
                            <motion.div
                                className="mt-8"
                                whileHover={{ scale: 1.02 }}
                            >
                                <Link href="/join">
                                    <motion.button
                                        className="group relative overflow-hidden rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg flex items-center gap-2"
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            Apply for Membership
                                            <motion.span
                                                animate={{ x: [0, 4, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            >
                                                <ArrowRight className="w-4 h-4" />
                                            </motion.span>
                                        </span>
                                        {/* Shimmer effect */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                                            animate={{ translateX: ["−100%", "200%"] }}
                                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                        />
                                    </motion.button>
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Right features */}
                        <StaggerContainer
                            className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2"
                            staggerDelay={0.15}
                        >
                            {features.map((feature) => (
                                <StaggerItem key={feature.title}>
                                    <motion.div
                                        className="flex flex-col items-start group"
                                        whileHover={{ y: -4 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <motion.div
                                            className="rounded-lg bg-gradient-to-br from-red-50 to-red-100/50 p-3 ring-1 ring-red-100 group-hover:ring-primary/30 transition-all"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                        >
                                            <feature.icon className="h-6 w-6 text-primary" />
                                        </motion.div>
                                        <dt className="mt-4 font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                            {feature.title}
                                        </dt>
                                        <dd className="mt-2 leading-7 text-gray-600">
                                            {feature.description}
                                        </dd>
                                    </motion.div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}

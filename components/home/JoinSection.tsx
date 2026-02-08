"use client";

import Link from "next/link";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { FloatingElements } from "@/components/ui/FloatingElements";
import { MonumentSkyline, MehndiPattern, PaisleyButa, MadhubaniMotif } from "@/components/ui/patterns";
import { CulturalReveal, PulsingGlow, FloatingCulturalElement, ElasticButton } from "@/components/ui/IndianAnimations";
import { motion } from "framer-motion";
import { BookOpen, Users, ArrowRight, Sparkles } from "lucide-react";

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
        <section className="relative isolate overflow-hidden bg-[#B22222] py-16 sm:py-24 lg:py-32">
            {/* Monument Skyline Background */}
            <div className="absolute inset-x-0 bottom-0 z-0 opacity-20 pointer-events-none">
                <MonumentSkyline className="text-white" />
            </div>

            {/* Floating cultural elements */}
            <FloatingCulturalElement
                className="absolute top-10 left-[10%] opacity-15"
                delay={0}
                amplitude={15}
                duration={8}
            >
                <PaisleyButa className="text-accent" size={40} />
            </FloatingCulturalElement>
            <FloatingCulturalElement
                className="absolute top-20 right-[15%] opacity-15"
                delay={1.5}
                amplitude={12}
                duration={7}
            >
                <MadhubaniMotif type="peacock" className="text-white" size={50} />
            </FloatingCulturalElement>
            <FloatingCulturalElement
                className="absolute bottom-40 left-[20%] opacity-10"
                delay={2}
                amplitude={18}
                duration={9}
            >
                <MadhubaniMotif type="lotus" className="text-accent" size={45} />
            </FloatingCulturalElement>

            {/* Mehndi corner decorations */}
            <div className="absolute top-0 left-0 opacity-10">
                <MehndiPattern className="text-white" size={120} />
            </div>
            <div className="absolute top-0 right-0 opacity-10 scale-x-[-1]">
                <MehndiPattern className="text-white" size={120} />
            </div>

            {/* Floating golden particles */}
            <FloatingElements count={15} color="rgba(212, 175, 55, 0.2)" minSize={4} maxSize={10} />

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
                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-white/20 to-accent/30"
                    style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                    }}
                />
            </motion.div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <ScrollReveal width="100%">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        {/* Left content */}
                        <CulturalReveal direction="left" className="max-w-xl lg:max-w-lg">
                            {/* Decorative element */}
                            <motion.div
                                className="flex items-center gap-2 mb-4"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <Sparkles className="w-5 h-5 text-accent" />
                                <span className="text-accent text-sm font-medium uppercase tracking-wider">Be Part of Something Greater</span>
                            </motion.div>

                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl font-serif">
                                Join the Movement
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-red-100">
                                Be a part of the Young Thinkers' Forum. Contribute your voice to the discourse that matters.
                                Membership is open to all students and young professionals.
                            </p>

                            <motion.div
                                className="mt-8"
                                whileHover={{ scale: 1.02 }}
                            >
                                <Link href="/join">
                                    <PulsingGlow color="rgba(255, 255, 255, 0.3)">
                                        <motion.button
                                            className="group relative overflow-hidden rounded-none bg-white px-8 py-4 text-sm font-bold text-[#B22222] shadow-xl flex items-center gap-2 hover:bg-red-50 transition-colors"
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
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full"
                                                animate={{ translateX: ["−100%", "200%"] }}
                                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                            />
                                        </motion.button>
                                    </PulsingGlow>
                                </Link>
                            </motion.div>
                        </CulturalReveal>

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
                                            className="rounded-lg bg-white/10 backdrop-blur-sm p-3 ring-1 ring-white/20 group-hover:ring-accent/50 group-hover:bg-white/20 transition-all"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                        >
                                            <feature.icon className="h-6 w-6 text-accent" />
                                        </motion.div>
                                        <dt className="mt-4 font-semibold text-white group-hover:text-accent transition-colors">
                                            {feature.title}
                                        </dt>
                                        <dd className="mt-2 leading-7 text-red-100">
                                            {feature.description}
                                        </dd>
                                    </motion.div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </ScrollReveal>
            </div>

            {/* Bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
        </section>
    );
}

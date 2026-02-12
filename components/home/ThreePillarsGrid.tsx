"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, Target, Heart } from "lucide-react";

export function ThreePillarsGrid() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">

                <div className="text-center mb-16">
                    <span className="tag-academic mb-4">Our Core Values</span>
                    <h2 className="text-4xl font-bold text-[#1F2937]">
                        Vision & <span className="text-[#D32F2F]">Mission</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Art */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center"
                    >
                        <div className="relative w-full max-w-md aspect-square">
                            <div className="absolute inset-0 bg-[#FFEBEE] rounded-full blur-3xl opacity-50 transform scale-90" />
                            <Image
                                src="/images/vision_mission.png"
                                alt="Vision and Mission Diya"
                                width={500}
                                height={500}
                                className="object-contain relative z-10"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Vision Cards */}
                    <div className="space-y-8">
                        <motion.div
                            className="bg-[#FAFAFA] p-8 rounded-2xl border border-gray-100 hover:border-[#D32F2F]/30 transition-colors shadow-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-lg shadow-sm text-[#D32F2F]">
                                    <Eye className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#1F2937] mb-2">Our Vision</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        To cultivate a generation of young thinkers who are rooted in their cultural identity
                                        yet universally competent to address global challenges.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="bg-[#FAFAFA] p-8 rounded-2xl border border-gray-100 hover:border-[#D32F2F]/30 transition-colors shadow-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-lg shadow-sm text-[#D32F2F]">
                                    <Target className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#1F2937] mb-2">Our Mission</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        To provide rigorous platforms for debate, research, and policy analysis,
                                        bridging the gap between academic theory and social reality.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

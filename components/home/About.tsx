"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const milestones = [
    { year: "2018", title: "Foundation", desc: "Established in Bhopal with 50 members." },
    { year: "2019", title: "Expansion", desc: "First State-level Conclave held." },
    { year: "2020", title: "Digital Pivot", desc: "Launched online policy labs during pandemic." },
    { year: "2021", title: "National Presence", desc: "Chapters opened in 3 new states." },
    { year: "2022", title: "Fellowship", desc: "Inaugural Policy Fellowship cohort." },
    { year: "2023", title: "Media Arm", desc: "Started 'The Indian Thinker' journal." },
];

export function About() {
    return (
        <section className="py-24 bg-[#FAFAFA] overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Who We Are Context */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="tag-academic mb-4">Who We Are</span>
                            <h2 className="text-4xl font-bold text-[#1F2937] mb-6">
                                Custodians of <span className="text-[#D32F2F]">Heritage</span>,<br />
                                Architects of Future.
                            </h2>
                            <div className="prose prose-lg text-gray-600">
                                <p className="mb-4">
                                    Young Thinkers Forum is an ecosystem of intellectual rigor. We exist to challenge
                                    shallow narratives and build deep capacity for critical thinking among Indian youth.
                                </p>
                                <p>
                                    From small discussion circles to national conclaves, our journey has been
                                    defined by a relentless pursuit of truth and knowledge.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Scroll Art */}
                    <div className="flex justify-center relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#D32F2F]/5 to-transparent rounded-full blur-2xl" />
                        <Image
                            src="/images/history_scroll.png"
                            alt="History Scroll"
                            width={400}
                            height={400}
                            className="relative z-10 drop-shadow-md transform rotate-3 hover:rotate-0 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>

            {/* History Ticker */}
            <div className="w-full bg-white border-y border-gray-100 py-12 relative">
                <div className="max-w-7xl mx-auto px-6 mb-8">
                    <h3 className="text-xl font-bold text-[#1F2937]">Our Journey</h3>
                </div>

                {/* Rolling Ticker */}
                <div className="flex overflow-hidden group">
                    <motion.div
                        className="flex gap-8 hover:pause-animation"
                        animate={{ x: [0, -1000] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30,
                                ease: "linear",
                            },
                        }}
                    >
                        {/* Duplicate lists for seamless loop */}
                        {[...milestones, ...milestones, ...milestones].map((item, i) => (
                            <div key={i} className="flex-shrink-0 w-80 p-6 bg-[#FAFAFA] border border-gray-100 rounded-xl hover:border-[#D32F2F] transition-colors cursor-default">
                                <span className="text-4xl font-bold text-[#E5E7EB] block mb-2">{item.year}</span>
                                <h4 className="text-lg font-bold text-[#D32F2F] mb-1">{item.title}</h4>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

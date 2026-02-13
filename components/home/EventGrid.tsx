"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, MapPin, ArrowRight, FileText } from "lucide-react";
import content from "@/content.json";

export function EventGrid() {
    const events = content.events;
    const publications = [
        { title: "The Indian Thinker Vol. 7", date: "Jan 2026", tag: "Journal" },
        { title: "Policy Brief: Education 2030", date: "Dec 2025", tag: "Research" },
        { title: "Cultural Economics in MP", date: "Nov 2025", tag: "Case Study" },
    ];

    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Section 1: Events & Verticals */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="tag-academic mb-4">What We Do</span>
                        <h2 className="text-3xl lg:text-4xl font-bold font-heading text-[#1F2937]">
                            Verticals & <span className="text-[#C21807]">Engagements</span>
                        </h2>
                    </div>
                    <Link href="/events" className="btn-academic btn-academic-outline text-sm">
                        Full Calendar
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Link href="/events" className="group block h-full">
                                <article className="bg-white border border-gray-200 h-full flex flex-col rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className="h-48 bg-gray-200 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className="bg-[#C21807]/90 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                                {event.type}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow relative bg-white z-20">
                                        <div className="flex items-center gap-4 text-xs text-[#C21807] font-medium mb-4 font-mono">
                                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {event.date}</span>
                                        </div>
                                        <h3 className="text-xl font-bold font-heading text-[#1F2937] mb-3 group-hover:text-[#C21807] transition-colors line-clamp-2 leading-tight">
                                            {event.title}
                                        </h3>
                                        <div className="mt-auto pt-4 flex gap-2 border-t border-gray-100">
                                            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 group-hover:text-[#C21807] transition-colors">Read More</span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Section 2: Publications Showcase */}
                <div className="bg-[#FAFAFA] rounded-3xl p-8 lg:p-12 relative overflow-hidden border border-gray-100">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFCDD2] opacity-20 rounded-full blur-3xl transform translate-x-32 -translate-y-32" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <span className="tag-academic mb-4 bg-white border border-gray-100">Publications</span>
                            <h3 className="text-3xl font-bold font-heading text-[#1F2937] mb-6">
                                Research & <br />
                                <span className="text-[#C21807]">Intellectual Output</span>
                            </h3>
                            <p className="text-gray-600 mb-8 max-w-md">
                                Read our latest journals, policy briefs, and articles. We publish rigorous analysis
                                on issues ranging from education policy to cultural economics.
                            </p>
                            <Link href="/research" className="btn-academic btn-academic-primary">
                                Browse Library
                            </Link>
                        </div>

                        <div className="relative">
                            {/* Quill Art */}
                            <div className="absolute -top-12 -right-12 w-48 h-48 opacity-20 lg:opacity-100 pointer-events-none">
                                <Image src="/images/publications_quill.png" alt="Quill" width={200} height={200} className="object-contain" />
                            </div>

                            {/* Publication Cards Stack */}
                            <div className="space-y-4">
                                {publications.map((pub, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ x: 50, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between hover:border-[#D32F2F] transition-colors cursor-pointer group"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="bg-[#FFEBEE] p-3 rounded-lg text-[#D32F2F]">
                                                <FileText className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#1F2937] group-hover:text-[#D32F2F] transition-colors">{pub.title}</h4>
                                                <span className="text-xs text-gray-500">{pub.date}</span>
                                            </div>
                                        </div>
                                        <span className="text-xs font-semibold bg-gray-100 px-2 py-1 rounded text-gray-600 uppercase">
                                            {pub.tag}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

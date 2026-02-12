"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export function JoinSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Community Art */}
                    <motion.div
                        className="relative order-2 lg:order-1"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative w-full aspect-square max-w-lg mx-auto">
                            <div className="absolute inset-0 bg-[#FFCDD2] rounded-full blur-3xl opacity-40" />
                            <Image
                                src="/images/community_connect.png"
                                alt="Join Young India Community"
                                width={600}
                                height={600}
                                className="object-contain relative z-10 p-4 drop-shadow-md"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        className="order-1 lg:order-2"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="tag-academic mb-6">Join the Movement</span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-[#1F2937] mb-6">
                            Connect with <br />
                            <span className="text-[#D32F2F]">Young India.</span>
                        </h2>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            We are building a digital and physical network of intellectuals.
                            Follow us on social media for daily updates, or apply to join our core team.
                        </p>

                        {/* Social Links Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-10">
                            <a href="#" className="flex items-center gap-3 p-4 bg-[#FAFAFA] rounded-xl border border-gray-100 hover:border-[#D32F2F] hover:bg-white transition-all group">
                                <Instagram className="w-5 h-5 text-[#D32F2F]" />
                                <span className="font-semibold text-gray-700 group-hover:text-[#D32F2F]">Instagram</span>
                            </a>
                            <a href="#" className="flex items-center gap-3 p-4 bg-[#FAFAFA] rounded-xl border border-gray-100 hover:border-[#0077B5] hover:bg-white transition-all group">
                                <Linkedin className="w-5 h-5 text-[#0077B5]" />
                                <span className="font-semibold text-gray-700 group-hover:text-[#0077B5]">LinkedIn</span>
                            </a>
                            <a href="#" className="flex items-center gap-3 p-4 bg-[#FAFAFA] rounded-xl border border-gray-100 hover:border-[#1DA1F2] hover:bg-white transition-all group">
                                <Twitter className="w-5 h-5 text-[#1DA1F2]" />
                                <span className="font-semibold text-gray-700 group-hover:text-[#1DA1F2]">X (Twitter)</span>
                            </a>
                            <a href="#" className="flex items-center gap-3 p-4 bg-[#FAFAFA] rounded-xl border border-gray-100 hover:border-[#FF0000] hover:bg-white transition-all group">
                                <Youtube className="w-5 h-5 text-[#FF0000]" />
                                <span className="font-semibold text-gray-700 group-hover:text-[#FF0000]">YouTube</span>
                            </a>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/contact"
                                className="relative btn-academic btn-academic-primary w-full sm:w-auto text-center overflow-hidden"
                            >
                                <motion.span
                                    className="absolute inset-0 bg-white/20"
                                    animate={{ x: ["-100%", "100%"] }}
                                    transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 3 }}
                                />
                                Start Application
                            </Link>
                            <Link
                                href="/about"
                                className="btn-academic btn-academic-outline w-full sm:w-auto text-center"
                            >
                                Partner with Us <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

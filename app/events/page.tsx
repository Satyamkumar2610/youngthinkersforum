"use client";

import { events } from "@/lib/data";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { AnimatedText } from "@/components/ui/AnimatedText";

export default function EventsPage() {
    return (
        <div className="bg-gradient-to-b from-white via-red-50/10 to-white py-24 sm:py-32 min-h-screen">
            {/* Background decoration */}
            <div className="fixed inset-0 pattern-rangoli opacity-5 pointer-events-none z-0" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <ScrollReveal animation="fade-up" className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif tilak-heading tilak-heading-animated">
                        <AnimatedText text="Events Calendar" staggerChildren={0.06} />
                    </h2>
                    <motion.p
                        className="mt-6 text-lg leading-8 text-gray-600"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Participate in our summits, workshops, and cultural evenings.
                    </motion.p>
                </ScrollReveal>

                <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
                    <StaggerContainer className="space-y-8" staggerDelay={0.1}>
                        {events.map((event, index) => (
                            <StaggerItem key={event.id}>
                                <motion.div
                                    className="flex flex-col lg:flex-row gap-6 bg-white border border-gray-100 rounded-xl p-8 shadow-sm relative overflow-hidden group cursor-pointer"
                                    whileHover={{
                                        y: -4,
                                        boxShadow: "0 20px 40px -15px rgba(178, 34, 34, 0.15)",
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Red Accent Bar - Expands on hover */}
                                    <motion.div
                                        className="absolute left-0 top-0 bottom-0 bg-primary"
                                        initial={{ width: 4 }}
                                        whileHover={{ width: 8 }}
                                        transition={{ duration: 0.3 }}
                                    />

                                    {/* Timeline dot for desktop */}
                                    <div className="hidden lg:block absolute -left-3 top-1/2 -translate-y-1/2">
                                        <motion.div
                                            className="w-6 h-6 bg-white border-4 border-primary rounded-full"
                                            whileHover={{ scale: 1.2 }}
                                        />
                                    </div>

                                    <div className="lg:w-1/4 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-100 pb-4 lg:pb-0 lg:pr-8 pl-4 lg:pl-6">
                                        <motion.div
                                            className="text-primary font-bold text-lg flex items-center gap-2"
                                            whileHover={{ x: 4 }}
                                        >
                                            <CalendarDays className="w-5 h-5" />
                                            {event.date}
                                        </motion.div>
                                        <div className="text-gray-500 text-sm mt-2 flex items-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            {event.location}
                                        </div>
                                        <motion.div
                                            className="mt-4 inline-block self-start rounded-md bg-red-50 px-3 py-1.5 text-xs font-medium text-primary ring-1 ring-inset ring-red-600/10"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            {event.type}
                                        </motion.div>
                                    </div>

                                    <div className="lg:w-3/4 lg:pl-4">
                                        <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl font-serif group-hover:text-primary transition-colors">
                                            {event.title}
                                        </h3>
                                        <p className="mt-4 text-base leading-7 text-gray-600">
                                            {event.description}
                                        </p>
                                        <motion.div
                                            className="mt-6 inline-flex items-center gap-2"
                                            whileHover={{ x: 4 }}
                                        >
                                            <span className="text-sm font-semibold leading-6 text-primary group-hover:text-red-800 transition-colors flex items-center gap-1">
                                                Register Now
                                                <motion.span
                                                    animate={{ x: [0, 4, 0] }}
                                                    transition={{ duration: 1.5, repeat: Infinity }}
                                                >
                                                    <ArrowRight className="w-4 h-4" />
                                                </motion.span>
                                            </span>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </div>
        </div>
    );
}

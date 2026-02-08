"use client";

import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { GlowCard } from "@/components/ui/GlowCard";
import { motion } from "framer-motion";

const events = [
    {
        id: 1,
        title: "The Future of Indian Democracy",
        date: "March 15, 2026",
        location: "New Delhi, India",
        description: "A panel discussion with leading political scientists and historians on the evolving landscape of Indian governance.",
        category: "Panel Discussion",
    },
    {
        id: 2,
        title: "Literature & Identity in the 21st Century",
        date: "April 02, 2026",
        location: "Mumbai, India",
        description: "Exploring post-colonial narratives and the resurgence of regional literature in global discourses.",
        category: "Literary Symposium",
    },
    {
        id: 3,
        title: "Youth Policy Working Group",
        date: "April 20, 2026",
        location: "Virtual",
        description: "An interactive workshop to draft policy recommendations for youth engagement in civic bodies.",
        category: "Workshop",
    },
];

export function EventGrid() {
    return (
        <section className="py-24 sm:py-32 bg-gradient-to-b from-white via-red-50/20 to-white relative overflow-hidden">
            {/* Warli Pattern Divider Top */}
            <div className="absolute top-0 w-full h-8 pattern-warli opacity-10" />

            {/* Background decoration */}
            <motion.div
                className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-20 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
                animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, delay: 4 }}
            />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <ScrollReveal width="100%" className="mx-auto max-w-2xl text-center mb-16">
                    <motion.h2
                        className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif tilak-heading tilak-heading-animated inline-block"
                        whileInView={{ opacity: [0, 1], y: [20, 0] }}
                        viewport={{ once: true }}
                    >
                        Upcoming Events
                    </motion.h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Join us for intellectual exchanges that shape perspectives.
                    </p>
                </ScrollReveal>

                <StaggerContainer
                    className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                    staggerDelay={0.15}
                >
                    {events.map((event) => (
                        <StaggerItem key={event.id} className="h-full">
                            <GlowCard
                                href={`/events/${event.id}`}
                                className="h-full p-6 group"
                            >
                                {/* Date and category row */}
                                <div className="flex items-center gap-x-4 text-xs w-full">
                                    <motion.time
                                        dateTime={event.date}
                                        className="text-gray-500 font-medium flex items-center gap-1 bg-gray-50 px-3 py-1.5 rounded-md border border-gray-100"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <Calendar className="w-3.5 h-3.5 text-primary" />
                                        {event.date}
                                    </motion.time>
                                    <motion.div
                                        className="ml-auto relative z-10 rounded-full bg-red-50/50 px-3 py-1.5 font-medium text-primary border border-red-100/50 group-hover:bg-red-50 transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {event.category}
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <div className="mt-4">
                                    <h3 className="text-xl font-bold leading-7 text-gray-900 group-hover:text-primary transition-colors font-serif tracking-tight">
                                        {event.title}
                                    </h3>
                                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600 font-normal">
                                        {event.description}
                                    </p>
                                </div>

                                {/* Location */}
                                <div className="mt-6 flex items-center text-xs text-gray-500 gap-1 border-t border-gray-100 pt-4 w-full">
                                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                                    {event.location}
                                </div>

                                {/* CTA */}
                                <motion.div
                                    className="mt-4 w-full"
                                    whileHover={{ x: 4 }}
                                >
                                    <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                                        View Details
                                        <ArrowRight className="w-4 h-4" />
                                    </span>
                                </motion.div>
                            </GlowCard>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <Link
                        href="/events"
                        className="group inline-flex items-center gap-2 text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors"
                    >
                        <span className="border-b-2 border-primary pb-1">View all events</span>
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

            {/* Warli Pattern Divider Bottom */}
            <div className="absolute bottom-0 w-full h-8 pattern-warli opacity-10" />
        </section>
    );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Calendar, Lightbulb } from "lucide-react";

// Peepal Leaf SVG Icon
const PeepalLeaf = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 64 64"
        fill="currentColor"
        className={className}
        aria-hidden="true"
    >
        <path d="M32 4C24 12 16 24 16 36c0 12 8 20 16 24 8-4 16-12 16-24 0-12-8-24-16-32zm0 8c4 6 8 14 8 24 0 8-4 14-8 18-4-4-8-10-8-18 0-10 4-18 8-24z" />
        <path d="M32 56V20" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
    </svg>
);

const pillars = [
    {
        id: "home",
        title: "Our Home",
        description: "The foundation of India's intellectual renaissance",
        icon: PeepalLeaf,
        href: "/",
        isInstant: false,
    },
    {
        id: "events",
        title: "Upcoming Events",
        description: "Join our conclaves, debates, and symposiums",
        icon: Calendar,
        href: "/events",
        isInstant: true, // Ticket-style instant hover
    },
    {
        id: "what-we-do",
        title: "What We Do",
        description: "Cultivating discourse, shaping narratives",
        icon: Lightbulb,
        href: "/about",
        isInstant: false,
        hasWarli: true, // Vertical Warli border
    },
];

export function ThreePillarsGrid() {
    return (
        <section className="py-24 px-6 lg:px-8 bg-[#FFFAF0]">
            <div className="mx-auto max-w-6xl">
                {/* Section Header with Tilak */}
                <h2 className="pillar-heading">Explore the Forum</h2>

                {/* Three Pillars Grid */}
                <div className="pillars-grid mt-12">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={pillar.href}>
                                <div
                                    className={`
                                        pillar-card group
                                        ${pillar.isInstant ? "instant-hover" : "hover:shadow-lg hover:-translate-y-1 transition-all duration-300"}
                                        ${pillar.hasWarli ? "warli-border" : ""}
                                    `}
                                >
                                    {/* Icon */}
                                    <div className="mb-6">
                                        {pillar.id === "home" ? (
                                            <pillar.icon className="w-12 h-12 mx-auto text-[#B22222] group-hover:scale-110 transition-transform" />
                                        ) : (
                                            <pillar.icon className="w-12 h-12 mx-auto text-[#B22222]" strokeWidth={1.5} />
                                        )}
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-serif text-xl font-semibold text-[#1A1A1A] mb-3">
                                        {pillar.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {pillar.description}
                                    </p>

                                    {/* Ticket-style notch for Events */}
                                    {pillar.isInstant && (
                                        <>
                                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-6 bg-[#FFFAF0] rounded-r-full" />
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-6 bg-[#FFFAF0] rounded-l-full" />
                                        </>
                                    )}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

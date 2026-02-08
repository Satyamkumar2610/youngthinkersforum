"use client";

import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

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
        <section className="py-24 sm:py-32 bg-white relative">
            {/* Warli Pattern Divider Top */}
            <div className="absolute top-0 w-full h-8 pattern-warli opacity-10"></div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif tilak-heading inline-block">
                        Upcoming Events
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Join us for intellectual exchanges that shape perspectives.
                    </p>
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="flex flex-col items-start justify-between bg-white/50 border border-white/60 p-6 rounded-xl transition-all duration-500 group relative overflow-hidden backdrop-blur-sm hover:bg-white"
                            style={{ boxShadow: 'var(--shadow-card)' }}
                            onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-floating)'}
                            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-card)'}
                        >
                            {/* Red Top Border: Center-Out Expansion */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-transparent flex justify-center">
                                <div className="h-full w-full bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center ease-out"></div>
                            </div>

                            <div className="flex items-center gap-x-4 text-xs mt-2 w-full">
                                <time dateTime={event.date} className="text-gray-500 font-medium flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                                    <Calendar className="w-3 h-3 text-primary" /> {event.date}
                                </time>
                                <div className="ml-auto relative z-10 rounded-full bg-red-50/50 px-3 py-1 font-medium text-primary border border-red-100/50 group-hover:bg-red-50 transition-colors">
                                    {event.category}
                                </div>
                            </div>
                            <div className="group relative mt-4">
                                <h3 className="text-xl font-bold leading-7 text-gray-900 group-hover:text-primary transition-colors font-serif tracking-tight">
                                    <Link href={`/events/${event.id}`}>
                                        <span className="absolute inset-0" />
                                        {event.title}
                                    </Link>
                                </h3>
                                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600 font-normal">
                                    {event.description}
                                </p>
                            </div>
                            <div className="mt-6 flex items-center text-xs text-gray-500 gap-1 border-t border-gray-100 pt-4 w-full">
                                <MapPin className="w-3 h-3 text-gray-400" /> {event.location}
                            </div>
                            <div className="mt-4 w-full">
                                <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all translate-x-0 group-hover:translate-x-1">
                                    View Details <ArrowRight className="w-4 h-4" />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-16 text-center">
                    <Link href="/events" className="text-sm font-semibold leading-6 text-gray-900 border-b-2 border-primary pb-1 hover:text-primary transition-colors">
                        View all events <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>

            {/* Warli Pattern Divider Bottom */}
            <div className="absolute bottom-0 w-full h-8 pattern-warli opacity-10"></div>
        </section>
    );
}

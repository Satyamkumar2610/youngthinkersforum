"use client";

import { team } from "@/lib/data";
import { User2 } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Mission Section */}
            <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className="text-base font-semibold leading-7 text-primary">Our Mission</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif tilak-heading">
                                    Cultivating Intellectual Leadership
                                </h1>
                                <p className="mt-6 text-xl leading-8 text-gray-700">
                                    The Young Thinkers&apos; Forum (YTF) is dedicated to fostering a new generation of Indian intellectuals who are rooted in their heritage while being globally competitive.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        {/* Abstract visual for Mission */}
                        <div className="aspect-[4/3] w-[48rem] max-w-none rounded-xl bg-gray-50/50 shadow-xl ring-1 ring-gray-900/5 flex items-center justify-center relative overflow-hidden backdrop-blur-sm">
                            <div className="absolute inset-0 bg-jaali opacity-30"></div>
                            <div className="text-center p-12 relative z-10">
                                <h3 className="font-serif text-5xl text-gray-300 font-bold mb-4">Vision 2030</h3>
                                <p className="text-gray-400 uppercase tracking-widest text-sm">Empowering Minds</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                                <p>
                                    We believe that the challenges of the 21st century require a synthesis of modern technical expertise and deep historical awareness. YTF provides a platform for:
                                </p>
                                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                    <li className="flex gap-x-3">
                                        <span className="font-semibold text-gray-900">Rigorous Debate.</span>
                                        Creating spaces for free, fair, and fact-based discourse on national issues.
                                    </li>
                                    <li className="flex gap-x-3">
                                        <span className="font-semibold text-gray-900">Policy Innovation.</span>
                                        Drafting actionable policy briefs for local and national governance bodies.
                                    </li>
                                    <li className="flex gap-x-3">
                                        <span className="font-semibold text-gray-900">Cultural Renaissance.</span>
                                        Rediscovering and recontextualizing Indian knowledge systems for the modern world.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team/Leadership Section */}
            <section className="py-24 sm:py-32 bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif tilak-heading inline-block">
                            Our Leadership
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-gray-600">
                            Meet the minds guiding the forum&apos;s strategic direction.
                        </p>
                    </div>
                    <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                        {team.map((person) => (
                            <li key={person.name}
                                className="group bg-white rounded-2xl p-6 border border-gray-100 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
                                style={{ boxShadow: 'var(--shadow-card)' }}
                                onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-floating)'}
                                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-card)'}
                            >
                                {/* Red Top Border: Center-Out Expansion */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-transparent flex justify-center z-10">
                                    <div className="h-full w-full bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center ease-out"></div>
                                </div>
                                <div className="aspect-[3/2] w-full rounded-xl object-cover bg-gray-50 flex items-center justify-center relative overflow-hidden mb-6">
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <User2 className="w-20 h-20 text-gray-300 group-hover:text-primary/50 transition-colors duration-500" />
                                </div>
                                <h3 className="mt-2 text-xl font-bold leading-7 tracking-tight text-gray-900 font-serif">{person.name}</h3>
                                <p className="text-sm font-semibold leading-6 text-primary uppercase tracking-wide">{person.role}</p>
                                <p className="mt-4 text-sm leading-6 text-gray-600">{person.bio}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
}

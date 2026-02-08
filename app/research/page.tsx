"use client";

import { useState } from "react";
import Image from "next/image";
import { posts } from "@/lib/data";
import { Filter, Calendar, Clock, User } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Geopolitics", "Technology Policy", "Culture & Education", "Urban Policy"];

export default function ResearchPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredPosts = selectedCategory === "All"
        ? posts
        : posts.filter(post => post.category === selectedCategory);

    return (
        <div className="bg-white py-24 sm:py-32">
            {/* Background Decoration */}
            <div className="fixed inset-0 bg-jaali opacity-5 pointer-events-none z-0"></div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif tilak-heading inline-block">
                        Research & Analysis
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Deep dives into the issues that matter. rigorous, non-partisan, and forward-looking.
                    </p>
                </div>

                {/* Filter Section */}
                <div className="mt-10 flex justify-center gap-4 flex-wrap">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={cn(
                                "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 border",
                                selectedCategory === category
                                    ? "bg-primary text-white border-primary shadow-md"
                                    : "bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {filteredPosts.map((post) => (
                        <article
                            key={post.id}
                            className="flex flex-col items-start justify-between group p-6 rounded-2xl bg-white border border-gray-100 transition-all duration-500 hover:bg-white/80 relative overflow-hidden"
                            style={{ boxShadow: 'var(--shadow-card)' }}
                        >
                            {/* Red Top Border: Center-Out Expansion */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-transparent flex justify-center z-10">
                                <div className="h-full w-full bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center ease-out"></div>
                            </div>
                            <div className="relative w-full overflow-hidden rounded-2xl">
                                <div className="aspect-[16/9] w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] overflow-hidden relative">
                                    <Image
                                        src={post.imageUrl}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 pointer-events-none" />
                            </div>
                            <div className="max-w-xl w-full">
                                <div className="mt-6 flex items-center gap-x-4 text-xs">
                                    <time dateTime={post.date} className="text-gray-500 flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md">
                                        <Calendar className="w-3 h-3" /> {post.date}
                                    </time>
                                    <span className="relative z-10 rounded-full bg-red-50 px-3 py-1 font-medium text-primary hover:bg-red-100 transition-colors">
                                        {post.category}
                                    </span>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-4 text-xl font-bold leading-6 text-gray-900 group-hover:text-primary transition-colors font-serif">
                                        <a href="#">
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">{post.excerpt}</p>
                                </div>
                                <div className="relative mt-6 flex items-center gap-x-4 border-t border-gray-100 pt-4 w-full">
                                    <div className="text-sm leading-6 w-full flex justify-between items-center">
                                        <p className="font-semibold text-gray-900">
                                            <a href="#">
                                                <span className="absolute inset-0" />
                                                {post.author}
                                            </a>
                                        </p>
                                        <p className="text-gray-500 flex items-center gap-1">
                                            <Clock className="w-3 h-3" /> {post.readTime}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}

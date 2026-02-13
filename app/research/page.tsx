"use client";

import { posts } from "@/lib/data";
import { Filter, Calendar, Clock } from "lucide-react";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { GlowCard } from "@/components/ui/GlowCard";
import { PosterArt } from "@/components/ui/PosterArt";

export default function ResearchPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [isHovered, setIsHovered] = useState<number | null>(null);

    const categories = useMemo(() => {
        const unique = Array.from(
            new Set(posts.map((p) => p.category).filter((c): c is string => Boolean(c)))
        );
        unique.sort((a, b) => a.localeCompare(b));
        return ["All", ...unique];
    }, []);

    // Filter posts based on active category
    const filteredPosts = activeCategory === "All"
        ? posts
        : posts.filter(post => post.category === activeCategory);

    return (
        <div className="bg-background py-24 sm:py-32 min-h-screen relative overflow-hidden">
            {/* Background pattern */}
            <div className="fixed inset-0 bg-jaali opacity-[0.02] pointer-events-none z-0" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                {/* Header */}
                <ScrollReveal animation="fade-up" className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif tilak-heading tilak-heading-animated">
                        <AnimatedText text="Research & Articles" staggerChildren={0.06} />
                    </h2>
                    <motion.p
                        className="mt-6 text-lg leading-8 text-muted-foreground"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Explore the intellectual output of our members. Deep dives into policy, history, and ideas.
                    </motion.p>
                </ScrollReveal>

                {/* Category Filters */}
                <motion.div
                    className="mt-12 flex flex-wrap items-center justify-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <Filter className="w-5 h-5 text-muted-foreground mr-2" />
                    {categories.map((category, index) => (
                        <motion.button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${activeCategory === category
                                ? "bg-primary text-white shadow-red-glow"
                                : "bg-white/70 backdrop-blur text-foreground hover:bg-white hover:text-primary border border-border shadow-subtle"
                                }`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Articles Grid */}
                <motion.div
                    className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                    layout
                >
                    <AnimatePresence mode="popLayout">
                        {filteredPosts.map((article, index) => (
                            <motion.div
                                key={article.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                <GlowCard
                                    href={`/research/${article.id}`}
                                    className="group flex flex-col h-full overflow-hidden"
                                    onMouseEnter={() => setIsHovered(article.id)}
                                    onMouseLeave={() => setIsHovered(null)}
                                >
                                    {/* Image Container */}
                                    <motion.div
                                        className="relative aspect-[16/10] sm:aspect-[2/1] lg:aspect-[3/2] overflow-hidden bg-white/70"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        {article.imageUrl ? (
                                            <motion.img
                                                src={article.imageUrl}
                                                alt={article.title}
                                                className="w-full h-full object-cover"
                                                animate={{
                                                    scale: isHovered === article.id ? 1.1 : 1
                                                }}
                                                transition={{ duration: 0.4 }}
                                            />
                                        ) : (
                                            <div className="absolute inset-0">
                                                <PosterArt seed={`${article.title}-${article.category ?? ""}`} className="w-full h-full" />
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                        {/* Category badge */}
                                        <motion.div
                                            className="absolute top-3 right-3 z-10 rounded-md bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-primary ring-1 ring-inset ring-red-600/10"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            {article.category}
                                        </motion.div>
                                    </motion.div>

                                    {/* Content */}
                                    <div className="flex flex-col flex-grow p-6 bg-white/70 backdrop-blur">
                                        {/* Meta info */}
                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {article.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3.5 h-3.5" />
                                                {article.readTime || "5 min read"}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-foreground group-hover:text-primary transition-colors font-serif line-clamp-2">
                                            {article.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground flex-grow">
                                            {article.excerpt}
                                        </p>

                                        {/* Author */}
                                        <div className="mt-6 flex items-center gap-x-4 border-t border-border pt-4">
                                            <motion.div
                                                className="h-10 w-10 rounded-full bg-gradient-to-br from-red-50 to-white flex items-center justify-center font-semibold text-primary text-sm ring-2 ring-white shadow-subtle"
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                {article.author?.split(' ').map((n: string) => n[0]).join('') || 'YTF'}
                                            </motion.div>
                                            <div className="text-sm leading-6">
                                                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                                    {article.author}
                                                </p>
                                                <p className="text-muted-foreground">Contributor</p>
                                            </div>
                                        </div>
                                    </div>
                                </GlowCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty state */}
                <AnimatePresence>
                    {filteredPosts.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="text-center py-20"
                        >
                            <p className="text-muted-foreground text-lg">No articles found in this category.</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

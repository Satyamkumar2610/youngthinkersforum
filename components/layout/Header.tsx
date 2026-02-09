"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Search, ChevronRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";

// Minimal top bar navigation
const topNavigation = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "What We Do", href: "/about" },
];

// Full directory navigation with descriptions
const directoryNav = {
    column1: {
        title: "Organization",
        subtitle: "Learn about us",
        items: [
            { name: "About Us", href: "/about", desc: "Our mission & values" },
            { name: "YTF Chapters", href: "/about#chapters", desc: "Nationwide network" },
            { name: "Contact", href: "/contact", desc: "Get in touch" },
        ],
    },
    column2: {
        title: "Programs",
        subtitle: "What we offer",
        items: [
            { name: "Young Thinkers' Conclave", href: "/confluence", desc: "Annual flagship event" },
            { name: "Events", href: "/events", desc: "Debates & symposiums" },
            { name: "Media", href: "/media", desc: "Gallery & press" },
        ],
    },
    column3: {
        title: "Resources",
        subtitle: "Deep dives",
        items: [
            { name: "Podcasts", href: "/resources#podcasts", desc: "Listen & learn" },
            { name: "Publications", href: "/research", desc: "Research papers" },
        ],
    },
};

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [directoryOpen, setDirectoryOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [hoveredNav, setHoveredNav] = useState<string | null>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const pathname = usePathname();

    // Scroll progress
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setDirectoryOpen(false);
        setSearchOpen(false);
    }, [pathname]);

    // Prevent body scroll when directory is open
    useEffect(() => {
        if (directoryOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [directoryOpen]);

    // Focus search input when opened
    useEffect(() => {
        if (searchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [searchOpen]);

    // Keyboard shortcut for search (Cmd/Ctrl + K)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setSearchOpen(true);
            }
            if (e.key === "Escape") {
                setSearchOpen(false);
                setDirectoryOpen(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <>
            {/* Scroll progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#B22222] via-[#D4AF37] to-[#B22222] z-[60] origin-left"
                style={{ scaleX }}
            />

            <header
                className={cn(
                    "sticky top-0 z-50 w-full transition-all duration-200",
                    isScrolled
                        ? "bg-white/95 backdrop-blur-md shadow-md border-b border-[#B22222]/10"
                        : "bg-white"
                )}
            >
                <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
                    {/* Logo - Enhanced */}
                    <motion.div
                        className="flex lg:flex-1"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href="/" className="group flex items-center gap-3">
                            {/* Animated Logo Mark */}
                            <motion.div
                                className="relative"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="w-12 h-12 bg-[#B22222] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                                    <span className="font-serif text-2xl font-bold text-white tracking-tight">Y</span>
                                </div>
                                {/* Animated corner accent */}
                                <motion.div
                                    className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-[#D4AF37]"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </motion.div>

                            {/* Text Logo with hover effect */}
                            <div className="hidden sm:block">
                                <motion.span
                                    className="font-serif text-xl font-bold text-gray-900 tracking-tight block"
                                    whileHover={{ x: 2 }}
                                >
                                    Young Thinkers&apos;
                                </motion.span>
                                <span className="block text-[10px] font-semibold text-[#B22222] tracking-[0.35em] uppercase">
                                    Forum
                                </span>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation - Enhanced with pill highlight */}
                    <div className="hidden lg:flex lg:items-center lg:gap-x-1 bg-gray-50/80 rounded-full px-2 py-1.5">
                        {topNavigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onMouseEnter={() => setHoveredNav(item.name)}
                                onMouseLeave={() => setHoveredNav(null)}
                                className={cn(
                                    "relative text-sm font-medium py-2 px-4 rounded-full transition-colors",
                                    isActive(item.href)
                                        ? "text-white"
                                        : "text-gray-600 hover:text-gray-900"
                                )}
                            >
                                {/* Active/Hover background pill */}
                                {isActive(item.href) && (
                                    <motion.div
                                        className="absolute inset-0 bg-[#B22222] rounded-full -z-10"
                                        layoutId="activeNavPill"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                                {hoveredNav === item.name && !isActive(item.href) && (
                                    <motion.div
                                        className="absolute inset-0 bg-gray-100 rounded-full -z-10"
                                        layoutId="hoverNavPill"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.15 }}
                                    />
                                )}
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right side actions */}
                    <div className="flex items-center gap-2 lg:flex-1 lg:justify-end">
                        {/* Search button with keyboard shortcut hint */}
                        <motion.button
                            onClick={() => setSearchOpen(true)}
                            className="hidden lg:flex items-center gap-2 text-gray-500 hover:text-[#B22222] px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Search className="w-4 h-4" />
                            <span className="text-xs text-gray-400 border border-gray-200 rounded px-1.5 py-0.5 font-mono">
                                ⌘K
                            </span>
                        </motion.button>

                        {/* Directory Trigger - Enhanced */}
                        <motion.button
                            type="button"
                            onClick={() => setDirectoryOpen(!directoryOpen)}
                            className={cn(
                                "flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm transition-all",
                                directoryOpen
                                    ? "bg-[#B22222] text-white"
                                    : "bg-[#B22222]/10 text-[#B22222] hover:bg-[#B22222] hover:text-white"
                            )}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="uppercase tracking-wider text-xs font-bold">
                                Directory
                            </span>
                            <motion.div
                                animate={{ rotate: directoryOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {directoryOpen ? (
                                    <X className="h-4 w-4" />
                                ) : (
                                    <Menu className="h-4 w-4" />
                                )}
                            </motion.div>
                        </motion.button>
                    </div>
                </nav>
            </header>

            {/* Search Modal */}
            <AnimatePresence>
                {searchOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[100]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSearchOpen(false)}
                        />
                        <motion.div
                            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-2xl bg-white rounded-2xl shadow-2xl z-[101] overflow-hidden"
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="flex items-center gap-4 px-6 py-4 border-b border-gray-100">
                                <Search className="w-5 h-5 text-[#B22222]" />
                                <input
                                    ref={searchInputRef}
                                    type="text"
                                    placeholder="Search events, articles, resources..."
                                    className="flex-1 text-lg outline-none placeholder:text-gray-400"
                                />
                                <button
                                    onClick={() => setSearchOpen(false)}
                                    className="text-xs text-gray-400 border border-gray-200 rounded px-2 py-1 font-mono hover:bg-gray-50"
                                >
                                    ESC
                                </button>
                            </div>
                            <div className="px-6 py-8 text-center text-gray-400">
                                <p className="text-sm">Start typing to search...</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Directory Overlay - Enhanced */}
            <AnimatePresence>
                {directoryOpen && (
                    <motion.div
                        className="fixed inset-0 bg-white z-[90] overflow-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Background pattern */}
                        <div className="absolute inset-0 bg-jaali pointer-events-none" />

                        {/* Close button */}
                        <motion.button
                            onClick={() => setDirectoryOpen(false)}
                            className="absolute top-8 right-8 text-[#B22222] hover:bg-[#B22222]/10 p-2 rounded-full transition-colors z-10"
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <X className="w-8 h-8" />
                        </motion.button>

                        {/* Directory content */}
                        <div className="max-w-6xl mx-auto pt-24 pb-16 px-8">
                            {/* Header */}
                            <motion.div
                                className="mb-16"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <h2 className="font-serif text-4xl font-bold text-[#1A1A1A]">
                                    Explore the Forum
                                </h2>
                                <p className="mt-2 text-gray-500">
                                    Navigate to any section of Young Thinkers' Forum
                                </p>
                            </motion.div>

                            {/* Navigation Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                {[directoryNav.column1, directoryNav.column2, directoryNav.column3].map((column, colIndex) => (
                                    <motion.div
                                        key={column.title}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.15 + colIndex * 0.1 }}
                                    >
                                        {/* Column header */}
                                        <div className="mb-6 pb-4 border-b-2 border-[#B22222]/20">
                                            <h3 className="font-serif text-xl font-semibold text-[#B22222]">
                                                {column.title}
                                            </h3>
                                            <p className="text-sm text-gray-400 mt-1">{column.subtitle}</p>
                                        </div>

                                        {/* Column items */}
                                        <ul className="space-y-2">
                                            {column.items.map((item, itemIndex) => (
                                                <motion.li
                                                    key={item.name}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.2 + colIndex * 0.1 + itemIndex * 0.05 }}
                                                >
                                                    <Link
                                                        href={item.href}
                                                        onClick={() => setDirectoryOpen(false)}
                                                        className="group flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover:bg-[#B22222]/5 transition-colors"
                                                    >
                                                        <div>
                                                            <span className="block text-lg font-medium text-[#1A1A1A] group-hover:text-[#B22222] transition-colors">
                                                                {item.name}
                                                            </span>
                                                            <span className="text-sm text-gray-400">
                                                                {item.desc}
                                                            </span>
                                                        </div>
                                                        <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#B22222] group-hover:translate-x-1 transition-all" />
                                                    </Link>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Quick action footer */}
                            <motion.div
                                className="mt-20 pt-8 border-t border-gray-100"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <p className="text-gray-400 text-sm">
                                        Can&apos;t find what you&apos;re looking for?
                                    </p>
                                    <Link
                                        href="/contact"
                                        onClick={() => setDirectoryOpen(false)}
                                        className="inline-flex items-center gap-2 text-[#B22222] font-medium hover:gap-3 transition-all"
                                    >
                                        Contact us
                                        <ArrowUpRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

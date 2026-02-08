"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Confluence", href: "/confluence" },
    { name: "Events", href: "/events" },
    { name: "Media", href: "/media" },
    { name: "Resources", href: "/resources" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
        setMobileMenuOpen(false);
    }, [pathname]);

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <>
            {/* Minimal scroll progress */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-[#B22222] z-[60] origin-left"
                style={{ scaleX }}
            />

            <header
                className={cn(
                    "sticky top-0 z-50 w-full transition-all duration-300",
                    isScrolled
                        ? "bg-white shadow-sm border-b border-gray-100"
                        : "bg-white"
                )}
            >
                <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8" aria-label="Global">
                    {/* Logo - Clean & Professional */}
                    <motion.div
                        className="flex lg:flex-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href="/" className="group flex items-center gap-3">
                            {/* Artistic Logo Mark */}
                            <div className="relative">
                                <div className="w-11 h-11 bg-[#B22222] flex items-center justify-center">
                                    <span className="font-serif text-xl font-bold text-white tracking-tight">Y</span>
                                </div>
                                {/* Artistic corner accent */}
                                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 border-r-2 border-b-2 border-[#D4AF37]" />
                            </div>

                            {/* Text Logo */}
                            <div className="hidden sm:block">
                                <span className="font-serif text-xl font-semibold text-gray-900 tracking-tight">
                                    Young Thinkers'
                                </span>
                                <span className="block text-[10px] font-medium text-[#B22222] tracking-[0.3em] uppercase">
                                    Forum
                                </span>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="p-2 text-gray-600 hover:text-[#B22222] transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="sr-only">Toggle menu</span>
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>

                    {/* Desktop Navigation - Minimal & Elegant */}
                    <div className="hidden lg:flex lg:items-center lg:gap-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "relative text-sm font-medium transition-colors py-1",
                                    isActive(item.href)
                                        ? "text-[#B22222]"
                                        : "text-gray-600 hover:text-gray-900"
                                )}
                            >
                                {item.name}
                                {isActive(item.href) && (
                                    <motion.div
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#B22222]"
                                        layoutId="activeNav"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* CTA - Refined */}
                    <motion.div
                        className="hidden lg:flex lg:flex-1 lg:justify-end"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Link
                            href="/join"
                            className="group relative inline-flex items-center gap-2 bg-[#B22222] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#8B0000] transition-colors"
                        >
                            <span>Join Us</span>
                            <svg
                                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </motion.div>
                </nav>

                {/* Mobile menu - Clean */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="lg:hidden border-t border-gray-100 bg-white"
                        >
                            <div className="px-6 py-4 space-y-1">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={cn(
                                            "block py-3 text-base font-medium border-b border-gray-50 last:border-0",
                                            isActive(item.href)
                                                ? "text-[#B22222]"
                                                : "text-gray-600"
                                        )}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <Link
                                    href="/join"
                                    className="block mt-4 text-center bg-[#B22222] py-3 text-base font-medium text-white"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Join Us →
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
}

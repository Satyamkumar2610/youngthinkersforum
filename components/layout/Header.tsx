"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";
import { LotusPattern } from "@/components/ui/patterns";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Young Thinkers Confluence", href: "/confluence" },
    { name: "Events & Activities", href: "/events" },
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
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <>
            {/* Premium Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#B22222] via-[#D4AF37] to-[#B22222] z-[60] origin-left shadow-sm"
                style={{ scaleX }}
            />

            <header
                className={cn(
                    "sticky top-0 z-50 w-full transition-all duration-500",
                    isScrolled
                        ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50"
                        : "bg-white/95 backdrop-blur-sm border-b border-transparent"
                )}
            >
                <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8" aria-label="Global">
                    {/* Logo Section */}
                    <motion.div
                        className="flex lg:flex-1"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            href="/"
                            className="group -m-1.5 p-1.5 flex items-center gap-3"
                        >
                            {/* Premium Logo Mark */}
                            <motion.div
                                className="relative w-12 h-12 bg-gradient-to-br from-[#B22222] to-[#8B0000] rounded-xl flex items-center justify-center text-white shadow-lg overflow-hidden"
                                whileHover={{ scale: 1.05, rotate: 3 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                {/* Decorative inner lotus */}
                                <div className="absolute inset-0 opacity-20">
                                    <LotusPattern className="text-white w-full h-full" size={48} />
                                </div>
                                <span className="font-serif text-xl font-bold relative z-10">Y</span>
                                {/* Gold accent line */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                            </motion.div>

                            {/* Text Logo */}
                            <div className="hidden sm:flex flex-col">
                                <span className="font-serif text-lg font-bold text-[#B22222] tracking-tight leading-tight group-hover:text-[#8B0000] transition-colors">
                                    Young Thinkers'
                                </span>
                                <span className="text-xs font-medium text-gray-500 tracking-widest uppercase">
                                    Forum
                                </span>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <motion.button
                            type="button"
                            className="inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700 hover:text-[#B22222] hover:bg-red-50 transition-all"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="sr-only">Open main menu</span>
                            <AnimatePresence mode="wait">
                                {mobileMenuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X className="h-6 w-6" aria-hidden="true" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu className="h-6 w-6" aria-hidden="true" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>

                    {/* Desktop navigation - Premium pill design */}
                    <div className="hidden lg:flex lg:items-center lg:gap-x-1 bg-gray-50/80 backdrop-blur-sm rounded-full px-2 py-1.5 shadow-inner border border-gray-100">
                        {navigation.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                        isActive(item.href)
                                            ? "bg-[#B22222] text-white shadow-md"
                                            : "text-gray-700 hover:text-[#B22222] hover:bg-white hover:shadow-sm"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Button - Premium styling */}
                    <motion.div
                        className="hidden lg:flex lg:flex-1 lg:justify-end"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Link href="/join">
                            <motion.button
                                className="group relative overflow-hidden bg-gradient-to-r from-[#B22222] to-[#8B0000] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full flex items-center gap-2"
                                whileHover={{ scale: 1.03, y: -1 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Sparkles className="w-4 h-4" />
                                <span className="relative z-10">Join the Forum</span>
                                {/* Gold shimmer effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent -translate-x-full"
                                    animate={{ translateX: ["-100%", "200%"] }}
                                    transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2 }}
                                />
                            </motion.button>
                        </Link>
                    </motion.div>
                </nav>

                {/* Mobile menu - Premium design */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-gray-100"
                        >
                            <div className="px-4 py-6 space-y-2">
                                {navigation.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                    >
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                "flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium transition-all",
                                                isActive(item.href)
                                                    ? "bg-gradient-to-r from-red-50 to-red-100/50 text-[#B22222] border-l-4 border-[#B22222]"
                                                    : "text-gray-700 hover:bg-gray-50 hover:text-[#B22222]"
                                            )}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {isActive(item.href) && (
                                                <span className="w-2 h-2 rounded-full bg-[#B22222]" />
                                            )}
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.3, delay: navigation.length * 0.05 }}
                                    className="pt-4 mt-4 border-t border-gray-100"
                                >
                                    <Link
                                        href="/join"
                                        className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-[#B22222] to-[#8B0000] px-4 py-4 text-base font-semibold text-white hover:shadow-lg transition-all"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <Sparkles className="w-4 h-4" />
                                        Join the Forum
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
}

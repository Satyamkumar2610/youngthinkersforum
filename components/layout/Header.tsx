"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";

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
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-[60] origin-left"
                style={{ scaleX }}
            />

            <header
                className={cn(
                    "sticky top-0 z-50 w-full transition-all duration-500 border-b border-transparent",
                    isScrolled
                        ? "bg-white/95 backdrop-blur-md shadow-md border-gray-100/50"
                        : "bg-white"
                )}
            >
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <motion.div
                        className="flex lg:flex-1"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            href="/"
                            className="group -m-1.5 p-1.5 font-serif text-2xl font-bold text-primary tracking-tight flex items-center gap-2"
                        >
                            <motion.div
                                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-lg"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                Y
                            </motion.div>
                            <span className="hidden sm:inline group-hover:text-red-800 transition-colors">
                                Young Thinkers' Forum
                            </span>
                        </Link>
                    </motion.div>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <motion.button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-primary transition-colors"
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

                    {/* Desktop navigation */}
                    <div className="hidden lg:flex lg:gap-x-10">
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
                                        "relative text-sm font-semibold leading-6 transition-colors py-2 group",
                                        isActive(item.href) ? "text-primary" : "text-gray-900 hover:text-primary"
                                    )}
                                >
                                    {item.name}
                                    {/* Animated underline */}
                                    <motion.span
                                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary origin-left"
                                        initial={false}
                                        animate={{
                                            scaleX: isActive(item.href) ? 1 : 0,
                                        }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <motion.div
                        className="hidden lg:flex lg:flex-1 lg:justify-end"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Link
                            href="/join"
                            className="group relative overflow-hidden rounded-none bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-red-800 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            <span className="relative z-10">
                                Join the Forum <span aria-hidden="true">&rarr;</span>
                            </span>
                            {/* Shimmer effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                                animate={{ translateX: ["−100%", "100%"] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                            />
                        </Link>
                    </motion.div>
                </nav>

                {/* Mobile menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
                        >
                            <div className="px-6 py-6 space-y-1">
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
                                                "block rounded-lg px-4 py-3 text-base font-semibold leading-7 transition-all",
                                                isActive(item.href)
                                                    ? "bg-red-50 text-primary border-l-4 border-primary"
                                                    : "text-gray-900 hover:bg-gray-50 hover:text-primary hover:border-l-4 hover:border-primary/30"
                                            )}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.3, delay: navigation.length * 0.05 }}
                                    className="pt-4 border-t border-gray-100"
                                >
                                    <Link
                                        href="/join"
                                        className="block w-full text-center rounded-md bg-primary px-4 py-3 text-base font-semibold text-white hover:bg-red-800 transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
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

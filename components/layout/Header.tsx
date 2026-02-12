"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navigation = [
    { name: "About", href: "/about" },
    { name: "Verticals", href: "/events" },
    { name: "Research", href: "/research" },
    { name: "Media", href: "/media" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-200"
                    : "bg-white border-transparent"
                }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-[#D32F2F] rounded-lg flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
                        <span className="font-heading font-bold text-lg">YTF</span>
                    </div>
                    <div className="hidden sm:block leading-tight">
                        <span className="block font-heading font-bold text-[#1F2937] text-lg tracking-tight">
                            Young Thinkers Forum
                        </span>
                        <span className="block text-xs font-medium text-[#D32F2F] uppercase tracking-wider">
                            Est. 2018
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex lg:items-center lg:gap-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-sm font-medium transition-colors hover:text-[#D32F2F] hover-highlight ${pathname.startsWith(item.href)
                                    ? "text-[#D32F2F]"
                                    : "text-[#4B5563]"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}

                    <div className="h-6 w-px bg-gray-200 mx-2" />

                    <Link
                        href="/contact"
                        className="btn-academic btn-academic-primary text-sm px-5 py-2.5"
                    >
                        Join the Lab
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileOpen(true)}
                        className="text-gray-700 hover:text-[#D32F2F] transition-colors"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="fixed inset-0 z-[100] bg-white"
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                    >
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                            <span className="font-heading font-bold text-xl text-[#1F2937]">Menu</span>
                            <button
                                onClick={() => setMobileOpen(false)}
                                className="text-gray-500 hover:text-[#D32F2F] p-2"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex flex-col p-6 gap-6">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-2xl font-heading font-semibold text-[#1F2937] hover:text-[#D32F2F]"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setMobileOpen(false)}
                                className="btn-academic btn-academic-primary w-full mt-4"
                            >
                                Join the Lab
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

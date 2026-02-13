"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "About", href: "/about" },
    { name: "Verticals", href: "/events" },
    { name: "Research", href: "/research" },
    { name: "Media", href: "/media" },
    { name: "Resources", href: "/resources" },
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
                    ? "bg-background/85 backdrop-blur-md shadow-subtle border-border"
                    : "bg-background border-transparent"
                }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-subtle transition-transform group-hover:scale-105 ring-1 ring-white/30">
                        <span className="font-heading font-bold text-lg">YTF</span>
                    </div>
                    <div className="hidden sm:block leading-tight">
                        <span className="block font-heading font-bold text-foreground text-lg tracking-tight">
                            Young Thinkers Forum
                        </span>
                        <span className="block text-xs font-medium text-primary uppercase tracking-wider">
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
                            aria-current={pathname === item.href ? "page" : undefined}
                            className={cn(
                                "relative text-sm font-medium transition-colors hover:text-primary hover-highlight",
                                "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100",
                                pathname === item.href || pathname.startsWith(`${item.href}/`)
                                    ? "text-primary after:scale-x-100"
                                    : "text-muted-foreground"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}

                    <div className="h-6 w-px bg-border mx-2" />

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
                        className="text-foreground hover:text-primary transition-colors focus-ring rounded-md"
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
                        className="fixed inset-0 z-[100] bg-background"
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                    >
                        <div className="absolute inset-0 pattern-rangoli opacity-[0.06] pointer-events-none" />

                        <div className="relative flex items-center justify-between px-6 py-4 border-b border-border">
                            <span className="font-heading font-bold text-xl text-foreground">Menu</span>
                            <button
                                onClick={() => setMobileOpen(false)}
                                className="text-muted-foreground hover:text-primary p-2 focus-ring rounded-md"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="relative flex flex-col p-6 gap-6">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={cn(
                                        "text-2xl font-heading font-semibold text-foreground hover:text-primary transition-colors",
                                        pathname === item.href || pathname.startsWith(`${item.href}/`) ? "text-primary" : ""
                                    )}
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

                            <p className="mt-2 text-xs tracking-widest uppercase text-muted-foreground">
                                Satyameva Jayate
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

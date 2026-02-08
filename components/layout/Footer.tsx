"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const navigation = {
    resources: [
        { name: "Research Papers", href: "/research" },
        { name: "Event Archives", href: "/events/archives" },
        { name: "Policy Briefs", href: "/research/policy" },
        { name: "Annual Reports", href: "/reports" },
    ],
    company: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/about#team" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
    ],
    legal: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
    ],
    social: [
        { name: "Facebook", href: "#", icon: Facebook },
        { name: "Twitter", href: "#", icon: Twitter },
        { name: "Instagram", href: "#", icon: Instagram },
        { name: "LinkedIn", href: "#", icon: Linkedin },
    ],
};

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            {/* Artistic divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#B22222] to-transparent" />

            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-4">
                        <Link href="/" className="inline-flex items-center gap-3">
                            {/* Artistic Logo */}
                            <div className="relative">
                                <div className="w-10 h-10 bg-[#B22222] flex items-center justify-center">
                                    <span className="font-serif text-lg font-bold text-white">Y</span>
                                </div>
                                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 border-r-2 border-b-2 border-[#D4AF37]" />
                            </div>
                            <div>
                                <span className="font-serif text-lg font-semibold text-white">
                                    Young Thinkers'
                                </span>
                                <span className="block text-[9px] font-medium text-[#D4AF37] tracking-[0.25em] uppercase">
                                    Forum
                                </span>
                            </div>
                        </Link>

                        <p className="mt-6 text-sm text-gray-400 leading-relaxed max-w-sm">
                            Cultivating the next generation of intellectual leaders.
                            Rooted in heritage, open to the world.
                        </p>

                        {/* Social Links */}
                        <div className="mt-8 flex gap-4">
                            {navigation.social.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-500 hover:text-white transition-colors"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
                            <div>
                                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                    Resources
                                </h3>
                                <ul className="mt-4 space-y-3">
                                    {navigation.resources.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="text-sm text-gray-300 hover:text-white transition-colors"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                    Organization
                                </h3>
                                <ul className="mt-4 space-y-3">
                                    {navigation.company.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="text-sm text-gray-300 hover:text-white transition-colors"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                    Legal
                                </h3>
                                <ul className="mt-4 space-y-3">
                                    {navigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="text-sm text-gray-300 hover:text-white transition-colors"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-gray-500">
                            © {new Date().getFullYear()} Young Thinkers' Forum. All rights reserved.
                        </p>
                        <motion.p
                            className="text-xs text-[#D4AF37] font-serif italic"
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            सत्यमेव जयते — Truth Alone Triumphs
                        </motion.p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

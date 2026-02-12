"use client";

import Link from "next/link";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const footerLinks = {
    organization: [
        { name: "Who We Are", href: "/about" },
        { name: "Our History", href: "/about#history" },
        { name: "Vision & Mission", href: "/about#vision" },
        { name: "Team", href: "/team" },
        { name: "Contact", href: "/contact" },
    ],
    verticals: [
        { name: "Events & Conclaves", href: "/events" },
        { name: "Policy Research", href: "/research" },
        { name: "Student Fellowship", href: "/fellowship" },
        { name: "Publications", href: "/media" },
    ],
    legal: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
    ]
};

export function Footer() {
    return (
        <footer className="bg-[#FAFAFA] border-t border-gray-200 pt-16 pb-8">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-[#D32F2F] rounded-md flex items-center justify-center text-white text-xs font-bold shadow-sm">
                                YTF
                            </div>
                            <span className="font-heading font-bold text-[#1F2937]">Young Thinkers Forum</span>
                        </Link>
                        <p className="text-sm text-gray-500 leading-relaxed mb-6">
                            Cultivating a generation of thinkers rooted in truth,
                            open to the world, and dedicated to service.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="p-2 rounded-full bg-white border border-gray-100 text-gray-400 hover:border-[#D32F2F] hover:text-[#D32F2F] transition-all"><Instagram className="w-4 h-4" /></a>
                            <a href="#" className="p-2 rounded-full bg-white border border-gray-100 text-gray-400 hover:border-[#0077B5] hover:text-[#0077B5] transition-all"><Linkedin className="w-4 h-4" /></a>
                            <a href="#" className="p-2 rounded-full bg-white border border-gray-100 text-gray-400 hover:border-[#1DA1F2] hover:text-[#1DA1F2] transition-all"><Twitter className="w-4 h-4" /></a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h3 className="font-heading font-semibold text-[#1F2937] mb-6 text-sm uppercase tracking-wider">Organization</h3>
                        <ul className="space-y-3">
                            {footerLinks.organization.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-gray-500 hover:text-[#D32F2F] transition-colors hover:underline hover:decoration-[#D32F2F] underline-offset-4">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-heading font-semibold text-[#1F2937] mb-6 text-sm uppercase tracking-wider">Verticals</h3>
                        <ul className="space-y-3">
                            {footerLinks.verticals.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-gray-500 hover:text-[#D32F2F] transition-colors hover:underline hover:decoration-[#D32F2F] underline-offset-4">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter / Legal (Placeholder) */}
                    <div>
                        <h3 className="font-heading font-semibold text-[#1F2937] mb-6 text-sm uppercase tracking-wider">Legal</h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-gray-500 hover:text-[#D32F2F] transition-colors hover:underline hover:decoration-[#D32F2F] underline-offset-4">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-400">
                        © {new Date().getFullYear()} Young Thinkers Forum. All rights reserved.
                    </p>
                    <p className="text-xs font-bold text-[#D32F2F] tracking-widest uppercase flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#D32F2F]" /> Satyameva Jayate
                    </p>
                </div>
            </div>
        </footer>
    );
}

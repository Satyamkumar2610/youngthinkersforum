"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { WarliBorder, WaveDivider, AnimatedDiya, IndianArchBorder, MehndiPattern, PaisleyButa, MadhubaniMotif } from "@/components/ui/patterns";
import { FloatingCulturalElement } from "@/components/ui/IndianAnimations";
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
        { name: "Cookie Policy", href: "/cookies" },
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
        <footer className="bg-[#B22222] text-white relative overflow-hidden font-sans">
            {/* Mehndi Pattern Border at Top */}
            <div className="absolute top-0 left-0 right-0 opacity-10">
                <IndianArchBorder className="text-white" />
            </div>

            {/* Wave Divider at top */}
            <WaveDivider color="#FFFFFF" flip className="h-16 -mb-1" />

            {/* Background Pattern */}
            <div className="absolute inset-x-0 top-20 opacity-10">
                <WarliBorder className="w-full text-white" />
            </div>

            {/* Mehndi corner decorations */}
            <div className="absolute top-20 left-0 opacity-8">
                <MehndiPattern className="text-white" size={100} />
            </div>
            <div className="absolute top-20 right-0 opacity-8 scale-x-[-1]">
                <MehndiPattern className="text-white" size={100} />
            </div>

            {/* Floating cultural elements */}
            <FloatingCulturalElement
                className="absolute top-32 left-20 opacity-15"
                delay={0}
                amplitude={10}
                duration={7}
            >
                <PaisleyButa className="text-accent" size={30} />
            </FloatingCulturalElement>
            <FloatingCulturalElement
                className="absolute top-40 right-24 opacity-12"
                delay={2}
                amplitude={12}
                duration={8}
            >
                <MadhubaniMotif type="lotus" className="text-white" size={40} />
            </FloatingCulturalElement>

            {/* Decorative Diyas */}
            <motion.div
                className="absolute top-28 left-10 opacity-20"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <AnimatedDiya size={35} />
            </motion.div>
            <motion.div
                className="absolute top-36 right-16 opacity-20"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
                <AnimatedDiya size={30} />
            </motion.div>

            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 relative z-10">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    {/* Brand & Newsletter Section */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div>
                            <Link href="/" className="inline-flex items-center gap-3 group">
                                <motion.div
                                    className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-colors"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <span className="text-white text-lg font-serif font-bold">Y</span>
                                </motion.div>
                                <span className="font-serif text-2xl font-bold tracking-tight text-white">
                                    Young Thinkers' Forum
                                </span>
                            </Link>
                            <p className="text-sm leading-6 text-red-100 mt-4 max-w-xs">
                                Cultivating the next generation of intellectual leaders. Rooted in heritage, open to the world.
                            </p>
                        </div>

                        {/* Newsletter */}
                        <div className="mt-8">
                            <h3 className="text-sm font-semibold leading-6 text-white">Subscribe to our Vaarta</h3>
                            <p className="mt-2 text-sm leading-6 text-red-100">
                                Get the latest policy analysis and event updates.
                            </p>
                            <form className="mt-4 sm:flex sm:max-w-md">
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <motion.input
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                    autoComplete="email"
                                    required
                                    className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/10 px-4 py-2.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-red-200 focus:ring-2 focus:ring-inset focus:ring-accent sm:w-64 sm:text-sm sm:leading-6 transition-all"
                                    placeholder="Enter your email"
                                    whileFocus={{ scale: 1.02 }}
                                />
                                <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                                    <motion.button
                                        type="submit"
                                        className="group relative overflow-hidden flex w-full items-center justify-center rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-white transition-all duration-300"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span className="relative z-10">Subscribe</span>
                                        {/* Shimmer */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                                            animate={{ translateX: ["−100%", "200%"] }}
                                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                        />
                                    </motion.button>
                                </div>
                            </form>
                        </div>
                    </motion.div>

                    {/* Links Grid */}
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <h3 className="text-sm font-semibold leading-6 text-white">Resources</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.resources.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="group text-sm leading-6 text-red-100 hover:text-white transition-colors inline-flex items-center gap-1"
                                            >
                                                <motion.span
                                                    whileHover={{ x: 4 }}
                                                    transition={{ type: "spring", stiffness: 300 }}
                                                >
                                                    {item.name}
                                                </motion.span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                            <motion.div
                                className="mt-10 md:mt-0"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <h3 className="text-sm font-semibold leading-6 text-white">Organization</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.company.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="text-sm leading-6 text-red-100 hover:text-white transition-colors"
                                            >
                                                <motion.span
                                                    whileHover={{ x: 4 }}
                                                    transition={{ type: "spring", stiffness: 300 }}
                                                    className="inline-block"
                                                >
                                                    {item.name}
                                                </motion.span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="text-sm leading-6 text-red-100 hover:text-white transition-colors"
                                            >
                                                <motion.span
                                                    whileHover={{ x: 4 }}
                                                    transition={{ type: "spring", stiffness: 300 }}
                                                    className="inline-block"
                                                >
                                                    {item.name}
                                                </motion.span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                            {/* Socials */}
                            <motion.div
                                className="mt-10 md:mt-0"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <h3 className="text-sm font-semibold leading-6 text-white">Connect</h3>
                                <div className="mt-6 flex space-x-5">
                                    {navigation.social.map((item) => (
                                        <motion.a
                                            key={item.name}
                                            href={item.href}
                                            className="text-red-200 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                                            whileHover={{ scale: 1.2, y: -3 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <span className="sr-only">{item.name}</span>
                                            <item.icon className="h-5 w-5" aria-hidden="true" />
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar with cultural flair */}
                <motion.div
                    className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs leading-5 text-red-200 text-center md:text-left">
                            &copy; {new Date().getFullYear()} Young Thinkers' Forum. All rights reserved.
                        </p>
                        <div className="flex items-center gap-4">
                            <MadhubaniMotif type="lotus" className="text-accent opacity-30" size={24} />
                            <motion.p
                                className="text-xs text-accent font-serif italic"
                                animate={{ opacity: [0.7, 1, 0.7] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                सत्यमेव जयते
                            </motion.p>
                            <MadhubaniMotif type="lotus" className="text-accent opacity-30 scale-x-[-1]" size={24} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}

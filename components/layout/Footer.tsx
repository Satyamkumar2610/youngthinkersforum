import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, ArrowRight } from "lucide-react";
import { AipanDivider, WarliBorder } from "@/components/ui/patterns";

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
        <footer className="bg-primary text-white relative overflow-hidden font-sans border-t border-red-800">
            {/* Background Pattern */}
            <div className="absolute inset-x-0 top-0 opacity-10">
                <WarliBorder className="w-full text-white" />
            </div>

            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 relative z-10">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    {/* Brand & Newsletter Section */}
                    <div className="space-y-8">
                        <div>
                            <span className="font-serif text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                                <div className="h-8 w-8 bg-white/10 rounded-full flex items-center justify-center">
                                    <span className="text-white text-lg">Y</span>
                                </div>
                                Young Thinkers' Forum
                            </span>
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
                                <input
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                    autoComplete="email"
                                    required
                                    className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/10 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-red-200 focus:ring-2 focus:ring-inset focus:ring-accent sm:w-64 sm:text-sm sm:leading-6"
                                    placeholder="Enter your email"
                                />
                                <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                                    <button
                                        type="submit"
                                        className="flex w-full items-center justify-center rounded-md bg-accent px-3 py-2 text-sm font-semibold text-primary shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-all duration-300"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Resources</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.resources.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-red-100 hover:text-white transition-colors hover:translate-x-1 inline-block">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Organization</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.company.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-red-100 hover:text-white transition-colors hover:translate-x-1 inline-block">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-red-100 hover:text-white transition-colors hover:translate-x-1 inline-block">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Socials */}
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Connect</h3>
                                <div className="mt-6 flex space-x-5">
                                    {navigation.social.map((item) => (
                                        <Link key={item.name} href={item.href} className="text-red-200 hover:text-white transition-transform hover:-translate-y-1">
                                            <span className="sr-only">{item.name}</span>
                                            <item.icon className="h-5 w-5" aria-hidden="true" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs leading-5 text-red-200 text-center md:text-left">
                            &copy; {new Date().getFullYear()} Young Thinkers' Forum. All rights reserved.
                        </p>
                        <p className="text-xs text-red-300 font-serif italic">
                            Satyam Eva Jayate
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { AipanDivider } from "@/components/ui/patterns";

const navigation = {
    main: [
        { name: "About", href: "/about" },
        { name: "Events", href: "/events" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
        { name: "Privacy", href: "/privacy" },
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
        <footer className="bg-primary text-white relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-10 opacity-10 hidden lg:block">
                <AipanDivider className="h-full w-full" />
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-10 opacity-10 rotate-180 hidden lg:block">
                <AipanDivider className="h-full w-full" />
            </div>

            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8 relative z-10">
                <div className="flex justify-center flex-col items-center mb-10">
                    <h3 className="font-serif text-3xl font-bold mb-4">Young Thinkers' Forum</h3>
                    <p className="text-red-100 max-w-md text-center">
                        Cultivating the next generation of intellectual leaders and thought shapers in India.
                    </p>
                </div>
                <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
                    {navigation.main.map((item) => (
                        <div key={item.name} className="pb-6">
                            <Link href={item.href} className="text-sm leading-6 text-red-100 hover:text-white transition-colors">
                                {item.name}
                            </Link>
                        </div>
                    ))}
                </nav>
                <div className="mt-10 flex justify-center space-x-10">
                    {navigation.social.map((item) => (
                        <Link key={item.name} href={item.href} className="text-red-200 hover:text-white transition-colors">
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                        </Link>
                    ))}
                </div>
                <p className="mt-10 text-center text-xs leading-5 text-red-200">
                    &copy; {new Date().getFullYear()} Young Thinkers' Forum. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

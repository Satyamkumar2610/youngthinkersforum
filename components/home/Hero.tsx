import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WarliBorder, MandalaBackground } from "@/components/ui/patterns";

export function Hero() {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8 bg-[#B22222] pb-12 overflow-hidden">
            {/* Background Pattern Overlay */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <MandalaBackground className="w-full h-full text-black mix-blend-overlay scale-150 animate-spin-slow-reverse origin-center" />
            </div>

            <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56 text-center relative z-10">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-red-100 ring-1 ring-white/20 hover:ring-white/40 transition-all">
                        Announcing our next global summit.{" "}
                        <a href="#" className="font-semibold text-white hover:text-accent">
                            Read more <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>

                {/* Tilak-style element - Gold for contrast on Red */}
                <div className="flex justify-center mb-6">
                    <div className="h-16 w-1 bg-accent rounded-full opacity-100 shadow-[0_0_15px_rgba(212,175,55,0.6)]"></div>
                </div>

                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif drop-shadow-sm">
                    Cultivating the Next Generation of Intellectuals
                </h1>
                <p className="mt-6 text-lg leading-8 text-red-100 font-light max-w-2xl mx-auto">
                    The Young Thinkers' Forum is a dedicated space for rigorous debate, critical analysis, and the nurturing of young Indian thought leaders.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        href="/join"
                        className="rounded-none bg-white px-5 py-3 text-sm font-semibold text-[#B22222] shadow-lg hover:bg-white/90 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white flex items-center gap-2"
                    >
                        Join the Discussion <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href="/about" className="text-sm font-semibold leading-6 text-white hover:text-accent transition-colors flex items-center gap-1">
                        Learn more <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 z-10 w-full translate-y-1">
                <WarliBorder className="text-white/30 w-full" />
            </div>
        </div>
    );
}

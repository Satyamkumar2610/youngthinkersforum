import Link from "next/link";
import { BlockPrintIcon, MandalaBackground } from "@/components/ui/patterns";

const benefits = [
    "Rigorous intellectual debate",
    "Policy analysis & formulation",
    "Networking with thought leaders",
    "Cultural & historical immersion",
];

export function About() {
    return (
        <section className="py-24 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            {/* Tilak-style Heading */}
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif tilak-heading">
                                Who We Are
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                The Young Thinkers' Forum is a premier platform for the youth of India to engage with critical national and global issues. We believe in the power of ideas to shape the future.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {benefits.map((benefit) => (
                                    <div key={benefit} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <BlockPrintIcon className="absolute left-1 top-1 h-5 w-5 text-primary" />
                                        </dt>
                                        <dd className="inline">{benefit}</dd>
                                    </div>
                                ))}
                            </dl>
                            <div className="mt-10">
                                <Link href="/about" className="text-sm font-semibold leading-6 text-primary hover:text-red-800 transition-colors">
                                    Read our full mission statement <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        {/* Abstract visual representation instead of a placeholder image */}
                        <div className="aspect-[4/3] w-full rounded-xl bg-gray-50 object-cover shadow-xl ring-1 ring-gray-400/10 flex items-center justify-center overflow-hidden relative">
                            <MandalaBackground className="absolute inset-0 text-primary/10 animate-spin-slow w-full h-full p-12" />
                            <div className="absolute inset-0 bg-jaali opacity-20"></div>
                            <div className="text-center p-8 relative z-10">
                                <span className="font-serif text-6xl text-primary/20 font-bold block">YTF</span>
                                <span className="text-sm text-gray-400 uppercase tracking-widest mt-2 block">Est. 2026</span>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

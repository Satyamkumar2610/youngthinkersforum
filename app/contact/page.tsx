"use client";

import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { AnimatedText } from "@/components/ui/AnimatedText";

export default function ContactPage() {
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('submitting');
        // Simulate submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        setFormState('success');
        setTimeout(() => setFormState('idle'), 3000);
    };

    return (
        <div className="bg-background py-24 sm:py-32 min-h-screen relative overflow-hidden">
            {/* Background pattern */}
            <div className="fixed inset-0 pattern-rangoli opacity-5 pointer-events-none z-0" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <ScrollReveal animation="fade-up" className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif tilak-heading tilak-heading-animated">
                        <AnimatedText text="Get in Touch" staggerChildren={0.08} />
                    </h2>
                    <motion.p
                        className="mt-6 text-lg leading-8 text-muted-foreground"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Have a question or want to get involved? We&apos;d love to hear from you.
                    </motion.p>
                </ScrollReveal>

                <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                    {/* Contact Form */}
                    <ScrollReveal animation="slide-in" className="lg:pr-8">
                        <motion.form
                            onSubmit={handleSubmit}
                            className="space-y-8"
                        >
                            {/* Name Input */}
                            <motion.div
                                animate={{ scale: focusedField === 'name' ? 1.02 : 1 }}
                                transition={{ duration: 0.2 }}
                            >
                                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-foreground">
                                    Full Name
                                </label>
                                <div className="mt-2.5">
                                    <motion.input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="name"
                                        required
                                        className="block w-full rounded-md border-0 px-4 py-3 text-foreground shadow-subtle ring-1 ring-inset ring-border placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-inset focus:ring-primary transition-all duration-300 sm:text-sm sm:leading-6 bg-white/70 backdrop-blur"
                                        placeholder="Your name"
                                        onFocus={() => setFocusedField('name')}
                                        onBlur={() => setFocusedField(null)}
                                        disabled={formState !== 'idle'}
                                    />
                                </div>
                            </motion.div>

                            {/* Email Input */}
                            <motion.div
                                animate={{ scale: focusedField === 'email' ? 1.02 : 1 }}
                                transition={{ duration: 0.2 }}
                            >
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-foreground">
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <motion.input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 px-4 py-3 text-foreground shadow-subtle ring-1 ring-inset ring-border placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-inset focus:ring-primary transition-all duration-300 sm:text-sm sm:leading-6 bg-white/70 backdrop-blur"
                                        placeholder="your@email.com"
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                        disabled={formState !== 'idle'}
                                    />
                                </div>
                            </motion.div>

                            {/* Subject Input */}
                            <motion.div
                                animate={{ scale: focusedField === 'subject' ? 1.02 : 1 }}
                                transition={{ duration: 0.2 }}
                            >
                                <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-foreground">
                                    Subject
                                </label>
                                <div className="mt-2.5">
                                    <motion.input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        required
                                        className="block w-full rounded-md border-0 px-4 py-3 text-foreground shadow-subtle ring-1 ring-inset ring-border placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-inset focus:ring-primary transition-all duration-300 sm:text-sm sm:leading-6 bg-white/70 backdrop-blur"
                                        placeholder="How can we help?"
                                        onFocus={() => setFocusedField('subject')}
                                        onBlur={() => setFocusedField(null)}
                                        disabled={formState !== 'idle'}
                                    />
                                </div>
                            </motion.div>

                            {/* Message Textarea */}
                            <motion.div
                                animate={{ scale: focusedField === 'message' ? 1.02 : 1 }}
                                transition={{ duration: 0.2 }}
                            >
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Message
                                </label>
                                <div className="mt-2.5">
                                    <motion.textarea
                                        name="message"
                                        id="message"
                                        rows={5}
                                        required
                                        className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary transition-all duration-300 sm:text-sm sm:leading-6 resize-none"
                                        placeholder="Your message..."
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        disabled={formState !== 'idle'}
                                    />
                                </div>
                            </motion.div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={formState !== 'idle'}
                                className="group relative w-full overflow-hidden rounded-md bg-primary px-6 py-4 text-sm font-semibold text-white shadow-lg hover:bg-red-800 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                                whileHover={formState === 'idle' ? { scale: 1.02, y: -2 } : {}}
                                whileTap={formState === 'idle' ? { scale: 0.98 } : {}}
                            >
                                <AnimatePresence mode="wait">
                                    {formState === 'idle' && (
                                        <motion.span
                                            key="idle"
                                            className="flex items-center justify-center gap-2"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                        >
                                            Send Message
                                            <Send className="w-4 h-4" />
                                        </motion.span>
                                    )}
                                    {formState === 'submitting' && (
                                        <motion.span
                                            key="submitting"
                                            className="flex items-center justify-center gap-2"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                        >
                                            <motion.div
                                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            />
                                            Sending...
                                        </motion.span>
                                    )}
                                    {formState === 'success' && (
                                        <motion.span
                                            key="success"
                                            className="flex items-center justify-center gap-2"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                        >
                                            <CheckCircle className="w-5 h-5" />
                                            Message Sent!
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                                {/* Shimmer effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                                    animate={{ translateX: formState === 'idle' ? ["-100%", "200%"] : "-100%" }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                />
                            </motion.button>
                        </motion.form>
                    </ScrollReveal>

                    {/* Contact Information */}
                    <ScrollReveal animation="slide-in-right" delay={0.2} className="lg:pl-8">
                        <StaggerContainer className="space-y-10" staggerDelay={0.1}>
                            {/* Address */}
                            <StaggerItem>
                                <motion.div
                                    className="flex gap-x-6 group"
                                    whileHover={{ x: 4 }}
                                >
                                    <motion.div
                                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                    >
                                        <MapPin className="h-6 w-6" aria-hidden="true" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 text-gray-900 group-hover:text-primary transition-colors">Our Address</h3>
                                        <address className="mt-2 space-y-1 text-base leading-6 text-gray-600 not-italic">
                                            <p>Constitution Club of India</p>
                                            <p>Rafi Marg, New Delhi - 110001</p>
                                        </address>
                                    </div>
                                </motion.div>
                            </StaggerItem>

                            {/* Email */}
                            <StaggerItem>
                                <motion.div
                                    className="flex gap-x-6 group"
                                    whileHover={{ x: 4 }}
                                >
                                    <motion.div
                                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                    >
                                        <Mail className="h-6 w-6" aria-hidden="true" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 text-gray-900 group-hover:text-primary transition-colors">Email</h3>
                                        <motion.p
                                            className="mt-2 text-base leading-6 text-gray-600"
                                            whileHover={{ color: "#B22222" }}
                                        >
                                            <a href="mailto:contact@ytforum.org" className="hover:underline">
                                                contact@ytforum.org
                                            </a>
                                        </motion.p>
                                    </div>
                                </motion.div>
                            </StaggerItem>

                            {/* Phone */}
                            <StaggerItem>
                                <motion.div
                                    className="flex gap-x-6 group"
                                    whileHover={{ x: 4 }}
                                >
                                    <motion.div
                                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                    >
                                        <Phone className="h-6 w-6" aria-hidden="true" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 text-gray-900 group-hover:text-primary transition-colors">Phone</h3>
                                        <p className="mt-2 text-base leading-6 text-gray-600">
                                            +91 11 2345 6789
                                        </p>
                                    </div>
                                </motion.div>
                            </StaggerItem>

                            {/* Map placeholder */}
                            <StaggerItem>
                                <motion.div
                                    className="mt-8 rounded-xl overflow-hidden relative bg-gray-100 h-64 flex items-center justify-center"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-gray-100" />
                                    <motion.div
                                        className="relative text-center"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <MapPin className="w-12 h-12 text-primary/30 mx-auto mb-2" />
                                        <p className="text-sm text-gray-500">Interactive map coming soon</p>
                                    </motion.div>
                                </motion.div>
                            </StaggerItem>
                        </StaggerContainer>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
}

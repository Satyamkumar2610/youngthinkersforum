"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif tilak-heading">
                        Contact Us
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We are always looking for new ideas and collaborations. Reach out to us.
                    </p>
                </div>

                <div className="mx-auto mt-16 text-center lg:mx-0 lg:text-left grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                        First name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Last name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Email
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Message
                                    </label>
                                    <div className="mt-2.5">
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows={4}
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10">
                                <button
                                    type="submit"
                                    className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-800 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                >
                                    Send message
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div className="bg-gray-50 rounded-2xl p-8 flex items-start gap-4">
                            <MapPin className="w-6 h-6 text-primary mt-1" />
                            <div>
                                <h3 className="font-semibold text-gray-900">Headquarters</h3>
                                <p className="mt-2 text-gray-600">
                                    123, Lodhi Road, <br />
                                    New Delhi, 110003, India
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 flex items-start gap-4">
                            <Mail className="w-6 h-6 text-primary mt-1" />
                            <div>
                                <h3 className="font-semibold text-gray-900">Email Us</h3>
                                <p className="mt-2 text-gray-600">
                                    contact@youngthinkersforum.org
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 flex items-start gap-4">
                            <Phone className="w-6 h-6 text-primary mt-1" />
                            <div>
                                <h3 className="font-semibold text-gray-900">Call Us</h3>
                                <p className="mt-2 text-gray-600">
                                    +91 11 2345 6789
                                </p>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-gray-200 rounded-2xl h-64 w-full flex items-center justify-center relative overflow-hidden">
                            <span className="text-gray-500 font-medium z-10">Interactive Map Integration</span>
                            <div className="absolute inset-0 bg-jaali opacity-10"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

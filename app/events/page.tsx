import { events } from "@/lib/data";
import { CalendarDays, MapPin } from "lucide-react";

export default function EventsPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif tilak-heading">
                        Events Calendar
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Participate in our summits, workshops, and cultural evenings.
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="space-y-12">
                        {events.map((event) => (
                            <div key={event.id} className="flex flex-col lg:flex-row gap-6 bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                {/* Red Accent Bar */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary group-hover:w-2 transition-all"></div>

                                <div className="lg:w-1/4 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-100 pb-4 lg:pb-0 lg:pr-8">
                                    <div className="text-primary font-bold text-lg flex items-center gap-2">
                                        <CalendarDays className="w-5 h-5" />
                                        {event.date}
                                    </div>
                                    <div className="text-gray-500 text-sm mt-2 flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        {event.location}
                                    </div>
                                    <div className="mt-4 inline-block self-start rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-red-600/10">
                                        {event.type}
                                    </div>
                                </div>

                                <div className="lg:w-3/4 lg:pl-4">
                                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl font-serif group-hover:text-primary transition-colors cursor-pointer">
                                        {event.title}
                                    </h3>
                                    <p className="mt-4 text-base leading-7 text-gray-600">
                                        {event.description}
                                    </p>
                                    <div className="mt-6">
                                        <button className="text-sm font-semibold leading-6 text-primary hover:text-red-800 transition-colors">
                                            Register Now <span aria-hidden="true">→</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

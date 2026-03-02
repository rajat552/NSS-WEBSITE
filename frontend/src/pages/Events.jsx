import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight, Filter, Search, ChevronRight } from 'lucide-react';

const Events = () => {
    const [activeTab, setActiveTab] = useState('upcoming');
    const [searchQuery, setSearchQuery] = useState('');

    const events = [
        {
            id: 1,
            title: 'Blood Donation Camp',
            date: '2026-03-15',
            time: '9:00 AM - 4:00 PM',
            location: 'Central Lawn, NIT Hamirpur',
            category: 'Health',
            status: 'upcoming',
            attendees: 120,
            description: 'Annual blood donation drive in collaboration with Red Cross Society. Join us to save lives and make a difference.',
            color: 'red'
        },
        {
            id: 2,
            title: 'Tree Plantation Drive',
            date: '2026-03-22',
            time: '7:00 AM - 12:00 PM',
            location: 'Campus Periphery & Nearby Villages',
            category: 'Environment',
            status: 'upcoming',
            attendees: 85,
            description: 'Mass plantation event aimed at restoring green cover around the campus and neighboring areas.',
            color: 'green'
        },
        {
            id: 3,
            title: 'Computer Literacy Programme',
            date: '2026-04-05',
            time: '10:00 AM - 1:00 PM',
            location: 'Government School, Hamirpur',
            category: 'Education',
            status: 'upcoming',
            attendees: 45,
            description: 'Teaching basic computer skills to underprivileged school students in the nearby government schools.',
            color: 'blue'
        },
        {
            id: 4,
            title: 'Swachh Bharat Abhiyan',
            date: '2026-04-14',
            time: '6:00 AM - 10:00 AM',
            location: 'Hamirpur Town & Campus',
            category: 'Cleanliness',
            status: 'upcoming',
            attendees: 200,
            description: 'Mass cleanliness drive across the campus and Hamirpur town as part of the national cleanliness campaign.',
            color: 'teal'
        },
        {
            id: 5,
            title: 'Health Awareness Workshop',
            date: '2026-02-10',
            time: '2:00 PM - 5:00 PM',
            location: 'Auditorium, NIT Hamirpur',
            category: 'Health',
            status: 'past',
            attendees: 150,
            description: 'Workshop on mental health awareness and stress management techniques for college students.',
            color: 'purple'
        },
        {
            id: 6,
            title: 'Umang - Joy of Giving',
            date: '2026-01-26',
            time: '10:00 AM - 6:00 PM',
            location: 'Multiple Locations',
            category: 'Social',
            status: 'past',
            attendees: 300,
            description: 'Annual celebration with underprivileged children featuring games, food distribution, and cultural activities.',
            color: 'orange'
        },
    ];

    const colorMap = {
        red: { bg: 'bg-red-50 dark:bg-red-900/20', text: 'text-red-600 dark:text-red-400', border: 'border-red-200 dark:border-red-800/50', badge: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' },
        green: { bg: 'bg-emerald-50 dark:bg-emerald-900/20', text: 'text-emerald-600 dark:text-emerald-400', border: 'border-emerald-200 dark:border-emerald-800/50', badge: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300' },
        blue: { bg: 'bg-blue-50 dark:bg-blue-900/20', text: 'text-blue-600 dark:text-blue-400', border: 'border-blue-200 dark:border-blue-800/50', badge: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' },
        teal: { bg: 'bg-teal-50 dark:bg-teal-900/20', text: 'text-teal-600 dark:text-teal-400', border: 'border-teal-200 dark:border-teal-800/50', badge: 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300' },
        purple: { bg: 'bg-purple-50 dark:bg-purple-900/20', text: 'text-purple-600 dark:text-purple-400', border: 'border-purple-200 dark:border-purple-800/50', badge: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300' },
        orange: { bg: 'bg-orange-50 dark:bg-orange-900/20', text: 'text-orange-600 dark:text-orange-400', border: 'border-orange-200 dark:border-orange-800/50', badge: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300' },
    };

    const filteredEvents = events
        .filter(e => e.status === activeTab)
        .filter(e => e.title.toLowerCase().includes(searchQuery.toLowerCase()) || e.category.toLowerCase().includes(searchQuery.toLowerCase()));

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    };

    return (
        <div className="min-h-screen bg-white dark:bg-[#030711] transition-colors duration-300">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 page-enter">
                {/* Header */}
                <div className="text-center mb-16 space-y-6">
                    <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800/50">
                        <Calendar className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-700 dark:text-primary-400">Our Initiatives</span>
                    </div>
                    <h1 className="section-heading">Events & Campaigns</h1>
                    <p className="section-subheading">
                        Discover our drives, workshops, and community service activities that shape a better tomorrow.
                    </p>
                </div>

                {/* Search & Tabs */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
                    <div className="flex bg-gray-100 dark:bg-gray-800/50 rounded-2xl p-1.5 w-full sm:w-auto">
                        {['upcoming', 'past'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all capitalize ${activeTab === tab
                                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                                    }`}
                            >
                                {tab} Events
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full sm:w-72">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search events..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-gray-100 dark:bg-gray-800/50 border border-transparent focus:border-primary-300 dark:focus:border-primary-700 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900/30 text-gray-900 dark:text-white text-sm font-medium transition-all outline-none placeholder-gray-400 dark:placeholder-gray-500"
                        />
                    </div>
                </div>

                {/* Events Grid */}
                {filteredEvents.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredEvents.map((event, index) => {
                            const colors = colorMap[event.color];
                            return (
                                <div
                                    key={event.id}
                                    className={`group relative bg-white dark:bg-gray-900/50 rounded-3xl border border-gray-100 dark:border-white/5 p-8 hover:shadow-xl hover:shadow-gray-100/50 dark:hover:shadow-none hover:-translate-y-1 transition-all duration-300`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="flex items-start justify-between mb-6">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${colors.badge}`}>
                                            {event.category}
                                        </span>
                                        {event.status === 'upcoming' && (
                                            <span className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold uppercase tracking-widest">
                                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                                <span>Upcoming</span>
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                        {event.title}
                                    </h3>

                                    <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed mb-6 line-clamp-2">
                                        {event.description}
                                    </p>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                            <Calendar className="h-4 w-4 mr-3 text-gray-300 dark:text-gray-600" />
                                            <span className="font-medium">{formatDate(event.date)}</span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                            <Clock className="h-4 w-4 mr-3 text-gray-300 dark:text-gray-600" />
                                            <span className="font-medium">{event.time}</span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                            <MapPin className="h-4 w-4 mr-3 text-gray-300 dark:text-gray-600" />
                                            <span className="font-medium">{event.location}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-white/5">
                                        <div className="flex items-center text-sm text-gray-400 dark:text-gray-500">
                                            <Users className="h-4 w-4 mr-2" />
                                            <span className="font-bold">{event.attendees}+ Volunteers</span>
                                        </div>
                                        <button className="flex items-center text-sm font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 group/btn transition-colors">
                                            View Details
                                            <ChevronRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-24">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gray-100 dark:bg-gray-800 mb-6">
                            <Calendar className="h-8 w-8 text-gray-400 dark:text-gray-500" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No events found</h3>
                        <p className="text-gray-500 dark:text-gray-400 font-medium">Try adjusting your search or filter.</p>
                    </div>
                )}

                {/* Stats Banner */}
                <div className="mt-20 bg-gray-50 dark:bg-gray-900/50 rounded-3xl border border-gray-100 dark:border-white/5 p-10 md:p-14">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: 'Events This Year', value: '45+' },
                            { label: 'Volunteers Engaged', value: '500+' },
                            { label: 'Lives Impacted', value: '5,000+' },
                            { label: 'Blood Units Collected', value: '800+' },
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tighter mb-2">{stat.value}</div>
                                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;

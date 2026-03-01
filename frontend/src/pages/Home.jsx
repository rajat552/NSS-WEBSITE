import React, { useEffect, useState } from 'react';
import { ArrowRight, Users, Calendar, Heart, MessageSquare, Info, ShieldCheck, MapPin, Phone, Mail, Send } from 'lucide-react';
import api from '../services/api';
import Loader from '../components/common/Loader';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await api.get('/users');
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    if (loading) return <Loader fullScreen />;

    return (
        <div className="space-y-24 pb-20 relative overflow-hidden">
            {/* Decorative Grid */}
            <div className="absolute top-0 left-0 w-full h-[800px] z-[-1] opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-10 group hover:scale-105 transition-transform duration-500">
                        <span className="flex h-3 w-3 rounded-full bg-primary-600 animate-pulse"></span>
                        <p className="text-primary-700 font-bold text-xs uppercase tracking-[0.2em] italic">Redefining Service • Since 1969</p>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black text-gray-900 tracking-tightest leading-tight mb-8">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-indigo-600">NOT ME,</span><br />
                        BUT YOU.
                    </h1>
                    <p className="text-gray-500 text-lg md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed mb-16 opacity-80">
                        A nationwide grassroots volunteer program dedicated to youth development and community building through compassionate service.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-24">
                        <button className="group relative px-10 py-5 bg-gray-900 text-white rounded-[2rem] font-bold text-lg shadow-[0_20px_40px_rgba(37,99,235,0.2)] hover:bg-black active:scale-95 transition-all w-full sm:w-auto">
                            <span className="relative z-10 flex items-center justify-center group-hover:tracking-wider transition-all duration-300">
                                Join our Mission <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                            </span>
                        </button>
                        <button className="px-10 py-5 border-2 border-gray-100 hover:border-primary-100 hover:bg-primary-50/50 text-gray-900 rounded-[2.5rem] font-bold text-lg transition-all active:scale-95 w-full sm:w-auto">
                            Our Vision
                        </button>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto border-t border-gray-100 pt-16">
                        {[
                            { icon: <Users className="h-6 w-6 text-blue-600" />, label: 'Active Members', value: '250+' },
                            { icon: <Calendar className="h-6 w-6 text-purple-600" />, label: 'Annual Events', value: '45+' },
                            { icon: <Heart className="h-6 w-6 text-red-600" />, label: 'Lives Impacted', value: '5K+' },
                            { icon: <MessageSquare className="h-6 w-6 text-green-600" />, label: 'Community Outreach', value: '12 Districts' }
                        ].map((stat, i) => (
                            <div key={i} className="text-center group border-r border-gray-50 last:border-0 h-32 flex flex-col justify-center">
                                <div className="mb-2 flex justify-center opacity-70 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 transition-all">{stat.icon}</div>
                                <div className="text-3xl font-black text-gray-900 tracking-tighter mb-1 select-none">{stat.value}</div>
                                <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* API Example Section */}
            <section className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 bg-gray-900 rounded-[4rem] text-white">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center">
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tightest mb-4">Core Team Architecture</h2>
                        <div className="h-1.5 w-24 bg-primary-500 mx-auto rounded-full"></div>
                        <p className="text-gray-400 font-medium text-lg mt-8 italic">Dynamically rendered from our Backend Infrastructure</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {users.map((user) => (
                            <div key={user.id} className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-xl group hover:bg-white/10 transition-all duration-300 relative overflow-hidden active:scale-[0.98]">
                                <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                                    <ShieldCheck className="h-12 w-12 text-primary-400" />
                                </div>
                                <h3 className="text-2xl font-black font-sans tracking-tight mb-2 text-primary-300 uppercase">{user.name}</h3>
                                <p className="text-gray-400 font-mono text-sm tracking-widest flex items-center group-hover:text-white transition-colors">
                                    <Mail className="h-4 w-4 mr-3 text-primary-500" /> {user.email}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

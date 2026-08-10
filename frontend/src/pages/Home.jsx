import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, Heart, ShieldCheck, Mail, Sparkles, Zap, Globe, Target, ChevronRight, BookOpen, Award } from 'lucide-react';
import api from '../services/api';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

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

    return (
        <div className="relative min-h-screen overflow-hidden bg-white dark:bg-[#030711] selection:bg-primary-500/20">
            {/* Formal Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.01] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            {/* Hero Section */}
            <section className="relative z-10 pt-20 pb-16 lg:pt-32 lg:pb-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                <div className="container mx-auto max-w-7xl text-center">
                    <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-saffron/10 border border-saffron/20 mb-8">
                        <Sparkles className="h-4 w-4 text-saffron" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-saffron">Serving Humanity Since 1969</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.2] mb-8 select-none uppercase">
                        <span className="text-primary-900 dark:text-white">Empowering Change </span>
                        <br />
                        <span className="text-gray-700 dark:text-gray-300">Through Service.</span>
                    </h1>

                    <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
                        Join NSS NIT Hamirpur in our journey to build a better society. Compassionate service, student leadership, and community development.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                        <Link to="/join">
                            <Button size="lg" className="group">
                                Start Serving <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link to="/events" className="px-8 py-4 border-2 border-primary-900 dark:border-white text-primary-900 dark:text-white rounded-md font-bold hover:bg-primary-50 dark:hover:bg-white/10 transition-colors uppercase tracking-wide">
                            Explore Events
                        </Link>
                    </div>
                </div>
            </section>

           

            {/* What We Do Grid */}
            {/* What We Do Grid */}
            <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-transparent">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">Our Impact Areas</h2>
                        <div className="h-1.5 w-16 bg-primary-500 mx-auto rounded-full"></div>
                        <p className="text-gray-500 dark:text-gray-400 font-medium max-w-xl mx-auto">
                            Driving meaningful change across health, education, environment, and community welfare.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Community Impact',
                                desc: 'Driving meaningful change through grassroots initiatives and dedicated volunteer work across nearby villages.',
                                icon: <Zap className="h-6 w-6 text-yellow-500" />
                            },
                            {
                                title: 'Student Leadership',
                                desc: 'Developing the next generation of leaders through responsibility, team coordination, and public service.',
                                icon: <Users className="h-6 w-6 text-blue-500" />
                            },
                            {
                                title: 'Social Synergy',
                                desc: 'Connecting students with the community to foster mutual growth, understanding, and social cohesion.',
                                icon: <Heart className="h-6 w-6 text-red-500" />
                            }
                        ].map((feature, i) => (
                           <div key={i} className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 border-t-4 border-t-primary-600 shadow-sm transition-all duration-300 group cursor-pointer hover:-translate-y-2 hover:border-saffron hover:shadow-[0_10px_25px_rgba(245,158,11,0.8)]">
                         
    
                             <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-8 bg-gray-800/60 border border-white/5 group-hover:scale-110 transition-transform">
                                 {feature.icon}
                             </div>
                                <h3 className="text-2xl font-black mb-4 text-white tracking-tight transition-colors duration-300 group-hover:text-yellow-400">
                                {feature.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed font-medium">
                                {feature.desc}
                                </p>
                            </div>
                                ))}
                    </div>
                </div>
            </section>

            {/* Initiatives Showcase */}
            <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">Key Initiatives</h2>
                        <div className="h-1.5 w-16 bg-primary-500 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <Heart className="h-5 w-5 text-red-500" />, title: 'Blood Donation', desc: 'Saving lives through regular donation camps', color: 'red' },
                            { icon: <BookOpen className="h-5 w-5 text-blue-500" />, title: 'Parishodh', desc: 'Research-based community problem solving', color: 'blue' },
                            { icon: <Award className="h-5 w-5 text-amber-500" />, title: 'Umang', desc: 'Joy of giving to underprivileged children', color: 'amber' },
                            { icon: <Globe className="h-5 w-5 text-emerald-500" />, title: 'Swachh Campus', desc: 'Cleanliness and environmental preservation', color: 'emerald' },
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 border-t-4 border-t-primary-600 shadow-sm transition-all duration-300 group cursor-pointer hover:-translate-y-2 hover:border-saffron hover:shadow-[0_10px_25px_rgba(245,158,11,0.8)]">
                                <div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-900 flex items-center justify-center mb-4 text-primary-600">
                                    {item.icon}
                                </div>
                                <h4 className="font-bold text-primary-900 dark:text-white mb-2 transition-colors group-hover:text-saffron">{item.title}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Preview Section */}
            <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-transparent">
                <div className="container mx-auto max-w-5xl">
                    <Card padding="lg" className="relative">
                        <div className="absolute top-0 right-0 p-10 opacity-[0.03] dark:opacity-10 pointer-events-none">
                            <ShieldCheck className="h-64 w-64" />
                        </div>

                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black mb-6 dark:text-white tracking-tight leading-tight">
                                Powered by an <br /> Extraordinary Team
                            </h2>
                            <div className="h-1.5 w-20 bg-gradient-to-r from-primary-600 to-indigo-600 mx-auto rounded-full"></div>
                        </div>

                        {loading ? (
                            <div className="flex flex-col items-center justify-center py-20 space-y-6">
                                <div className="w-16 h-16 border-4 border-gray-100 dark:border-white/5 border-t-primary-500 rounded-full animate-spin"></div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Loading team data</p>
                            </div>
                        ) : users.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {users.slice(0, 4).map((user) => (
                                    <div key={user.id} className="p-8 rounded-xl bg-white dark:bg-gray-800 border-l-4 border-saffron shadow-sm hover:shadow-md transition-all duration-300 group">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 rounded-lg bg-primary-50 dark:bg-gray-900 flex items-center justify-center text-primary-900 dark:text-primary-400 font-bold">
                                                {user.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="font-black text-gray-900 dark:text-white text-lg tracking-tight uppercase">{user.name}</h4>
                                                <p className="text-xs text-saffron font-bold tracking-widest uppercase">Team Member</p>
                                            </div>
                                        </div>
                                        <div className="mt-6 flex items-center text-gray-600 dark:text-gray-400">
                                            <Mail className="h-4 w-4 mr-2 text-primary-600" />
                                            <span className="text-xs font-bold tracking-[0.05em]">{user.email}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <p className="text-gray-500 dark:text-gray-400 font-medium">Meet our incredible team on the Team page.</p>
                            </div>
                        )}

                        <div className="text-center mt-10">
                            <Link to="/team" className="inline-flex items-center text-sm font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 group transition-colors">
                                View Full Team
                                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </Card>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-primary-900 border-t-4 border-saffron">
                <div className="container mx-auto max-w-4xl">
                    <div className="relative overflow-hidden rounded-xl p-12 md:p-16 text-center">
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight uppercase">
                                Ready to Make<br />a Difference?
                            </h2>
                            <p className="text-blue-100 font-medium text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                                Join 250+ volunteers building a better society. Your journey of service and self-discovery starts here.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link to="/join" className="px-8 py-4 bg-saffron text-white rounded-md font-bold shadow-lg hover:bg-[#e68a2e] transition-colors flex items-center uppercase tracking-wide">
                                    Join NSS Now <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                                <Link to="/events" className="px-8 py-4 border-2 border-white/30 text-white rounded-md font-bold hover:bg-white/10 transition-colors uppercase tracking-wide">
                                    Explore Events
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

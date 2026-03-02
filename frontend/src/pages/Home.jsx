import React, { useEffect, useState } from 'react';
import { ArrowRight, Users, Calendar, Heart, MessageSquare, ShieldCheck, Mail, Sparkles, Zap, Globe, Target } from 'lucide-react';
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
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary-500/10 blur-[120px] animate-pulse-soft"></div>
                <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] rounded-full bg-purple-500/10 blur-[120px] animate-float"></div>
                <div className="absolute bottom-[10%] left-[20%] w-[25%] h-[25%] rounded-full bg-teal-500/10 blur-[100px] animate-pulse-soft"></div>
                <div className="absolute inset-0 bg-mesh opacity-60 dark:opacity-30"></div>
            </div>

            {/* Hero Section */}
            <section className="relative z-10 pt-20 pb-16 lg:pt-32 lg:pb-32 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl text-center">
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800/50 mb-8 animate-float">
                        <Sparkles className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-700 dark:text-primary-400">Serving Humanity Since 1969</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-8 select-none">
                        <span className="text-gray-900 dark:text-white">Empowering </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-indigo-500 to-purple-600 animate-gradient-move">Change</span>
                        <br />
                        <span className="text-gray-900 dark:text-white">Through Service.</span>
                    </h1>

                    <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed opacity-90">
                        Join NSS NIT Hamirpur in our journey to build a better society. Compassionate service, student leadership, and community development.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-float" style={{ animationDelay: '0.2s' }}>
                        <Button size="lg" className="group">
                            Start Serving <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="glass" size="lg">
                            Our Initiatives
                        </Button>
                    </div>

                    {/* Trusted Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-10 border-t border-gray-100 dark:border-white/5">
                        {[
                            { label: 'Volunteers', value: '250+', icon: <Users className="h-4 w-4" /> },
                            { label: 'Events Year', value: '45+', icon: <Calendar className="h-4 w-4" /> },
                            { label: 'Impact', value: '5K+', icon: <Target className="h-4 w-4" /> },
                            { label: 'Global reach', value: '∞', icon: <Globe className="h-4 w-4" /> },
                        ].map((stat, i) => (
                            <div key={i} className="p-6 text-center group">
                                <div className="text-gray-400 dark:text-gray-500 flex justify-center mb-2 group-hover:text-primary-500 transition-colors">{stat.icon}</div>
                                <div className="text-3xl font-bold dark:text-white tracking-tighter mb-1 select-none">{stat.value}</div>
                                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium Features Grid */}
            <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-transparent">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Community Impact',
                                desc: 'Driving meaningful change through grassroots initiatives and dedicated volunteer work.',
                                icon: <Zap className="h-6 w-6 text-yellow-500" />
                            },
                            {
                                title: 'Student Leadership',
                                desc: 'Developing the next generation of leaders through responsibility and public service.',
                                icon: <Users className="h-6 w-6 text-blue-500" />
                            },
                            {
                                title: 'Social Synergy',
                                desc: 'Connecting students with the community to foster mutual growth and understanding.',
                                icon: <Heart className="h-6 w-6 text-red-500" />
                            }
                        ].map((feature, i) => (
                            <Card key={i} className="group">
                                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-8 border border-white/50 shadow-inner group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-black mb-4 dark:text-white tracking-tight">{feature.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium">{feature.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dynamic Core Team Section */}
            <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-5xl">
                    <Card padding="lg" className="relative">
                        <div className="absolute top-0 right-0 p-10 opacity-[0.03] dark:opacity-10 pointer-events-none">
                            <ShieldCheck className="h-64 w-64" />
                        </div>

                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black mb-6 dark:text-white tracking-tightest leading-tight">
                                Powered by an <br /> Extraordinary Team
                            </h2>
                            <div className="h-1.5 w-20 bg-gradient-to-r from-primary-600 to-indigo-600 mx-auto rounded-full"></div>
                        </div>

                        {loading ? (
                            <div className="flex flex-col items-center justify-center py-20 space-y-6">
                                <div className="w-16 h-16 border-4 border-gray-100 dark:border-white/5 border-t-primary-500 rounded-full animate-spin"></div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Syncing with source</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {users.map((user) => (
                                    <div key={user.id} className="p-8 rounded-[2rem] bg-gray-50/50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 hover:bg-white dark:hover:bg-white/[0.05] transition-all duration-300 group">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 rounded-2xl bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold group-hover:scale-110 transition-transform">
                                                {user.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="font-black text-gray-900 dark:text-white text-lg tracking-tight uppercase">{user.name}</h4>
                                                <p className="text-xs text-primary-600 font-bold tracking-widest uppercase opacity-60">Team Member</p>
                                            </div>
                                        </div>
                                        <div className="mt-6 flex items-center text-gray-400 group-hover:text-primary-500 transition-colors">
                                            <Mail className="h-3 w-3 mr-2" />
                                            <span className="text-[10px] font-bold tracking-[0.05em]">{user.email}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </Card>
                </div>
            </section>
        </div>
    );
};

export default Home;

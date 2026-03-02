import { Info, Target, Heart, Globe, Users, Award, BookOpen, Sparkles } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-[#030711] transition-colors duration-300">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 space-y-28 page-enter">
                {/* Hero Section */}
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800/50">
                        <Info className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">About NSS</span>
                    </div>
                    <h1 className="section-heading leading-tight">
                        Beyond Service.<br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 animate-gradient-move">Towards Humanity.</span>
                    </h1>
                    <div className="h-1.5 w-20 bg-amber-400 mx-auto rounded-full"></div>
                    <p className="section-subheading italic">
                        NSS is not just an organization; it's a movement of conscious youth building a resilient nation through empathy.
                    </p>
                </div>

                {/* Mission, Vision, Values Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: <Target className="h-7 w-7 text-blue-600 dark:text-blue-400" />, title: 'Mission', desc: 'To provide youth with opportunities to participate in community service and develop personality through constructive social engagement.', color: 'blue' },
                        { icon: <Globe className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />, title: 'Vision', desc: 'To build a society where every individual is committed to social justice, environmental sustainability, and common welfare.', color: 'emerald' },
                        { icon: <Heart className="h-7 w-7 text-rose-600 dark:text-rose-400" />, title: 'Values', desc: 'Compassion, Integrity, Solidarity, and the fundamental belief in "Not Me, But You" — our guiding philosophy.', color: 'rose' }
                    ].map((item, i) => (
                        <div key={i} className="group p-10 bg-white dark:bg-gray-900/50 rounded-3xl shadow-xl shadow-gray-100/50 dark:shadow-none border border-gray-100 dark:border-white/5 hover:border-gray-200 dark:hover:border-white/10 hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
                            <div className="mb-6 p-5 rounded-2xl bg-gray-50 dark:bg-gray-800/50 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-black text-gray-900 dark:text-white tracking-tight mb-4 uppercase">{item.title}</h3>
                            <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* What We Do Section */}
                <div>
                    <div className="text-center mb-14 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight">What We Do</h2>
                        <div className="h-1.5 w-16 bg-primary-500 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: <Heart className="h-5 w-5" />, title: 'Blood Donation Camps', desc: 'Regular blood drives saving hundreds of lives annually.' },
                            { icon: <BookOpen className="h-5 w-5" />, title: 'Computer Literacy', desc: 'Teaching digital skills to underprivileged students.' },
                            { icon: <Users className="h-5 w-5" />, title: 'Community Outreach', desc: 'Village adoption programs and social awareness campaigns.' },
                            { icon: <Globe className="h-5 w-5" />, title: 'Environmental Drives', desc: 'Tree plantation, cleanliness, and sustainability efforts.' },
                            { icon: <Award className="h-5 w-5" />, title: 'Umang Festival', desc: 'Celebrations bringing joy to underprivileged children.' },
                            { icon: <Sparkles className="h-5 w-5" />, title: 'Health & Awareness', desc: 'Workshops on mental health, hygiene, and first aid.' },
                        ].map((item, i) => (
                            <div key={i} className="flex space-x-4 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-white/5 hover:bg-white dark:hover:bg-gray-800/50 hover:shadow-lg hover:shadow-gray-100/30 dark:hover:shadow-none hover:-translate-y-0.5 transition-all duration-300 group">
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{item.title}</h4>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* History Section */}
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-3xl border border-gray-100 dark:border-white/5 p-10 md:p-16">
                    <div className="max-w-3xl mx-auto text-center space-y-6">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight">Our Legacy</h2>
                        <div className="h-1.5 w-16 bg-amber-400 mx-auto rounded-full"></div>
                        <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed text-lg">
                            The National Service Scheme was launched in 1969 during the birth centenary of Mahatma Gandhi. 
                            At NIT Hamirpur, our NSS chapter has been a cornerstone of student-led community development, 
                            consistently recognized for its impactful initiatives and dedicated volunteer corps.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed text-lg">
                            With a motto of <strong className="text-gray-900 dark:text-white">"Not Me But You"</strong>, 
                            we continue to inspire generations of students to look beyond themselves and contribute 
                            meaningfully to society.
                        </p>
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-white/5 mt-8">
                            {[
                                { value: '55+', label: 'Years of Service' },
                                { value: '10K+', label: 'Alumni Network' },
                                { value: '100+', label: 'Awards Won' },
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white">{stat.value}</div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

import React, { useState } from 'react';
import { UserPlus, Send, User, Mail, Phone, BookOpen, Heart, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const JoinUs = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        rollNumber: '',
        branch: '',
        year: '1st Year',
        motivation: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const branches = [
        'Computer Science & Engineering',
        'Electronics & Communication',
        'Electrical Engineering',
        'Mechanical Engineering',
        'Civil Engineering',
        'Architecture',
        'Mathematics & Computing',
        'Material Science',
        'Chemical Engineering',
        'Engineering Physics'
    ];

    const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Join Application:', formData);
        setSubmitted(true);
    };

    const inputClasses = "w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 font-medium";
    const labelClasses = "block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 ml-1 tracking-tight";

    if (submitted) {
        return (
            <div className="min-h-screen bg-white dark:bg-[#030711] flex items-center justify-center px-4 transition-colors">
                <div className="text-center max-w-md page-enter">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/50 mb-8">
                        <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-4">Application Received!</h2>
                    <p className="text-gray-500 dark:text-gray-400 font-medium text-lg leading-relaxed mb-8">
                        Thank you for your interest in joining NSS NIT Hamirpur. We'll review your application and get back to you via email.
                    </p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-bold text-sm hover:opacity-90 active:scale-95 transition-all"
                    >
                        Submit Another <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-[#030711] transition-colors duration-300">
            <div className="container mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-24 page-enter">
                {/* Header */}
                <div className="text-center mb-16 space-y-6">
                    <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800/50">
                        <Sparkles className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-700 dark:text-primary-400">Be the Change</span>
                    </div>
                    <h1 className="section-heading">Join NSS Family</h1>
                    <p className="section-subheading">
                        Take the first step towards making a real difference. Not me, but you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Why Join Section */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-black text-gray-900 dark:text-white tracking-tight">Why Join NSS?</h3>
                        {[
                            { icon: <Heart className="h-5 w-5 text-red-500" />, title: 'Community Service', desc: 'Directly impact lives through meaningful service activities.' },
                            { icon: <UserPlus className="h-5 w-5 text-blue-500" />, title: 'Leadership Skills', desc: 'Develop organizational and leadership capabilities.' },
                            { icon: <BookOpen className="h-5 w-5 text-emerald-500" />, title: 'Holistic Growth', desc: 'Grow beyond academics through real-world experiences.' },
                        ].map((item, i) => (
                            <div key={i} className="flex space-x-4 p-5 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-white/5 hover:border-gray-200 dark:hover:border-white/10 transition-all group">
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{item.title}</h4>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}

                        <div className="p-6 rounded-2xl bg-primary-50 dark:bg-primary-900/10 border border-primary-100 dark:border-primary-800/30">
                            <p className="text-sm font-bold text-primary-800 dark:text-primary-300 leading-relaxed">
                                "The best way to find yourself is to lose yourself in the service of others."
                            </p>
                            <p className="text-xs font-bold text-primary-600 dark:text-primary-400 mt-2 uppercase tracking-wider">— Mahatma Gandhi</p>
                        </div>
                    </div>

                    {/* Application Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white dark:bg-gray-900/50 rounded-3xl border border-gray-100 dark:border-white/5 p-8 md:p-10 shadow-xl shadow-gray-100/50 dark:shadow-none">
                            <h3 className="text-xl font-black text-gray-900 dark:text-white tracking-tight mb-8 flex items-center">
                                <UserPlus className="h-5 w-5 mr-3 text-primary-600 dark:text-primary-400" />
                                Application Form
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className={labelClasses}>Full Name *</label>
                                        <input type="text" name="fullName" placeholder="Your full name" className={inputClasses} onChange={handleChange} required />
                                    </div>
                                    <div>
                                        <label className={labelClasses}>Email Address *</label>
                                        <input type="email" name="email" placeholder="your@email.com" className={inputClasses} onChange={handleChange} required />
                                    </div>
                                    <div>
                                        <label className={labelClasses}>Phone Number *</label>
                                        <input type="tel" name="phone" placeholder="10-digit number" className={inputClasses} onChange={handleChange} required />
                                    </div>
                                    <div>
                                        <label className={labelClasses}>Roll Number *</label>
                                        <input type="text" name="rollNumber" placeholder="e.g., 22BCS001" className={inputClasses} onChange={handleChange} required />
                                    </div>
                                    <div>
                                        <label className={labelClasses}>Branch *</label>
                                        <select name="branch" className={`${inputClasses} cursor-pointer`} onChange={handleChange} required>
                                            <option value="">Select your branch</option>
                                            {branches.map(b => (
                                                <option key={b} value={b}>{b}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className={labelClasses}>Year *</label>
                                        <select name="year" className={`${inputClasses} cursor-pointer`} onChange={handleChange} value={formData.year}>
                                            {years.map(y => (
                                                <option key={y} value={y}>{y}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className={labelClasses}>Why do you want to join NSS? *</label>
                                    <textarea
                                        name="motivation"
                                        rows="4"
                                        placeholder="Share your motivation and what you hope to contribute..."
                                        className={`${inputClasses} resize-none`}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-bold text-base shadow-lg hover:shadow-xl hover:opacity-95 active:scale-[0.98] transition-all flex items-center justify-center group"
                                >
                                    Submit Application
                                    <Send className="ml-3 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Linkedin, Github, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="min-h-screen bg-white dark:bg-[#030711] transition-colors duration-300">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 space-y-20 page-enter">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/50">
                        <Mail className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-700 dark:text-indigo-400">Reach Out</span>
                    </div>
                    <h1 className="section-heading">Get in Touch</h1>
                    <p className="section-subheading">
                        We're here to answer any questions you have about our initiatives or how you can get involved.
                    </p>
                </div>

                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { icon: <MapPin className="h-6 w-6 text-rose-500" />, label: "Location", value: "NIT Hamirpur, Himachal Pradesh, India 177005", bg: 'bg-rose-50 dark:bg-rose-900/20' },
                        { icon: <Phone className="h-6 w-6 text-blue-500" />, label: "Phone", value: "+91 1972-254000", bg: 'bg-blue-50 dark:bg-blue-900/20' },
                        { icon: <Mail className="h-6 w-6 text-amber-500" />, label: "Email", value: "nss@nith.ac.in", bg: 'bg-amber-50 dark:bg-amber-900/20' }
                    ].map((item, i) => (
                        <div key={i} className="p-8 bg-white dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-gray-200 dark:hover:border-white/10 hover:-translate-y-0.5 transition-all duration-300 group text-center">
                            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${item.bg} mb-5 group-hover:scale-110 transition-transform`}>
                                {item.icon}
                            </div>
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">{item.label}</p>
                            <p className="text-base font-bold text-gray-900 dark:text-white">{item.value}</p>
                        </div>
                    ))}
                </div>

                {/* Form + Social Section */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                    {/* Contact Form */}
                    <div className="lg:col-span-3">
                        <div className="bg-white dark:bg-gray-900/50 p-8 md:p-10 rounded-3xl border border-gray-100 dark:border-white/5 shadow-xl shadow-gray-100/50 dark:shadow-none">
                            <h3 className="text-xl font-black text-gray-900 dark:text-white tracking-tight mb-8 flex items-center">
                                <Send className="h-5 w-5 mr-3 text-indigo-500 dark:text-indigo-400" />
                                Send a Message
                            </h3>

                            {submitted ? (
                                <div className="text-center py-16">
                                    <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h4>
                                    <p className="text-gray-500 dark:text-gray-400 font-medium">We'll get back to you soon.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 ml-1">Full Name</label>
                                            <input type="text" className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 font-medium" placeholder="John Doe" required />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 ml-1">Email Address</label>
                                            <input type="email" className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 font-medium" placeholder="john@example.com" required />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 ml-1">Subject</label>
                                        <input type="text" className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 font-medium" placeholder="How can we help?" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 ml-1">Message</label>
                                        <textarea rows="5" className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 font-medium resize-none" placeholder="Your message..." required></textarea>
                                    </div>
                                    <button type="submit" className="w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-bold text-base shadow-lg hover:shadow-xl hover:opacity-95 active:scale-[0.98] transition-all flex items-center justify-center group">
                                        Send Message
                                        <Send className="ml-3 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Social Links */}
                        <div className="bg-white dark:bg-gray-900/50 p-8 rounded-2xl border border-gray-100 dark:border-white/5">
                            <h3 className="text-lg font-black text-gray-900 dark:text-white tracking-tight mb-6">Follow Us</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { icon: <Instagram className="h-5 w-5" />, name: 'Instagram', color: 'hover:bg-pink-50 dark:hover:bg-pink-900/20 hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-200 dark:hover:border-pink-800/50' },
                                    { icon: <Twitter className="h-5 w-5" />, name: 'Twitter', color: 'hover:bg-sky-50 dark:hover:bg-sky-900/20 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-200 dark:hover:border-sky-800/50' },
                                    { icon: <Linkedin className="h-5 w-5" />, name: 'LinkedIn', color: 'hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800/50' },
                                    { icon: <Github className="h-5 w-5" />, name: 'GitHub', color: 'hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600' },
                                ].map((social, i) => (
                                    <a key={i} href="#" className={`flex items-center space-x-3 p-4 rounded-xl border border-gray-100 dark:border-white/5 text-gray-500 dark:text-gray-400 transition-all duration-300 ${social.color}`}>
                                        {social.icon}
                                        <span className="text-sm font-bold">{social.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Office Hours */}
                        <div className="bg-indigo-50 dark:bg-indigo-900/10 p-8 rounded-2xl border border-indigo-100 dark:border-indigo-800/30">
                            <h3 className="text-lg font-black text-gray-900 dark:text-white tracking-tight mb-4">Office Hours</h3>
                            <div className="space-y-3 text-sm">
                                {[
                                    { day: 'Monday - Friday', time: '10:00 AM - 6:00 PM' },
                                    { day: 'Saturday', time: '10:00 AM - 2:00 PM' },
                                    { day: 'Sunday', time: 'Closed' },
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between">
                                        <span className="font-bold text-gray-700 dark:text-gray-300">{item.day}</span>
                                        <span className="font-medium text-gray-500 dark:text-gray-400">{item.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-gray-100 dark:bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 h-48 flex items-center justify-center">
                            <div className="text-center">
                                <MapPin className="h-8 w-8 text-gray-400 dark:text-gray-500 mx-auto mb-2" />
                                <p className="text-sm font-bold text-gray-400 dark:text-gray-500">NIT Hamirpur Campus</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

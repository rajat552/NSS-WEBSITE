import React, { useState } from 'react';
import { Lightbulb, Send, Heart, User, Mail, Phone, MessageSquare } from 'lucide-react';

const ThinkTank = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        thought: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (type) => {
        console.log(`Submitting as ${type}:`, formData);
        // Add your submission logic here (API call, etc.)
        alert(`Your ${type === 'THINK' ? 'idea' : 'appreciation'} has been received!`);
    };

    return (
        <div className="min-h-screen bg-gray-50/50 dark:bg-[#0f111a] py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-2xl shadow-teal-100/50 dark:shadow-teal-900/20 border border-teal-50 dark:border-teal-900/30 overflow-hidden transition-all hover:shadow-teal-200/50 duration-500">
                    {/* Header Section */}
                    <div className="bg-gradient-to-br from-teal-500 to-teal-600 dark:from-teal-600 dark:to-teal-800 p-10 text-center">
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-white/20 backdrop-blur-md mb-6 shadow-inner animate-pulse">
                            <Lightbulb className="h-12 w-12 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white tracking-[0.2em] uppercase">
                            Think - Thank
                        </h1>
                        <p className="text-teal-50 mt-4 font-medium tracking-wide">
                            Your Ideas, Our Inspiration. Your Gratitude, Our Strength.
                        </p>
                    </div>

                    {/* Form Section */}
                    <div className="p-8 md:p-12 space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Name Input */}
                            <div className="space-y-2 group">
                                <label className="flex items-center space-x-2 text-teal-700 dark:text-teal-400 font-bold uppercase tracking-wider text-sm ml-1 transition-colors group-focus-within:text-teal-500">
                                    <User className="h-4 w-4" />
                                    <span>Full Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 dark:bg-gray-900/50 border-2 border-gray-100 dark:border-gray-700 rounded-2xl px-5 py-4 text-gray-700 dark:text-gray-200 font-medium focus:bg-white dark:focus:bg-gray-900 focus:border-teal-400 focus:ring-4 focus:ring-teal-100 dark:focus:ring-teal-900/30 transition-all outline-none placeholder:text-gray-300 dark:placeholder:text-gray-600"
                                />
                            </div>

                            {/* Email Input */}
                            <div className="space-y-2 group">
                                <label className="flex items-center space-x-2 text-teal-700 dark:text-teal-400 font-bold uppercase tracking-wider text-sm ml-1 transition-colors group-focus-within:text-teal-500">
                                    <Mail className="h-4 w-4" />
                                    <span>Email Address</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 dark:bg-gray-900/50 border-2 border-gray-100 dark:border-gray-700 rounded-2xl px-5 py-4 text-gray-700 dark:text-gray-200 font-medium focus:bg-white dark:focus:bg-gray-900 focus:border-teal-400 focus:ring-4 focus:ring-teal-100 dark:focus:ring-teal-900/30 transition-all outline-none placeholder:text-gray-300 dark:placeholder:text-gray-600"
                                />
                            </div>
                        </div>

                        {/* Phone Input */}
                        <div className="space-y-2 group">
                            <label className="flex items-center space-x-2 text-teal-700 dark:text-teal-400 font-bold uppercase tracking-wider text-sm ml-1 transition-colors group-focus-within:text-teal-500">
                                <Phone className="h-4 w-4" />
                                <span>Phone Number</span>
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Enter your phone number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full bg-gray-50 dark:bg-gray-900/50 border-2 border-gray-100 dark:border-gray-700 rounded-2xl px-5 py-4 text-gray-700 dark:text-gray-200 font-medium focus:bg-white dark:focus:bg-gray-900 focus:border-teal-400 focus:ring-4 focus:ring-teal-100 dark:focus:ring-teal-900/30 transition-all outline-none placeholder:text-gray-300 dark:placeholder:text-gray-600"
                            />
                        </div>

                        {/* Thought Input */}
                        <div className="space-y-2 group">
                            <label className="flex items-center space-x-2 text-teal-700 dark:text-teal-400 font-bold uppercase tracking-wider text-sm ml-1 transition-colors group-focus-within:text-teal-500">
                                <MessageSquare className="h-4 w-4" />
                                <span>Thought <span className="text-red-400">*</span></span>
                            </label>
                            <textarea
                                name="thought"
                                rows="5"
                                placeholder="Express your thought here..."
                                value={formData.thought}
                                onChange={handleChange}
                                className="w-full bg-gray-50 dark:bg-gray-900/50 border-2 border-gray-100 dark:border-gray-700 rounded-[2rem] px-6 py-5 text-gray-700 dark:text-gray-200 font-medium focus:bg-white dark:focus:bg-gray-900 focus:border-teal-400 focus:ring-4 focus:ring-teal-100 dark:focus:ring-teal-900/30 transition-all outline-none placeholder:text-gray-300 dark:placeholder:text-gray-600 resize-none"
                                required
                            ></textarea>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-end space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                            <button
                                onClick={() => handleSubmit('THINK')}
                                className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 rounded-2xl font-black tracking-[0.1em] shadow-xl shadow-teal-200 dark:shadow-teal-900/40 active:scale-95 transition-all text-sm uppercase"
                            >
                                <Send className="h-4 w-4" />
                                <span>Think</span>
                            </button>
                            <button
                                onClick={() => handleSubmit('THANK')}
                                className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 rounded-2xl font-black tracking-[0.1em] shadow-xl shadow-teal-200 dark:shadow-teal-900/40 active:scale-95 transition-all text-sm uppercase"
                            >
                                <Heart className="h-4 w-4 fill-current text-white" />
                                <span>Thank</span>
                            </button>
                        </div>

                        {/* Note Section */}
                        <div className="bg-teal-50/50 dark:bg-teal-900/10 border-l-4 border-teal-500 rounded-2xl p-6 mt-10">
                            <h4 className="text-teal-800 dark:text-teal-300 font-black text-xs uppercase tracking-widest mb-3 flex items-center">
                                <span className="bg-teal-500 w-1.5 h-4 mr-2 rounded-full"></span>
                                Note:
                            </h4>
                            <div className="space-y-3">
                                <p className="text-teal-700 dark:text-teal-400 text-sm font-medium flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-teal-400 mr-3"></span>
                                    Press <strong className="mx-1 text-teal-900 dark:text-teal-200 border-b-2 border-teal-200 dark:border-teal-800">"THINK"</strong> to provide new ideas.
                                </p>
                                <p className="text-teal-700 dark:text-teal-400 text-sm font-medium flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-teal-400 mr-3"></span>
                                    Press <strong className="mx-1 text-teal-900 dark:text-teal-200 border-b-2 border-teal-200 dark:border-teal-800">"THANK"</strong> to appreciate the work done by NSS NIT Hamirpur.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThinkTank;

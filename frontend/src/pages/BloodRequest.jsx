import React, { useState } from 'react';
import { Droplet, Send, User, Mail, MapPin, Phone, MessageSquare, Globe } from 'lucide-react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const BloodRequest = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        location: '',
        city: '',
        bloodGroup: 'A+',
        phone: '',
        gender: 'Male'
    });

    const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
    const genders = ['Male', 'Female', 'Other'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sending Blood Request:', formData);
        // Add API call logic here
    };

    const inputClasses = "w-full px-5 py-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-gray-900 dark:text-white placeholder-gray-400";
    const labelClasses = "block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 ml-1 tracking-tight uppercase";

    return (
        <div className="relative min-h-screen pt-12 pb-32 overflow-hidden bg-white dark:bg-[#030711]">
            {/* Background Gradients */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] right-[10%] w-[40%] h-[40%] rounded-full bg-red-500/5 dark:bg-red-500/10 blur-[120px] animate-pulse-soft"></div>
                <div className="absolute bottom-[20%] left-[5%] w-[30%] h-[30%] rounded-full bg-orange-500/5 dark:bg-orange-500/5 blur-[120px] animate-float"></div>
                {/* Mesh Gradient Overlay */}
                <div className="absolute inset-0 bg-mesh opacity-30 dark:opacity-20"></div>
            </div>

            <div className="container mx-auto max-w-4xl px-4 relative z-10 pt-16">
                <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800/50 mb-8 animate-float">
                        <Droplet className="h-10 w-10 text-red-600 dark:text-red-500" fill="currentColor" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tightest leading-tight mb-4">
                        Blood <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-rose-500">Request</span>
                    </h1>
                    <div className="h-1.5 w-24 bg-red-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed opacity-80">
                        Urgent need? Our volunteer network at NSS NIT Hamirpur is ready to assist. Fill out the details below.
                    </p>
                </div>

                <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <Card padding="lg" className="shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)]">
                        <form onSubmit={handleSubmit} className="space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                                {/* Row 1 */}
                                <div>
                                    <label className={labelClasses}>Full Name</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-1.5 flex items-center pointer-events-none opacity-40">
                                            <span className="w-10 h-10 flex items-center justify-center">
                                                <User className="h-4 w-4" />
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            name="fullName"
                                            placeholder="Enter your name"
                                            className={`${inputClasses} pl-12`}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className={labelClasses}>Email Address</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-1.5 flex items-center pointer-events-none opacity-40">
                                            <span className="w-10 h-10 flex items-center justify-center">
                                                <Mail className="h-4 w-4" />
                                            </span>
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            className={`${inputClasses} pl-12`}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Row 2 */}
                                <div>
                                    <label className={labelClasses}>Location</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-1.5 flex items-center pointer-events-none opacity-40">
                                            <span className="w-10 h-10 flex items-center justify-center">
                                                <MapPin className="h-4 w-4" />
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            name="location"
                                            placeholder="Enter Hospital / Landmark"
                                            className={`${inputClasses} pl-12`}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className={labelClasses}>City</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-1.5 flex items-center pointer-events-none opacity-40">
                                            <span className="w-10 h-10 flex items-center justify-center">
                                                <Globe className="h-4 w-4" />
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            name="city"
                                            placeholder="Enter your city"
                                            className={`${inputClasses} pl-12`}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Row 3 */}
                                <div>
                                    <label className={labelClasses}>Blood Group</label>
                                    <select
                                        name="bloodGroup"
                                        className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22currentColor%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1.25rem_center] bg-[length:1.25rem] cursor-pointer`}
                                        onChange={handleChange}
                                        value={formData.bloodGroup}
                                    >
                                        {bloodGroups.map(bg => (
                                            <option key={bg} value={bg}>{bg}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className={labelClasses}>Phone Number</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-1.5 flex items-center pointer-events-none opacity-40">
                                            <span className="w-10 h-10 flex items-center justify-center">
                                                <Phone className="h-4 w-4" />
                                            </span>
                                        </div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Enter 10-digit number"
                                            className={`${inputClasses} pl-12`}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Gender Radio Buttons */}
                            <div className="pt-4">
                                <label className={labelClasses}>Gender</label>
                                <div className="flex flex-wrap gap-8 items-center mt-4">
                                    {genders.map((g) => (
                                        <label key={g} className="flex items-center space-x-3 cursor-pointer group select-none">
                                            <div className="relative flex items-center justify-center">
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    value={g}
                                                    checked={formData.gender === g}
                                                    onChange={handleChange}
                                                    className="appearance-none w-6 h-6 rounded-full border-2 border-gray-300 dark:border-white/10 checked:border-red-500 transition-all cursor-pointer"
                                                />
                                                {formData.gender === g && (
                                                    <div className="absolute w-3 h-3 bg-red-500 rounded-full animate-in zoom-in-50 duration-300"></div>
                                                )}
                                            </div>
                                            <span className={`font-bold transition-all ${formData.gender === g ? "text-gray-900 dark:text-white scale-105" : "text-gray-400"}`}>
                                                {g}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-8">
                                <Button
                                    type="submit"
                                    className="w-full py-6 text-xl bg-red-600 hover:bg-red-700 text-white rounded-[2rem] shadow-2xl shadow-red-500/20 active:scale-[0.98] transition-all group"
                                >
                                    <span className="flex items-center justify-center">
                                        Send Request <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </span>
                                </Button>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default BloodRequest;

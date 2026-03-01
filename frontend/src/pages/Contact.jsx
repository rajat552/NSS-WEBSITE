import { Mail, Phone, MapPin, Send, Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    return (
        <div className="container mx-auto px-4 py-24 sm:py-32 space-y-32">
            <div className="max-w-4xl mx-auto text-center space-y-12">
                <div className="inline-flex p-5 rounded-[2.5rem] bg-indigo-50 text-indigo-600 shadow-xl shadow-indigo-100/50 mb-8 border border-indigo-100 hover:scale-110 transition-transform">
                    <Mail className="h-10 w-10 text-indigo-500" />
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tightest leading-tight">Get in Touch<br />With Our Team.</h1>
                <div className="h-2 w-24 bg-indigo-400 mx-auto rounded-full"></div>
                <p className="text-gray-500 font-medium text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed opacity-80 italic">
                    We're here to answer any questions you have about our initiatives or how you can get involved.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="space-y-16 lg:pr-12 border-b lg:border-b-0 lg:border-r border-gray-100 pb-16 lg:pb-0">
                    {[
                        { icon: <MapPin className="h-10 w-10 text-rose-500" />, label: "Headquarters", val: "NSS Unit, Regional College, New Delhi, India" },
                        { icon: <Phone className="h-10 w-10 text-blue-500" />, label: "Direct Support", val: "+91 98765 43210" },
                        { icon: <Mail className="h-10 w-10 text-amber-500" />, label: "Official Email", val: "nss@college.edu" }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center space-x-10 group">
                            <div className="p-8 rounded-[2.5rem] bg-gray-50 group-hover:bg-primary-50 transition-all duration-500 group-hover:scale-105 shadow-inner scale-90 group-hover:scale-100">{item.icon}</div>
                            <div>
                                <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-3 italic">{item.label}</p>
                                <p className="text-2xl font-black text-gray-900 tracking-tighter hover:text-primary-600 transition-colors uppercase select-none">{item.val}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <form className="bg-white p-12 lg:p-16 rounded-[4rem] shadow-3xl shadow-gray-100/50 space-y-10 border border-gray-50 relative">
                    <div className="absolute top-0 right-0 p-8 transform rotate-12 opacity-5 translate-y-10">
                        <Send className="h-32 w-32 text-primary-500" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Full Name</label>
                            <input type="text" className="w-full bg-gray-50 border-transparent rounded-[1.5rem] px-8 py-5 text-gray-900 font-bold focus:ring-4 focus:ring-blue-100 transition-all placeholder-gray-300" placeholder="John Doe" />
                        </div>
                        <div className="space-y-4">
                            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Email Address</label>
                            <input type="email" className="w-full bg-gray-50 border-transparent rounded-[1.5rem] px-8 py-5 text-gray-900 font-bold focus:ring-4 focus:ring-blue-100 transition-all placeholder-gray-300" placeholder="john@company.com" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Message</label>
                        <textarea rows="6" className="w-full bg-gray-50 border-transparent rounded-[2rem] px-8 py-6 text-gray-900 font-bold focus:ring-4 focus:ring-blue-100 transition-all placeholder-gray-300 resize-none" placeholder="How can we collaborate?"></textarea>
                    </div>
                    <button className="w-full group px-10 py-6 bg-gray-900 text-white rounded-[2.5rem] font-black text-xl shadow-[0_30px_60px_rgba(0,0,0,0.2)] hover:bg-black active:scale-95 transition-all flex items-center justify-center space-x-6">
                        <span className="uppercase tracking-widest translate-x-3 group-hover:translate-x-0 transition-transform">Send Message</span>
                        <div className="p-3 bg-white/10 rounded-2xl group-hover:rotate-45 transition-transform">
                            <Send className="h-6 w-6" />
                        </div>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

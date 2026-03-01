import { Heart, Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { name: 'About Us', href: '/about' },
        { name: 'Events', href: '#' },
        { name: 'Activities', href: '#' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <footer className="footer bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
                    <div className="col-span-1 md:col-span-1 border-b md:border-b-0 pb-8 md:pb-0 border-gray-100">
                        <Link to="/" className="flex items-center space-x-2 mb-6 group">
                            <div className="bg-primary-50 p-2 rounded-xl group-hover:scale-110 transition-transform">
                                <Heart className="h-6 w-6 text-primary-600 fill-current" />
                            </div>
                            <span className="text-2xl font-black text-gray-900 tracking-tightest">NSS UNIT</span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
                            Not Me, But You. We are dedicated to building a stronger, more compassionate society through grassroots volunteerism. Join our mission today.
                        </p>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="p-2.5 rounded-xl bg-gray-50 text-gray-400 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="p-2.5 rounded-xl bg-gray-50 text-gray-400 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="#" className="p-2.5 rounded-xl bg-gray-50 text-gray-400 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 col-span-1 md:col-span-3 gap-8">
                        <div className="space-y-6">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Quick Links</h4>
                            <ul className="space-y-4">
                                {footerLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.href} className="text-gray-600 hover:text-primary-600 font-medium transition-colors inline-block hover:translate-x-1 duration-300">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Contact Us</h4>
                            <ul className="space-y-5">
                                <li className="flex items-start group">
                                    <div className="p-1.5 rounded-lg bg-red-50 text-red-500 mr-3 mt-0.5 group-hover:scale-110 transition-transform">
                                        <MapPin className="h-4 w-4" />
                                    </div>
                                    <span className="text-gray-600 text-sm font-medium">NSS Unit, Regional College,<br />New Delhi, India</span>
                                </li>
                                <li className="flex items-center group">
                                    <div className="p-1.5 rounded-lg bg-blue-50 text-blue-500 mr-3 group-hover:scale-110 transition-transform">
                                        <Phone className="h-4 w-4" />
                                    </div>
                                    <span className="text-gray-600 text-sm font-medium">+91 9876543210</span>
                                </li>
                                <li className="flex items-center group">
                                    <div className="p-1.5 rounded-lg bg-green-50 text-green-500 mr-3 group-hover:scale-110 transition-transform">
                                        <Mail className="h-4 w-4" />
                                    </div>
                                    <span className="text-gray-600 text-sm font-medium break-all">nss@college.edu</span>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Join Our Newsletter</h4>
                            <p className="text-gray-500 text-xs font-medium leading-relaxed">Get the latest updates on our upcoming events and initiatives directly in your inbox.</p>
                            <form className="relative group">
                                <input
                                    type="email"
                                    placeholder="hello@world.com"
                                    className="w-full bg-gray-50 border-none rounded-xl px-4 py-3.5 text-sm font-medium focus:ring-2 focus:ring-primary-500 transition-all placeholder-gray-400"
                                />
                                <button
                                    type="submit"
                                    className="mt-3 w-full bg-gray-900 text-white px-4 py-3.5 rounded-xl font-bold text-sm shadow-xl shadow-gray-200 hover:bg-black active:scale-[0.98] transition-all"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-gray-400 text-xs font-semibold tracking-wide">
                        &copy; {currentYear} NSS UNIT DEVELOPMENT. PROUDLY DEVELOPED WITH ❤️
                    </p>
                    <div className="flex items-center space-x-8 text-xs font-bold text-gray-400 uppercase tracking-widest">
                        <a href="#" className="hover:text-primary-600 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-primary-600 transition-colors">Terms</a>
                        <a href="#" className="hover:text-primary-600 transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

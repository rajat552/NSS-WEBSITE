import { Twitter, Instagram, Linkedin, Youtube, Mail, MapPin, ChevronRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import nssLogo from '../../assets/NSS logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const sections = [
        {
            title: 'Organization',
            links: [
                { name: 'About NSS', href: '/about' },
                { name: 'Our Team', href: '/team' },
                { name: 'Think Tank', href: '/think-tank' },
                { name: 'Join Us', href: '/join' },
            ]
        },
        {
            title: 'Resources',
            links: [
                { name: 'Latest Events', href: '/events' },
                { name: 'Blood Bank', href: '/blood-request' },
                { name: 'Gallery', href: '/events' },
                { name: 'Contact', href: '/contact' },
            ]
        }
    ];

    return (
        <footer className="bg-primary-900 dark:bg-[#00132b] border-t-4 border-saffron transition-colors duration-300">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                    {/* Branding Section */}
                    <div className="col-span-1 md:col-span-1 space-y-4">
                        <Link to="/" className="flex items-center space-x-3 group">
                            <div className="w-10 h-10 overflow-hidden bg-white rounded-md p-1 shadow-sm group-hover:scale-105 transition-transform">
                                <img
                                    src={nssLogo}
                                    alt="NSS Logo"
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/f/f1/NSS_logo.png';
                                    }}
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-base font-bold tracking-tight text-white uppercase">NSS NITH</span>
                            </div>
                        </Link>
                        <p className="text-sm text-blue-100 font-medium leading-relaxed max-w-[240px]">
                            Building a better society through compassionate volunteerism since 1969.
                        </p>
                        <div className="flex items-center space-x-3 pt-2">
                            {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                                <a key={i} href="#" className="p-2 rounded-lg text-blue-200 hover:text-white hover:bg-white/10 transition-all" aria-label="Social Link">
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Sections */}
                    {sections.map((section) => (
                        <div key={section.title} className="space-y-4">
                            <h3 className="text-sm font-bold text-saffron tracking-wider uppercase border-b border-white/20 pb-2 inline-block">{section.title}</h3>
                            <ul className="space-y-2.5">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.href}
                                            className="text-sm text-blue-100 hover:text-white transition-colors flex items-center group font-medium"
                                        >
                                            <ChevronRight className="h-3 w-3 mr-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-saffron" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Section */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold text-saffron tracking-wider uppercase border-b border-white/20 pb-2 inline-block">Contact</h3>
                        <div className="space-y-3">
                            <a href="mailto:nss@nith.ac.in" className="flex items-center text-sm text-blue-100 hover:text-white transition-colors group">
                                <Mail className="h-4 w-4 mr-3 text-saffron group-hover:text-white transition-colors" />
                                <span className="font-medium">nss@nith.ac.in</span>
                            </a>
                            <div className="flex items-start text-sm text-blue-100 group">
                                <MapPin className="h-4 w-4 mr-3 mt-0.5 text-saffron" />
                                <span className="font-medium">NIT Hamirpur, HP, India</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-xs font-semibold text-blue-200 uppercase tracking-widest">
                        &copy; {currentYear} NSS NIT HAMIRPUR. All Rights Reserved.
                    </p>
                    <div className="flex items-center space-x-6">
                        <Link to="/privacy" className="text-xs font-semibold text-blue-200 hover:text-white transition-colors uppercase tracking-wider">Privacy Policy</Link>
                        <Link to="/terms" className="text-xs font-semibold text-blue-200 hover:text-white transition-colors uppercase tracking-wider">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

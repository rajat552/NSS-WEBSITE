import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronRight } from 'lucide-react';
import nssLogo from '../../assets/NSS logo.png';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Events', href: '/events' },
        { name: 'Think Tank', href: '/think-tank' },
        { name: 'Blood Request', href: '/blood-request' },
        { name: 'Team', href: '/team' },
        { name: 'Contact Us', href: '/contact' },
    ];

    const activeLinkStyle = "text-primary-600 dark:text-white font-semibold";
    const defaultLinkStyle = "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 font-medium";

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "py-3" : "py-6"}`}>
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl transition-all duration-500">
                <div className={`glass dark:bg-gray-900/40 rounded-2xl md:rounded-[2rem] px-6 py-2.5 flex items-center justify-between shadow-2xl shadow-black/5 dark:shadow-none border border-white/20 dark:border-white/5`}>
                    {/* Logo and Brand */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-3 group">
                            <div className="w-10 h-10 rounded-xl overflow-hidden bg-white dark:bg-gray-800 p-1 transition-transform group-hover:scale-110 duration-500 shadow-sm">
                                <img
                                    src={nssLogo}
                                    alt="NSS Logo"
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/f/f1/NSS_logo.png';
                                    }}
                                />
                            </div>
                            <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                                NSS <span className="text-primary-600 dark:text-primary-400">NIT Hamirpur</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <div className="flex space-x-8 items-center">
                            {navigation.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.href}
                                    className={({ isActive }) => `${isActive ? activeLinkStyle : defaultLinkStyle} text-sm`}
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>

                        <div className="h-6 w-px bg-gray-200 dark:bg-gray-800"></div>

                        <div className="flex items-center space-x-3">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors"
                                aria-label="Toggle Theme"
                            >
                                {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                            </button>
                            <Link to="/join" className="bg-gray-900 dark:bg-white text-white dark:text-black px-5 py-2 rounded-xl font-semibold text-sm hover:opacity-90 active:scale-95 transition-all flex items-center group">
                                Join Us <ChevronRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Controls */}
                    <div className="lg:hidden flex items-center space-x-2">
                        <button
                            onClick={toggleTheme}
                            className="p-2 text-gray-600 dark:text-gray-400"
                        >
                            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 text-gray-600 dark:text-gray-400"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <div className={`lg:hidden fixed inset-0 z-[-1] bg-white/90 dark:bg-gray-950/90 backdrop-blur-2xl transition-all duration-500 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <div className="flex flex-col items-center justify-center min-h-screen space-y-8 p-6">
                    {navigation.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) =>
                                `text-2xl font-bold transition-all ${isActive ? "text-primary-600 dark:text-white" : "text-gray-400"}`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                    <Link
                        to="/join"
                        onClick={() => setIsMenuOpen(false)}
                        className="w-full max-w-xs text-center bg-gray-900 dark:bg-white text-white dark:text-black py-5 rounded-2xl font-bold text-xl shadow-2xl"
                    >
                        Join Us
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;

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

    const activeLinkStyle = "text-primary-900 dark:text-primary-400 font-bold border-b-[3px] border-saffron pb-1 transform scale-105";
    const defaultLinkStyle = "text-gray-600 dark:text-gray-300 hover:text-primary-900 dark:hover:text-primary-400 font-semibold transition-all duration-300 pb-1 hover:scale-105";

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-t-4 border-saffron ${isScrolled ? "py-2 shadow-lg" : "py-3 shadow-md"}`}>
            <nav className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 transition-all duration-500">
                <div className="flex items-center justify-between">
                    {/* Logo and Brand */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-4 group">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 overflow-hidden bg-transparent transition-transform group-hover:scale-105 duration-500 drop-shadow-md">
                                <img
                                    src={nssLogo}
                                    alt="NSS Logo"
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/f/f1/NSS_logo.png';
                                    }}
                                />
                            </div>
                            <div className="flex items-center space-x-3 xl:space-x-4">
                                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-primary-900 dark:text-white uppercase drop-shadow-sm whitespace-nowrap">
                                    NSS <span className="text-saffron">NIT Hamirpur</span>
                                </span>
                                <div className="h-6 w-px bg-gray-300 dark:bg-gray-700 hidden xl:block"></div>
                                <span className="text-xs xl:text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest hidden xl:block whitespace-nowrap">
                                    Ministry of Youth Affairs & Sports
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
                        <div className="flex space-x-4 xl:space-x-8 items-center">
                            {navigation.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.href}
                                    className={({ isActive }) => `${isActive ? activeLinkStyle : defaultLinkStyle} text-sm xl:text-base whitespace-nowrap`}
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>

                        <div className="h-6 w-px bg-gray-200 dark:bg-gray-800"></div>

                        <div className="flex items-center space-x-2 xl:space-x-4">
                            <button
                                onClick={toggleTheme}
                                className="p-2 xl:p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors shadow-sm border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                                aria-label="Toggle Theme"
                            >
                                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                            </button>
                            <Link to="/join" className="bg-gradient-to-r from-primary-900 to-primary-800 dark:from-primary-600 dark:to-primary-500 text-white px-5 py-2.5 xl:px-8 xl:py-3 rounded-lg font-bold text-sm xl:text-base tracking-wide hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center shadow-md group whitespace-nowrap">
                                Join Us <ChevronRight className="ml-1 xl:ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
                                `text-xl font-bold transition-all border-b-2 pb-1 ${isActive ? "text-primary-900 dark:text-primary-400 border-saffron" : "text-gray-600 dark:text-gray-300 border-transparent"}`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                    <Link
                        to="/join"
                        onClick={() => setIsMenuOpen(false)}
                        className="w-full max-w-xs text-center bg-primary-900 dark:bg-primary-600 text-white py-4 rounded-md font-bold text-lg shadow-md uppercase tracking-wide"
                    >
                        Join Us
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;

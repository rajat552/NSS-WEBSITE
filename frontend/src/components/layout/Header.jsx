import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    const activeLinkStyle = "text-primary-600 font-semibold";
    const defaultLinkStyle = "text-gray-600 hover:text-primary-600 transition-colors duration-200";

    return (
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
                <div className="flex items-center">
                    <Link to="/" className="flex items-center space-x-2">
                        <Heart className="h-6 w-6 text-primary-600 fill-current" />
                        <span className="text-xl font-bold text-gray-900 tracking-tight">NSS</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navigation.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            className={({ isActive }) => (isActive ? activeLinkStyle : defaultLinkStyle)}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                    <button className="bg-primary-600 text-white px-5 py-2 rounded-full font-medium hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-200 active:scale-95">
                        Join Us
                    </button>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-500 hover:text-gray-900 focus:outline-none"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-5 space-y-1 transition-all duration-300">
                    {navigation.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) =>
                                `block px-3 py-3 rounded-md text-base font-medium ${isActive ? "bg-primary-50 text-primary-600" : "text-gray-600 hover:bg-gray-50 hover:text-primary-600"
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                    <div className="pt-2 px-3">
                        <button className="w-full bg-primary-600 text-white px-4 py-3 rounded-xl font-semibold shadow-lg shadow-primary-200">
                            Join Us
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;

import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="flex flex-col min-h-screen selection:bg-primary-500/20">
            <Header />
            <main className="flex-grow pt-28 pb-16">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;

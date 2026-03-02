import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen selection:bg-primary-500/20">
            <Header />
            <main className="flex-grow pt-32 pb-20 animate-in fade-in duration-1000">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;

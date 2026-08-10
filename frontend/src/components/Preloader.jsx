import React, { useState, useEffect } from 'react';
import nssLogo from '../assets/NSS logo.png'; // Adjust path if necessary

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 400); // Slight pause at 100% before smooth reveal
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-[#0a1128] to-slate-950 text-white select-none transition-opacity duration-700">
            {/* Ambient Background Glow */}
            <div className="absolute w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>

            {/* Main Content Container */}
            <div className="relative z-10 flex flex-col items-center px-4">
                {/* Glowing Logo */}
                <div className="relative mb-6 group">
                    <div className="absolute inset-0 rounded-full bg-amber-500/20 blur-xl scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                    <img 
                        src={nssLogo} 
                        alt="NSS Logo" 
                        className="relative w-36 h-36 sm:w-44 sm:h-44 object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-105"
                    />
                </div>

                {/* Typography */}
                <h1 className="text-2xl sm:text-4xl font-extrabold tracking-widest text-center uppercase drop-shadow-md">
                    NSS <span className="text-amber-500">NIT Hamirpur</span>
                </h1>
                
                <p className="text-slate-400 text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mt-2 mb-8">
                    Not Me, But You
                </p>

                {/* Soothing Glow Progress Bar */}
                <div className="w-64 sm:w-80 h-2.5 bg-slate-800/80 rounded-full p-0.5 overflow-hidden shadow-inner border border-slate-700/50 backdrop-blur-sm">
                    <div 
                        className="h-full bg-gradient-to-r from-amber-500 to-orange-400 rounded-full transition-all duration-100 ease-out shadow-[0_0_12px_rgba(245,158,11,0.8)]"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                {/* Percentage Counter */}
                <div className="mt-3 flex items-center space-x-1">
                    <span className="text-amber-400 font-mono font-bold text-lg tracking-wider">
                        {progress}
                    </span>
                    <span className="text-slate-500 font-mono text-sm">%</span>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
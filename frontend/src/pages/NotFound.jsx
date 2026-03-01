import { Link } from 'react-router-dom';
import { Home, MoveLeft, Ghost } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-6 lg:p-12 relative overflow-hidden group">
            {/* Dynamic Background Elements */}
            <div className="absolute top-20 left-20 p-24 bg-primary-100/50 blur-[200px] rounded-full animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-20 p-24 bg-indigo-100/50 blur-[200px] rounded-full animate-pulse-slow-reverse"></div>

            <div className="max-w-4xl w-full text-center space-y-16 lg:space-y-24 animate-fade-in relative z-10">
                <div className="inline-flex relative scale-75 md:scale-100 p-12 lg:p-16 rounded-[4rem] group-hover:scale-110 transition-transform duration-700 bg-gray-50/50 backdrop-blur-3xl shadow-3xl shadow-gray-100 border border-white">
                    <div className="text-9xl md:text-[180px] font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-700 to-indigo-800 tracking-tighter select-none leading-none">404</div>
                    <div className="absolute -top-12 -right-12 p-8 bg-black text-white rounded-[2rem] shadow-2xl group-hover:rotate-12 transition-transform duration-500 animate-float">
                        <Ghost className="h-12 w-12" />
                    </div>
                </div>

                <div className="space-y-8 max-w-2xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tightest leading-tight uppercase">Portal<br />Not Found</h1>
                    <div className="h-1.5 w-32 bg-gray-900 mx-auto rounded-full"></div>
                    <p className="text-gray-500 font-medium text-xl md:text-2xl leading-relaxed opacity-70 italic font-mono uppercase tracking-[0.1em]">
                        The request was routed incorrectly or the resource has been displaced to another coordinate.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12">
                    <Link
                        to="/"
                        className="group relative px-12 py-6 bg-gray-900 text-white rounded-[2.5rem] font-black text-xl shadow-[0_30px_60px_rgba(0,0,0,0.2)] hover:bg-black active:scale-[0.98] transition-all flex items-center space-x-6 overflow-hidden w-full sm:w-auto"
                    >
                        <MoveLeft className="h-6 w-6 group-hover:-translate-x-2 transition-transform" />
                        <span className="relative z-10 uppercase tracking-widest translate-x-3 group-hover:translate-x-0 transition-all duration-300">Return Home</span>
                        <div className="absolute inset-0 bg-primary-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-[2.5rem]"></div>
                    </Link>
                    <a
                        href="#"
                        className="px-12 py-6 border-2 border-gray-100 hover:border-gray-900 hover:bg-gray-50 text-gray-900 rounded-[3rem] font-bold text-lg transition-all active:scale-95 w-full sm:w-auto uppercase tracking-widest tracking-tighter"
                    >
                        Relocate Target
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NotFound;

import { Link } from 'react-router-dom';
import { Home, MoveLeft, Ghost } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-[#030711] flex items-center justify-center p-6 lg:p-12 relative overflow-hidden transition-colors duration-300">
            {/* Background Elements */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-primary-100/50 dark:bg-primary-900/10 blur-[200px] rounded-full animate-pulse-soft"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-100/50 dark:bg-indigo-900/10 blur-[200px] rounded-full animate-pulse-soft"></div>

            <div className="max-w-2xl w-full text-center space-y-12 page-enter relative z-10">
                <div className="relative inline-block">
                    <div className="text-[140px] md:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-700 to-indigo-800 dark:from-white dark:via-gray-400 dark:to-indigo-400 tracking-tighter select-none leading-none">
                        404
                    </div>
                    <div className="absolute -top-6 -right-6 p-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl shadow-xl animate-float">
                        <Ghost className="h-8 w-8" />
                    </div>
                </div>

                <div className="space-y-6">
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">Page Not Found</h1>
                    <div className="h-1.5 w-20 bg-gray-900 dark:bg-white mx-auto rounded-full"></div>
                    <p className="text-gray-500 dark:text-gray-400 font-medium text-lg leading-relaxed max-w-md mx-auto">
                        The page you're looking for doesn't exist or has been moved to a different URL.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/"
                        className="group px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-bold shadow-lg hover:shadow-xl hover:opacity-95 active:scale-95 transition-all flex items-center"
                    >
                        <MoveLeft className="h-5 w-5 mr-3 group-hover:-translate-x-1 transition-transform" />
                        Return Home
                    </Link>
                    <Link
                        to="/contact"
                        className="px-8 py-4 border-2 border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 text-gray-900 dark:text-white rounded-2xl font-bold transition-all active:scale-95 hover:bg-gray-50 dark:hover:bg-white/5"
                    >
                        Report Issue
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;

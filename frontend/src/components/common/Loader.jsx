import React from 'react';

const Loader = ({ fullScreen = false }) => {
    const loaderIcon = (
        <div className="relative inline-flex">
            <div className="w-12 h-12 rounded-full border-4 border-primary-200"></div>
            <div className="w-12 h-12 rounded-full border-4 border-primary-600 border-t-transparent animate-spin absolute top-0 left-0"></div>
        </div>
    );

    if (fullScreen) {
        return (
            <div className="fixed inset-0 z-[999] bg-white bg-opacity-95 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300">
                <div className="text-center group">
                    <div className="mb-6 relative h-20 w-20 mx-auto">
                        <div className="absolute inset-0 rounded-3xl bg-primary-100/50 animate-pulse scale-110"></div>
                        <div className="absolute inset-0 rounded-2xl bg-primary-600 animate-spin-slow duration-2000"></div>
                        <div className="absolute inset-2 bg-white rounded-xl shadow-inner flex items-center justify-center">
                            <div className="h-4 w-4 bg-primary-600 rounded-full animate-bounce"></div>
                        </div>
                    </div>
                    <p className="text-gray-900 font-black text-xl tracking-tighter uppercase animate-pulse">Initializing...</p>
                    <div className="mt-2 h-1 w-24 bg-gray-100 mx-auto rounded-full overflow-hidden">
                        <div className="h-full bg-primary-600 animate-loading-bar origin-left"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center py-12">
            {loaderIcon}
        </div>
    );
};

export default Loader;

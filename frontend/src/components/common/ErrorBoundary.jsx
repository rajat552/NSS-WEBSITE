import React, { Component } from 'react';
import { ShieldAlert, RefreshCcw } from 'lucide-react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }

    handleReset = () => {
        this.setState({ hasError: false, error: null });
        window.location.href = '/';
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-white flex items-center justify-center p-6 lg:p-12 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-red-50/50 backdrop-blur-md z-[-1]"></div>
                    <div className="max-w-xl w-full text-center space-y-12 animate-fade-in relative">
                        <div className="inline-flex p-8 rounded-[3rem] bg-red-500 text-white shadow-2xl shadow-red-200 hover:rotate-6 transition-all ring-[12px] ring-red-100/50">
                            <ShieldAlert className="h-16 w-16" />
                        </div>
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tightest leading-tight">System<br />Anomaly</h1>
                            <p className="text-gray-500 font-medium text-lg max-w-md mx-auto leading-relaxed">
                                Something went wrong in our neural network. Don't worry, your data is safe.
                            </p>
                            <div className="bg-white/50 border border-red-100 p-4 rounded-3xl backdrop-blur-sm shadow-xl shadow-red-50/50">
                                <p className="text-red-500 font-mono text-sm line-clamp-2 italic uppercase tracking-wider">
                                    {this.state.error?.toString() || "UNKNOWN_ERROR_CODE_0x001"}
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={this.handleReset}
                            className="group relative px-10 py-5 bg-gray-900 text-white rounded-[2rem] font-bold text-lg shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:bg-black active:scale-95 transition-all overflow-hidden inline-flex items-center space-x-4"
                        >
                            <span className="relative z-10 uppercase tracking-widest">Restart System</span>
                            <RefreshCcw className="h-5 w-5 group-hover:rotate-180 transition-transform duration-700 relative z-10" />
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

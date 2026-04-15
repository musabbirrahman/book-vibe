import React from 'react';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 text-center relative">
                
                {/* 404 Graphic Area */}
                <div className="relative inline-block">
                    <h1 className="text-9xl font-extrabold text-slate-900 tracking-widest">
                        404
                    </h1>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 px-3 py-1 text-sm font-semibold text-white rounded rotate-12 shadow-lg border-2 border-white">
                        Page Not Found
                    </div>
                </div>

                {/* Text Content */}
                <div className="mt-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-3">
                        Oops! You seem to be lost.
                    </h2>
                    <p className="text-base text-slate-600 mb-8">
                        The page you're looking for doesn't exist, has been moved, or is temporarily unavailable.
                    </p>
                </div>

                {/* Call to Action */}
                <div>
                    <a
                        href="/"
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 shadow-md"
                    >
                        {/* Left Arrow SVG */}
                        <svg 
                            className="w-5 h-5 mr-2" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                        Back to Homepage
                    </a>
                </div>
                
            </div>
        </div>
    );
};

export default ErrorPage;
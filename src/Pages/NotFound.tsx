
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-secondary px-4">
            <div className="text-center max-w-md">
                {/* Animated 404 number */}
                <div className="relative mb-8">
                    <h1 className="text-9xl font-bold text-primary opacity-20">404</h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-primary/10 rounded-full animate-pulse"></div>
                    </div>
                </div>
                
                {/* Error message */}
                <h2 className="text-3xl font-bold text-heading mb-4">
                    Page Not Found
                </h2>
                
                <p className="text-text mb-8 leading-relaxed">
                    Oops! The page you're looking for doesn't exist or has been moved.
                </p>
                
                {/* Home button */}
                <Link 
                    to="/" 
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-text-s px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                    <svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                        />
                    </svg>
                    Back to Home
                </Link>
                
                {/* Optional decorative elements */}
                <div className="mt-12 text-xs text-text/50">
                    Error 404 - Resource not found
                </div>
            </div>
        </div>
    );
};

export default NotFound;

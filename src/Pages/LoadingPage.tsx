import { useEffect, useState } from 'react';

const LoadingPage = ({ text = "Loading..." }) => {
    const [dots, setDots] = useState('');

    // Animated dots effect
    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => prev.length >= 3 ? '' : prev + '.');
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-secondary px-4">
            <div className="text-center max-w-md">
                {/* Animated spinner */}
                <div className="relative mb-8">
                    <div className="w-24 h-24 mx-auto relative">
                        {/* Outer ring */}
                        <div className="absolute w-24 h-24 rounded-full border-4 border-primary/20"></div>

                        {/* Spinning ring - using Tailwind animation */}
                        <div className="absolute w-24 h-24 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>

                        {/* Inner pulse */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 bg-primary/20 rounded-full animate-ping"></div>
                        </div>

                        {/* Center dot */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-3 h-3 bg-primary rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Loading text with animated dots */}
                <h2 className="text-2xl font-semibold text-heading mb-2">
                    {text}
                    <span className="inline-block w-8 text-left">{dots}</span>
                </h2>

                <p className="text-text text-sm">
                    Please wait while we load your content
                </p>

            </div>
        </div>
    );
};

export default LoadingPage;
// const LoadingPage = () => {
//     return (
//         <div className="min-h-screen flex items-center justify-center bg-secondary px-4">
//             <div className="text-center">
//                 {/* Bouncing dots loader - pure Tailwind */}
//                 <div className="flex gap-3 justify-center mb-6">
//                     <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
//                     <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
//                     <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
//                 </div>
                
//                 <h2 className="text-xl font-medium text-heading animate-pulse">
//                     Loading...
//                 </h2>
                
//                 <p className="text-text text-sm mt-2">
//                     Please wait
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default LoadingPage;

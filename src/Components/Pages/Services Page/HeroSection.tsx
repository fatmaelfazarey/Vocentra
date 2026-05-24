// import React from 'react'
// import Button from '../../MY-UI/Button'
// import { assets } from '../../../assets/assets'
// import woman from '../../../assets/woman.svg'

// const HeroSection = () => {
//     return (
//         <div className=" bg-secondary">
//             <div className="relative max-w-7xl mx-auto px-2 ">


//                 <div className='flex md:flex-row flex-col gap-5 justify-between items-center'>
//                     <div className="flex gap-3 flex-col max-w-3xl ">
//                         <p className='text-primary text-4xl font-medium'>Tailored Outsourcing Solutions for Your Business</p>
//                         <p className='text-text text-base'>From Medicare call handling to CRM management, we provide efficient and reliable services designed to help your business grow.</p>
//                         {/* buttons */}
//                         <div className="flex flex-col sm:flex-row  gap-3 w-full ">
//                             <Button
//                                 label="Schedule a Call"
//                                 title="Schedule a Call"
//                                 icon={assets.Headset}
//                                 theme="second"
//                             />
//                             <Button
//                                 label="Get in Touch"
//                                 title="Get in Touch"
//                                 icon={assets.RightArrow}
//                                 theme="primary"
//                             />
//                         </div>
//                     </div>
//                     <div>
//                         <img src={woman} />
//                     </div>

//                 </div>
//             </div>

//         </div>
//     )
// }

// export default HeroSection

import React from 'react'
import Button from '../../MY-UI/Button'
import { assets } from '../../../assets/assets'
import woman from '../../../assets/woman.svg'

const HeroSection = () => {
    return (
        <section className="relative bg-secondary overflow-hidden flex items-center ">

            <div className="relative z-10 w-full max-w-7xl mx-auto px-2  ">
                <div className="flex flex-col md:flex-row items-center ">

                    <div className="flex-1 flex flex-col gap-6 text-center md:text-left py-10  ">
                        <h1 className=" font-medium text-3xl sm:text-4xl lg:text-5xl xl:text-6xl  text-primary leading-[1.1] tracking-tight">
                            Tailored Solutions{' '}
                            <span className="relative inline-block">
                                for Your
                                <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-primary/30" />
                            </span>
                            {' '}Business
                        </h1>

                        {/* body */}
                        <p className="text-text text-base  leading-relaxed max-w-lg mx-auto md:mx-0">
                            From Medicare call handling to CRM management, we provide efficient
                            and reliable services designed to help your business grow.
                        </p>




                        {/* buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start  items-center ">
                            <Button
                                label="Schedule a Call"
                                title="Schedule a Call"
                                icon={assets.Headset}
                                theme="second"
                            />
                            <Button
                                label="Get in Touch"
                                title="Get in Touch"
                                icon={assets.RightArrow}
                                theme="primary"
                            />
                        </div>



                    </div>


                    <div className="flex-shrink-0 relative flex items-end justify-center 
                          w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[440px]
                          mx-auto md:mx-0"
                        style={{ transform: 'translateY(2px)' }}>

                        {/* image glow base */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-1/2
                            bg-primary/10 rounded-full blur-3xl" />

                        {/* floating badge — top left */}
                        <div className="absolute top-8 -left-4 sm:-left-8
                            flex items-center gap-2 px-3 py-2 rounded-xl
                            bg-white shadow-lg shadow-black/8 border border-black/5
                            z-10 animate-[float_3s_ease-in-out_infinite]">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <span className="text-primary text-sm">✓</span>
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-[11px] font-bold text-gray-800">Trusted Partner</span>
                                <span className="text-[10px] text-gray-400 mt-0.5">Since 2015</span>
                            </div>
                        </div>

                        {/* floating badge — bottom right */}
                        <div className="absolute bottom-12 -right-4 sm:-right-8
                            flex items-center gap-2 px-3 py-2 rounded-xl
                            bg-white shadow-lg shadow-black/8 border border-black/5
                            z-10 animate-[float_3s_ease-in-out_infinite_1.5s]">
                            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                                <span className="text-emerald-600 text-sm">★</span>
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-[11px] font-bold text-gray-800">98% Satisfaction</span>
                                <span className="text-[10px] text-gray-400 mt-0.5">Verified reviews</span>
                            </div>
                        </div>

                        {/* image */}
                        <img
                            src={woman}
                            alt="Outsourcing professional"
                            className="relative z-[1] w-full h-auto object-contain drop-shadow-xl
                         max-h-[420px] md:max-h-[520px]"
                        />
                    </div>

                </div>
            </div>

            {/* float keyframe */}
            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
      `}</style>

        </section>
    )
}

export default HeroSection
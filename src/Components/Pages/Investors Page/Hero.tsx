import Button from '../../MY-UI/Button'
import { assets } from '../../../assets/assets'
import Investors from '../../../assets/Group 11.svg'
import SectionContainer from '../../shared/SectionContainer'

const Hero = () => {
    return (
        // <section className="py-10 relative bg-secondary overflow-hidden flex items-center -z-20">
        <SectionContainer bgColor='secondary'>
            <div className="relative z-10 w-full max-w-7xl mx-auto px-2  ">
                <div className="flex flex-col md:flex-row items-center ">
                    <div className="flex-1 flex flex-col gap-6 text-center md:text-left py-10  ">
                        <h1 className=" font-medium text-3xl sm:text-4xl lg:text-5xl xl:text-6xl  text-primary leading-[1.1] tracking-tight">
                            Invest in the Future of Remote Contact Centers
                        </h1>

                        {/* body */}
                        <p className="text-text text-base  leading-relaxed max-w-lg mx-auto md:mx-0">
                            From Medicare call handling to CRM management, we provide efficient and reliable services designed to help your business grow.
                        </p>

                        {/* buttons */}
                        <div >
                            <Button
                                label="Schedule a Call"
                                title="Add new item"
                                icon={assets.Headset}
                                theme={'second'}
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

                        {/* image */}
                        {/* <div>
                            {Investors}
                        </div> */}
                        <img
                            src={Investors}
                            alt="Outsourcing professional"
                            className="relative z-[1] w-full h-auto object-contain drop-shadow-xl
                         max-h-[420px] md:max-h-[520px]"
                        />
                    </div>

                </div>
            </div>
        </SectionContainer>



        // </section>

    )
}

export default Hero

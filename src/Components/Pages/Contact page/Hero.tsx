import React from 'react'
import contact from '../.../../../../assets/Contact.svg'
import Button from '../../MY-UI/Button'
import { assets } from '../../../assets/assets'
import SectionContainer from '../../shared/SectionContainer'

const HeroSection = () => {
    return (
        <SectionContainer bgColor={''}>

            {/* <div className='pb-10 px-2 max-w-7xl mx-auto flex  flex-col md:flex-row flex-wrap gap-2.5 justify-between'> */}

            <div className="flex-1 flex flex-col  text-center md:text-left justify-center items-center ">
                <img src={contact} className='' />
                <div className='flex-1 flex flex-col  text-center md:text-left justify-center items-center gap-3'>
                    <h1 className=" font-medium text-3xl sm:text-4xl lg:text-5xl xl:text-6xl  text-primary leading-[1.1] tracking-tight">
                        Let’s Connect and Grow Together
                    </h1>

                    <p className="text-text text-base  leading-relaxed">
                        Our team is ready to answer your questions, discuss partnerships, or guide you through our services.
                    </p>

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

            </div>

            {/* </div> */}
        </SectionContainer>
    )
}

export default HeroSection

import React from 'react'
import SectionContainer from '../../shared/SectionContainer'
import { assets } from '../../../assets/assets'
import Button from '../../MY-UI/Button'

const Hero = () => {
    return (
        <SectionContainer bgColor={'secondary'}>
            <div className="-z-20 flex-1 flex flex-col  text-center md:text-left justify-center items-center ">

                <div className='flex-1 flex flex-col  text-center md:text-left justify-center items-center gap-3'>
                    <h1 className=" font-medium text-3xl sm:text-4xl lg:text-5xl xl:text-6xl  text-primary leading-[1.1] tracking-tight">
                        Join Our Growing Remote Team
                    </h1>

                    <p className="text-text text-base  leading-relaxed">
                        At Vocentra, we’re redefining how contact centers operate — remotely, efficiently, and with purpose.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start  items-center ">

                        <Button
                            label="View Open Positions"
                            title="View Open Positions"
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

export default Hero

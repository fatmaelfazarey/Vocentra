import React from 'react'
import SectionTitle from '../../MY-UI/SectionTitle'
import { Four, One, Thress, Two } from '../../../assets/SvgImage'
import SectionContainer from '../../shared/SectionContainer'

const WhyAttractive = () => {
    const Investment = [
        {
            icon: One,
            title: 'Proven Market Demand',
            description: 'The U.S. Medicare industry is growing fast, with continuous demand for qualified leads.'
        },
        {
            icon: Two,
            title: 'Remote-First Scalability',
            description: 'Our distributed model allows flexible scaling without heavy infrastructure costs.'
        }, {
            icon: Thress,
            title: 'Experienced Team',
            description: 'Backed by professionals with expertise in customer service and sales conversion.'
        },
        {
            icon: Four,
            title: 'Experienced Team',
            description: 'Backed by professionals with expertise in customer service and sales conversion'
        },
    ]
    return (
        // <div className="py-10">

        //     <div className="relative max-w-7xl mx-auto px-2 ">
        <SectionContainer >
            <div className=" flex flex-col gap-5 justify-start">
                <SectionTitle label="Why Vocentra Is an Attractive Investment ?" line={true} />
                <div className='grid md:grid-cols-2 grid-cols-1  justify-between items-center gap-7.5 w-full'>
                    {Investment.map((item, index) => (
                        <div key={index} className='flex flex-row justify-between items-center p-5 bg-linear-to-r from-white to-secondary hover:to-primary rounded-lg    shadow-(--custom-shadow)   transition-all duration-300 ease-in-out
            group hover:scale-[1.02] hover:shadow-lg  '>

                            <div className='flex  flex-col text-start gap-2.5'>

                                <p className='text-xl text-primary font-semibold'>{item.title}</p>
                                <span className='text-text text-base'>{item.description}</span>
                            </div>
                            <div>{item.icon}</div>
                        </div>

                    ))}
                </div>
            </div>
        </SectionContainer>

        //     </div>
        // </div>
    )
}

export default WhyAttractive

import React from 'react'
import Card from '../../MY-UI/Card'
import SectionTitle from '../../MY-UI/SectionTitle'
import { Efficiency, Transparency, Trust } from '../../../assets/SvgImage'
import SectionContainer from '../../shared/SectionContainer'

const ValuesSection = () => {
    const Values = [
        {
            icon: Trust,
            title: 'Trust',
            description: 'We build lasting partnerships by being reliable and consistent'
        },
        {
            icon: Transparency,
            title: 'Transparency',
            description: 'Clear communication and honest reporting at every step'
        },
        {
            icon: Efficiency,
            title: 'Efficiency',
            description: 'Fast, scalable solutions without compromising quality.'
        }
    ]
    return (
        <SectionContainer >
            <div className=" flex flex-col gap-5 justify-center items-center">
                <SectionTitle label="Our Values" line={true} />
                <div className='flex md:flex-row flex-col   justify-between items-center gap-7.5 w-full'>
                    <Card itemArray={Values} />
                </div>
            </div>
        </SectionContainer>
    )
}

export default ValuesSection

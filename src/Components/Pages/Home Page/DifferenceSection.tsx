import React from 'react'
import SectionTitle from '../../MY-UI/SectionTitle'
import { Reliable, Remote, Scalable } from '../../../assets/SvgImage'
import Card from '../../MY-UI/Card'
import SectionContainer from '../../shared/SectionContainer'

const DifferenceSection = () => {
    const Difference = [
        {
            icon: Remote,
            title: 'Remote First',
            description: 'Work from anywhere, anytime.'
        },
        {
            icon: Scalable,
            title: 'Scalable',
            description: 'Grows with your business.'
        },
        {
            icon: Reliable,
            title: 'Reliable',
            description: 'Service you can trust.'
        }
    ]
    return (
        <SectionContainer bgColor={'secondary'}>

            <div className=" flex flex-col gap-5 justify-center items-center">
                <SectionTitle label="Why we’re different" line={true} />
                <div className='flex md:flex-row flex-col   justify-between items-center gap-7.5 w-full'>
                    <Card itemArray={Difference} />
                </div>
            </div>
        </SectionContainer>

    )
}

export default DifferenceSection

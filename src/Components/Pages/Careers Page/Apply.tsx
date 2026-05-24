import React from 'react'
import SectionContainer from '../../shared/SectionContainer'
import SectionTitle from '../../MY-UI/SectionTitle'
import ApplyForm from './ApplyForm'

const Apply = () => {
    return (
        <SectionContainer bgColor='secondary'>
            <div className="flex flex-col gap-10">
                <SectionTitle label="Apply Now" line={true} />
                <div>
                    <ApplyForm/>
                </div>
            </div>
        </SectionContainer>
    )
}

export default Apply

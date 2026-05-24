import SectionTitle from '../../MY-UI/SectionTitle'
import Card from '../../MY-UI/Card'
import { CRM, Inbound, Support, Warm } from '../../../assets/SvgImage'
import SectionContainer from '../../shared/SectionContainer'

const ServicesSection = () => {
    const Services = [
        {
            icon: Inbound,
            title: 'Inbound Medicare Call Handling',
            description: 'Coverage help, billing queries, claims, enrollment.Benefit We handle complex calls with licensed professionals.'
        },
        {
            icon: Support,
            title: 'Customer Support Outsourcing',
            description: 'Helping other industries with inbound support. '
        },
        {
            icon: Warm,
            title: 'Warm Transfers (Future)',
            description: 'We don’t just generate leads — we qualify them. Our agents engage with prospects to ensure they are the right fit, then transfer them seamlessly to your sales team, saving you time and boosting conversion rates.'
        },
        {
            icon: CRM,
            title: 'CRM & Dialer Management',
            description: 'Technology that works for you. We manage CRM integrations and dialer systems to ensure smooth workflows, real-time reporting, and optimized agent productivity.'
        }
    ]
    return (
        <SectionContainer >
            <div className=" flex flex-col gap-5 justify-center items-center">
                <SectionTitle label="Our services" line={true} />
                <div className='grid md:grid-cols-2 grid-cols-1  justify-between items-center gap-7.5 w-full'>
                    <Card itemArray={Services} />
                </div>
            </div>
        </SectionContainer>
    )
}

export default ServicesSection

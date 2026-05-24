import { Mission, Vision } from "../../../assets/SvgImage"
import HorizontalCard from "../../MY-UI/HorizontalCard"
import SectionContainer from "../../shared/SectionContainer"

const MissionSection = () => {
    const Gools = [
        {
            icon: Mission,
            title: 'Mission',
            description: 'Our mission is to help U.S. insurance agents build trust and close more deals by providing professional, reliable, and scalable remote calling services that connect them with qualified Medicare prospects.'
        },
        {
            icon: Vision,
            title: 'Vision',
            description: 'Grows We envision a future where geography is no barrier to meaningful connections. Vocentra aims to become the most trusted remote contact center partner for businesses worldwide. your business.'
        }
    ]
    return (
        <SectionContainer>
            <div className='flex flex-col  justify-between items-center gap-7.5 w-full'>
                <HorizontalCard itemArray={Gools} />
            </div>
        </SectionContainer>
    )
}

export default MissionSection

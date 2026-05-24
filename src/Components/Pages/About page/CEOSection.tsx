import CEO from '../../../assets/ceo.svg'
import SectionContainer from '../../shared/SectionContainer'
interface CEOProps {
    image: string,
    name: string,
    story: string,
    story2?: string
}
const CEOSection = () => {
    const ceoStory: CEOProps = {
        image: CEO,
        name: "Nouman Safder",
        story: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
        story2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting."
    }
    return (
        <SectionContainer bgColor={'secondary'}>
            <div className='flex gap-5 md:flex-row flex-col justify-center items-center'>
                <img src={ceoStory.image} className='w-full md:max-w-100 rounded-bl-[90px] rounded-t-[90px]' />
                <div className='flex flex-col gap-2'>
                    <span className='text-3xl font-light text-heading'>CEO of Vocentra</span>
                    <p className='text-[2.5rem] font-medium text-primary'>{ceoStory.name}</p>
                    <p className='text-text text-base leading-7 mb-2'>{ceoStory.story}</p>
                    <p className='text-text text-base leading-7'>{ceoStory?.story2}</p>
                </div>
            </div>
        </SectionContainer>
    )
}

export default CEOSection

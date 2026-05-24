
import { border } from '../../../assets/SvgImage'
import Button from '../../MY-UI/Button'
import { assets } from '../../../assets/assets'
import SectionContainer from '../../shared/SectionContainer'

const PartnerWithUs = () => {
    return (
        <SectionContainer bgColor={'secondary'}>
            {/* <div className="py-10 bg-secondary"> */}
            <div className="relative  ">
            <div className="absolute scale-y-[-1] left-0 bottom-0 w-fit">
                {border}
            </div>
            <div className="px-10 py-10 md:py-auto flex flex-col gap-2.5 justify-center items-end">
                <p className="text-text text-xl">
                    At Vocentra, we believe growth comes through strong partnerships.<br /> We welcome collaborations with U.S. insurance agencies, tech providers, and investors who share our vision of a more efficient, remote-driven contact center model.
                </p>
                <Button
                    label="Get Our Pitch Deck"
                    title="Get Our Pitch Deck"
                    icon={assets.Download}
                    theme="second"
                />
            </div>
            <div className="rotate-180 scale-y-[-1] absolute right-0 top-0 w-fit">
                {border}
            </div>
            {/* {/* </div> */}
            </div> 
        </SectionContainer>
    )
}

export default PartnerWithUs

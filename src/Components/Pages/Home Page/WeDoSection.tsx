import { border } from "../../../assets/SvgImage"
import SectionTitle from "../../MY-UI/SectionTitle"
import SectionContainer from "../../shared/SectionContainer"

const WeDoSection = () => {
    return (
        <SectionContainer bgColor={''}>
            <div className="relative">
                <div className="absolute left-0 top-0 w-fit">
                {border}
            </div>
            <div className="px-10 py-10 md:py-auto flex flex-col gap-2.5 justify-center items-center">
                <SectionTitle label="What we do..?" />
                <p className="text-text text-xl">At <span className="font-extrabold">VOCENTRA</span>, we specialize in connecting businesses with their customers through professional remote call center services.From outbound calling and warm transfers to customer engagement and sales support, we ensure every interaction builds trust and drives results.</p>
            </div>
            <div className="rotate-180 absolute right-0 bottom-0 w-fit">
                {border}
            </div>
            </div>
        </SectionContainer>
    )
}

export default WeDoSection

import Button from '../../MY-UI/Button'
import { assets } from '../../../assets/assets'
import SectionContainer from '../../shared/SectionContainer'

const CTASection = () => {
    return (
        <SectionContainer bgColor={'secondary'}>
            <div className="relative z-10  flex flex-col items-center text-center gap-6">

                {/* eyebrow badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/15 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-semibold text-primary/80 tracking-widest uppercase">
                        Let's work together
                    </span>
                </div>

                {/* headline */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary leading-tight tracking-tight">
                    Discover how our values{' '}
                    <span className="relative inline-block">
                        shape
                        {/* underline accent */}
                        <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-secondary/70" />
                    </span>
                    {' '}every partnership
                </h2>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
                    <Button
                        label="Schedule a Call"
                        title="Schedule a Call"
                        icon={assets.Headset}
                        theme="second"
                    />
                    <Button
                        label="Get in Touch"
                        title="Get in Touch"
                        icon={assets.RightArrow}
                        theme="primary"
                    />
                </div>

                {/* trust micro-copy */}
                <p className="text-text text-xs">
                    No commitment required · Typically respond within 24 hours
                </p>
            </div>
        </SectionContainer>
    )
}

export default CTASection
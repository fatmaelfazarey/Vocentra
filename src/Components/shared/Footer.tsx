
import { assets } from '../../assets/assets'
import IconText from '../MY-UI/IconText'
import { CiLocationOn, CiMail, CiMobile1 } from 'react-icons/ci'
import SocialMediaLinks from './SocialMediaLinks'
import { Arrow, footer_Line } from '../../assets/SvgImage'
import DeveloperSignature from '../DeveloperSignature'

export default function Footer() {
    return (
        <div className='bg-text px-2'>
            <div className="max-w-7xl mx-auto relative  flex gap-5 w-full justify-center sm:justify-between items-center  flex-wrap  flex-col py-7.5 ">
                <div className='w-full flex flex-col lg:flex-row flex-wrap justify-center md:justify-between items-center '>
                    <div>
                        <img src={assets.Logo} alt="Logo" className="h-12 w-auto" />
                    </div>
                    <div className='flex gap-4 flex-wrap justify-center items-center'>
                        <IconText
                            icon={CiLocationOn}
                            label="Remote-based (Pakistan)"
                            navigateTo="mailto:vocentraofficial@gmail.com"
                        />
                        <IconText
                            icon={CiMobile1}
                            label="vocentraofficial@gmail.com"
                            navigateTo="mailto:vocentraofficial@gmail.com"
                        />
                        <IconText
                            icon={CiMail}
                            label="+201234567890"
                            navigateTo="tel:+201234567890"
                        />
                    </div>
                    <SocialMediaLinks />
                </div>
                <div>
                    {footer_Line}
                </div>
                <DeveloperSignature />
                <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="absolute -translate-y-1/2 top-0 right-0 
                    w-16 h-16 bg-primary rounded-full scrollShadow 
                    flex items-center justify-center 
                      transition-all duration-300 ease-in-out
             hover:scale-[1.02] hover:shadow-lg">{Arrow}</div>
            </div>
        </div>
    )
}

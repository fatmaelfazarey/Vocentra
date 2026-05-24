import IconText from '../MY-UI/IconText'
import SocialMediaLinks from './SocialMediaLinks';
import { CiMail, CiMobile1 } from 'react-icons/ci';

const TopHeader = () => {

    return (
        <div className='bg-text '>
            <div className="max-w-7xl mx-auto  flex gap-2 w-full justify-center sm:justify-between items-center  flex-wrap  flex-row py-2.5 px-2">
                <div className='flex gap-4 flex-wrap justify-center items-center'>
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

        </div>

    )
}

export default TopHeader

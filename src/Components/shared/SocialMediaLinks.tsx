import { LogIn } from 'lucide-react'
import { socialMedia } from '../../Data'
import Icon from '../MY-UI/Icon'
import { Link } from 'react-router-dom'

const SocialMediaLinks = () => {
    return (
        <div className="flex items-center">
            {socialMedia.map((item, index) => (
                <div key={index} className="flex items-center">
                    <Icon icon={item.icon} link={item.link} />

                    {/* {index !== socialMedia.length - 1 && ( */}
                    <span className="border-[0.5px] border-[#A0A0A0] h-5"></span>
                    {/* )} */}
                </div>

            ))}
            <div key='-1' className="flex items-center">
                <Icon icon={LogIn} link={'/login'} />
            </div>
        </div>
    )
}

export default SocialMediaLinks

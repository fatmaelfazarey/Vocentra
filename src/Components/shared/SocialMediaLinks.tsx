import { socialMedia } from '../../Data'
import Icon from '../MY-UI/Icon'

const SocialMediaLinks = () => {
    return (
        <div className="flex items-center">
            {socialMedia.map((item, index) => (
                <div key={index} className="flex items-center">
                    <Icon icon={item.icon} link={item.link} />

                    {index !== socialMedia.length - 1 && (
                        <span className="border-[0.5px] border-[#A0A0A0] h-5"></span>
                    )}
                </div>
            ))}
        </div>
    )
}

export default SocialMediaLinks

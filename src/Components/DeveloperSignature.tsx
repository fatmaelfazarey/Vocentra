import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaWhatsapp, FaGithub, FaGoogle } from "react-icons/fa6";
import Icon from './MY-UI/Icon';

const DeveloperSignature = () => {
    const DeveloperSocialMedia = [
        { icon: FaFacebookF, link: "#" },
        { icon: FaLinkedinIn, link: "https://www.linkedin.com/in/fatma-mohamed58/" },
        { icon: FaGithub, link: "https://github.com/fatmaelfazarey" },
        { icon: FaGoogle, link: "fatmamohamed58001@gmail.com" },
        { icon: FaWhatsapp, link: "+201156267730" },
        { icon: FaInstagram, link: "#" },
        { icon: FaTwitter, link: "#" },
    ]
    return (
        <div className='flex flex-col justify-center items-center gap-2.5'>
            <p className="text-secondary text-sm font-light">Designed and developed with <span className='text-primary hover:text-primary/80'>Fatma Mohammed</span></p>
            <div className="flex items-center">
                {DeveloperSocialMedia.map((item, index) => (
                    <div key={index} className="flex items-center">
                        <Icon icon={item.icon} link={item.link} />

                        {index !== DeveloperSocialMedia.length - 1 && (
                            <span className="border-[0.5px] border-[#A0A0A0] h-5"></span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DeveloperSignature

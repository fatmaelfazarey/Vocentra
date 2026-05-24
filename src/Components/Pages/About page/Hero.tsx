
import { assets } from '../../../assets/assets'

const Hero = () => {
    return (
        <div className="relative  flex flex-col justify-center items-center  px-2 ">
            <div className="absolute inset-0 bg-gradient-to-t from-[#555555]/50 to-white -z-10"></div>
            <p className='text-2xl font-medium text-text text-center max-w-4xl py-20'>At Vocentra, our remote team works together to connect U.S. insurance agents with qualified Medicare prospects.<span className='text-primary'> Behind every call is a dedicated professional building trust and creating real opportunities.</span></p>
            <div className=' w-full  overflow-hidden  '>
                <img src={assets.Team} className='w-[120%] md:w-2/3 scale-115 md:scale-110 mx-auto' />
            </div>
        </div>
    )
}

export default Hero

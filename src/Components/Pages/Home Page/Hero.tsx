
import Button from '../../MY-UI/Button'
import { assets } from '../../../assets/assets'

const Hero = () => {
  return (
    <div
      className="relative  flex flex-col justify-center items-center py-45 px-2 bg-cover bg-center "
      style={{
        backgroundImage: `url(${assets.confident_call_center})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 to-black/50"></div>
      <div className="relative max-w-7xl mx-auto px-2 z-10 flex flex-col gap-12.5 justify-center items-center text-center ">
        <h1 className='text-white text-5xl'>Your Trusted Partner in Medicare Inbound Support</h1>
        <p className='text-secondary text-2xl'>Connecting U.S. insurance agents with qualified Medicare prospects through professional support.</p>
        <div className="flex gap-7.5 mx-auto w-full justify-center items-center flex-col md:flex-row">
          <Button
            label="Schedule a Call"
            title="Add new item"
            icon={assets.Headset}
            theme={'second'}
          />
          <Button
            label="Get in Touch"
            title="Get in Touch"
            icon={assets.RightArrow}
            theme={'primary'}
          />
        </div>
      </div>


    </div>
  )
}

export default Hero

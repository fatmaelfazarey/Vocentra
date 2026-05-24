import CEOSection from "../Components/Pages/About page/CEOSection"
import CTASection from "../Components/Pages/About page/CTASection"
import Hero from "../Components/Pages/About page/Hero"
import MissionSection from "../Components/Pages/About page/MissionSection"
import ValuesSection from "../Components/Pages/About page/ValuesSection"


const AboutPage = () => {
  return (
    <div>
      <Hero/>
      <MissionSection />
      <CEOSection/>
      <ValuesSection/>
      <CTASection/>
    </div>
  )
}

export default AboutPage

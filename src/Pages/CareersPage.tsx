import React from 'react'
import Hero from '../Components/Pages/Careers Page/Hero'
import OpeningsJob from '../Components/Pages/Careers Page/OpeningsJob'
import AllJobs from '../Components/Pages/Careers Page/AllJobs'
import Apply from '../Components/Pages/Careers Page/Apply'
import useJob from '../hooks/useJob'

const CareersPage = () => {
    const { jobs
  } = useJob();
  console.log(jobs)
  return (
    <div>
      <Hero/>
      <OpeningsJob/>
      <Apply/>
    </div>
  )
}

export default CareersPage

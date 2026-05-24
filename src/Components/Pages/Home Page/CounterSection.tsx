import SectionContainer from "../../shared/SectionContainer"

const CounterSection = () => {
    return (
        <SectionContainer bgColor={'primary'}>
            <div className="max-w-7xl mx-auto px-2 flex  text-white py-5">
                <div className='flex flex-1 flex-col gap-5 justify-center items-center text-center'>
                    <p className='text-5xl font-semibold'>100%</p>
                    <p className='text-xl'>Quick Stats Strip</p>
                </div>
                <div className=' w-0.5 bg-white self-stretch rounded-2xl'></div>
                <div className='flex flex-col flex-1  gap-5 justify-center items-center text-center'>
                    <p className='text-5xl font-semibold'>73+</p>
                    <p className='text-xl'>Clients served</p>
                </div>
            </div>
        </SectionContainer>
    )
}

export default CounterSection

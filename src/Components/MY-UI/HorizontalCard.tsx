import { type ReactNode } from 'react'
interface CardProps {
    itemArray:
    {
        icon: ReactNode,
        title: string,
        description: string
    }[]
}
const HorizontalCard = ({ itemArray }: CardProps) => {
    return (
        <>
            {itemArray.map((item, index) => (
                <div key={index} className={`
                w-full md:flex-row flex-col flex justify-center items-center gap-5 rounded-2xl group  transition-all duration-300 ease-in-out  hover:bg-secondary/50
                ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                    <div className="
    text-primary             
    group-hover:text-secondary    
    bg-secondary
    group-hover:bg-primary
    p-7 rounded-2xl
    md:w-auto w-full flex justify-center
    transition-colors duration-300
">
                        {item.icon}
                    </div>
                    <div className="flex flex-col p-5">
                        <p className='text-xl text-primary font-semibold'>{item.title}</p>
                        <span className='text-text text-base'>{item.description}</span>
                    </div>

                </div>
            ))}
        </>
    )
}

export default HorizontalCard

import { type ReactNode } from 'react'

interface CardProps {
    itemArray:
    {
        icon: ReactNode,
        title: string,
        description: string
    }[]
}
const Card = ({ itemArray }: CardProps) => {
    return (
        <>
            {itemArray.map((item, index) => (
                <div key={index} className='p-5 w-full  text-center flex flex-col justify-center items-center gap-2.5 bg-white shadow-(--custom-shadow) rounded-2xl hover:bg-secondary  transition-all duration-300 ease-in-out
                hover:scale-[1.02] hover:shadow-lg' >
                    <div>{item.icon}</div>
                    <p className='text-xl text-primary font-semibold'>{item.title}</p>
                    <span className='text-text text-base'>{item.description}</span>
                </div>
            ))}
        </>
    )
}

export default Card

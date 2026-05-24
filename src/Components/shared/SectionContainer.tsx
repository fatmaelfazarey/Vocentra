import { type ReactNode } from 'react'

interface SectionContainerProps {
    children: ReactNode
    bgColor?: string;
}
const SectionContainer = ({ children, bgColor }: SectionContainerProps) => {
    return (
        <section className={`py-20 bg-${bgColor} relative`}>
            <div className=" max-w-7xl mx-auto px-2 ">
                {children}
            </div>
        </section>
    )
}

export default SectionContainer

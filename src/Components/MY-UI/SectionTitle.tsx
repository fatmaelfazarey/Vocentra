import React from 'react'
import { Line } from '../../assets/SvgImage';
interface SectionTitleProps {
    label: string;
    line?: boolean;
}
const SectionTitle = ({ label, line }: SectionTitleProps) => {
    return (
        <div className='text-center text-5xl font-semibold text-primary flex flex-col justify-center items-center gap-2.5'>
            <p>{label}</p>
            {line ? Line : ''}
        </div>
    )
}

export default SectionTitle

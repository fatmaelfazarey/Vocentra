import type { ReactNode } from "react";

interface ButtonProps {
    label: string;
    icon?: string | ReactNode;
    title?: string;
    theme: 'primary' | 'second' | 'gray';
}

const Button = ({ label, icon, title, theme }: ButtonProps) => {
    return (
        <button
            className={`md:w-72 w-full max-w-80
        shadow-(--custom-shadow) 
        rounded-lg flex items-center 
        justify-center gap-2 px-10 py-5 
        font-bold text-base 
        ${theme == 'primary' ?
                    'bg-primary text-text-s hover:bg-primary/90' :
                    theme == 'gray' ? 'bg-secondary text-primary hover:bg-secondary/85'
                        : 'bg-text-s text-primary hover:bg-text-s/90'
                    }
            transition-all duration-300 ease-in-out
            group hover:scale-[1.02] hover:shadow-lg `}>

            {title && (
                <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 
                    bg-secondary text-text text-sm py-2 px-4 rounded-lg
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    whitespace-nowrap pointer-events-none z-50
                    shadow-xl font-light ">
                    {title}
                </span>
            )}
            {label && <span >{label}</span>}
            {icon &&
                (typeof icon === "string" ? (
                    <img
                        src={icon}
                        alt="icon"
                        className="group-hover:rotate-15 group-hover:scale-[1.02] transition-all duration-300"
                    />
                ) : (
                    icon
                ))}
        </button>
    );
};

export default Button;

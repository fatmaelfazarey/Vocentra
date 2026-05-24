import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

interface NavbarProps {
    navbar: { to: string; label: string }[];
}

const Navbar = ({ navbar }: NavbarProps) => {
    const location = useLocation();
    const [open, setOpen] = useState(false);

    return (
        <div className="">
            {/* Hamburger Menu Button */}
            <button
                onClick={() => setOpen((open) => !open)}
                className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
                aria-label="Toggle menu"
            >
                <span className={`block w-6 h-0.5 bg-text transition-transform duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-text transition-opacity duration-300 ${open ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-text transition-transform duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {/* Navigation Menu */}
            <nav className={`
                flex flex-col md:flex-row items-center
                absolute md:static bg-secondary md:bg-transparent
                left-0 right-0 md:w-auto z-40
                transition-all duration-300 overflow-hidden
                ${open ? 'top-full max-h-96 opacity-100 w-full' : 'top-[-400px] max-h-0 opacity-0 md:max-h-full md:opacity-100 md:top-0'}
            `}>
                {navbar.map((link, index) => {
                    const isActive = location.pathname === link.to;

                    return (
                        <Link
                            to={link.to}
                            key={index}
                            onClick={() => setOpen(false)}
                            className="px-3.5 font-medium text-xl flex w-fit flex-col relative group"
                        >
                            <span className={`py-3 transition-colors duration-200 ${isActive ? "text-primary" : "text-text hover:text-primary"}`}>
                                {link.label}
                            </span>

                            {/* Active Indicator */}
                            <div className={`
                                w-full h-0.75 bg-primary rounded-full 
                                transition-all duration-200
                                ${isActive ? 'opacity-100 scale-x-100' : 'scale-x-0 group-hover:scale-x-100 opacity-0 group-hover:opacity-50'}
                            `}></div>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
};

export default Navbar;
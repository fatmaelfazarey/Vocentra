import { Link } from "react-router-dom";
import type { IconType } from "react-icons";

interface IconProps {
    icon: IconType;
    link: string;
}

const Icon = ({ icon: Icon, link }: IconProps) => {
    return (
        <Link
            to={link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-secondary hover:text-primary transition-colors"
        >
            <Icon className="w-5 h-5" />
        </Link>
    );
};

export default Icon;
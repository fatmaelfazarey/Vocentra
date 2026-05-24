import { Link } from "react-router-dom";
import type { IconType } from "react-icons";

interface IconTextProps {
  icon: IconType;
  label: string;
  navigateTo: string;
  textColor?: string
}

const IconText = ({ icon, label, navigateTo, textColor }: IconTextProps) => {

  const isExternal =
    navigateTo.startsWith("http") ||
    navigateTo.startsWith("mailto") ||
    navigateTo.startsWith("tel");

  const content = (
    <div className="flex items-center gap-1 hover:opacity-80 group">
      <Icon icon={icon} link={navigateTo} />
      {label && <span className={`${textColor ? `text-${textColor}` : 'text-secondary'}  text-sm font-light`}>{label}</span>}
    </div>
  );

  if (isExternal) {
    return (
      <a href={navigateTo} >
        {content}
      </a>
    );
  }

  return (
    <Link to={navigateTo}>
      {content}
    </Link>
  );
};

export default IconText;

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
      className=" text-primary font-bold group-hover:rotate-12 group-hover:scale-120 transition "
    >
      <Icon className="w-7 h-7 font-bold" />
    </Link>
  );
};


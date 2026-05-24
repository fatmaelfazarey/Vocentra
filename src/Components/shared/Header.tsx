import { assets } from "../../assets/assets"
import Navbar from "../MY-UI/Navbar";

interface NavbarItem {
    to: string;
    label: string;
}

const Header = () => {
    const navbar: NavbarItem[] = [
        { label: 'Home', to: '/' },
        { label: 'About', to: '/about' },
        { label: 'Services', to: '/services' },
        { label: 'Investors', to: '/investors' },
        { label: 'Careers', to: '/careers' },
        { label: 'Contact', to: '/contact' }
    ];

    return (
        <div className="bg-white shadow-(--custom-shadow) sticky top-0 z-50 ">
            <div className=" relative max-w-7xl mx-auto flex gap-2 w-full justify-between items-center py-2 px-2">
                <div>
                    <img src={assets.Logo} alt="Logo" className="h-12 w-auto" />
                </div>
                <div className="">
                    <Navbar navbar={navbar} />
                </div>
            </div>
        </div>
    );
};

export default Header;
import { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavAuth from "./NavAuth";
import logo from "../../assets/LogoWhite.svg";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
      setOpen(prev => !prev);
    };
    
    return (
    <nav className="w-full bg-digital-blue-900 fixed top-0 z-100">
        <div className="max-w-360 mx-auto h-14 px-6 flex justify-between items-center gap-2">
            <Logo imgSrc={logo} altText="github finder logo" size={'sm'}/>

            <div className="hidden md:flex gap-4">
                <NavLinks />
                <NavAuth />
            </div>

            <MobileMenu showMenu={handleToggle} open={open} />
        </div>
    </nav>
    );
};



export default NavBar;
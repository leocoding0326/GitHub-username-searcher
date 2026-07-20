import { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavAuth from "./NavAuth";
import logo from "../../assets/logo.svg";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
      setOpen(prev => !prev);
    };
    
    return (
        <header className="h-14 px-6 flex justify-between gap-2 items-center">
            <Logo imgSrc = {logo} altText="github finder logo"/>
            <div className="hidden md:flex gap-4">
                <NavLinks />
                <NavAuth />
            </div>
                <MobileMenu showMenu={handleToggle} open ={open}/>
        </header>
    );
};



export default NavBar;
import { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavAuth from "./NavAuth";
import logo from "../../assets/logo.svg";
import BurgerMenu from "./BurgerMenu";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
      setOpen(prev => !prev);
    }
    
    return (
        <div className="max-w-[1440px] h-14 px-6 flex mx-auto justify-between gap-2 items-center">
            <Logo imgSrc = {logo} altText="github finder logo"/>
            <div className="hidden md:flex gap-4">
                <NavLinks />
                <NavAuth />
            </div>
            <div className="md:hidden flex items-center">
                <BurgerMenu helperFunction={handleToggle} open ={open}/>
            </div>
        </div>
    )
};



export default NavBar;
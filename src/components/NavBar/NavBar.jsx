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
        <div className="max-w-[1440px] h-14 px-8 my-2 flex justify-between m-auto gap-2">
            <Logo imgSrc = {logo} altText="github finder logo"/>
            <div className="hidden md:flex ml-auto gap-4 flex-wrap-reverse">
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
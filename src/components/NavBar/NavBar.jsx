import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavAuth from "./NavAuth";
import logo from "../../assets/logo.svg";
import BurgerMenu from "./BurgerMenu";

const NavBar = () => {
    return (
        <div className="max-w-7xl h-14 px-6 my-2 flex justify-between m-auto">
            <Logo imgSrc = {logo} altText="github finder logo"/>
            <div className="hidden md:flex ml-auto gap-4 flex-wrap-reverse">
                <NavLinks />
                <NavAuth />
            </div>
            <div>
                <BurgerMenu />
            </div>
        </div>
    )
};



export default NavBar;
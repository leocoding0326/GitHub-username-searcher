import Logo from "./Logo";
import NavLinks from "./NavLinks";
import logo from "../../assets/logo.svg";

const NavBar = () => {
    return (
        <div className="w-full h-16 m-2">
            <Logo imgSrc = {logo} altText="github finder logo"/>
            <NavLinks />
        </div>
    )
};



export default NavBar;
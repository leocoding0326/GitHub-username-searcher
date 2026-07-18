import Logo from "./Logo";
import NavLinks from "./NavLinks";
import logo from "../../assets/logo.svg";

const NavBar = () => {
    return (
        <div>
            <Logo imgSrc = {logo} altText="github finder logo"/>
            <NavLinks />
        </div>
    )
};



export default NavBar;
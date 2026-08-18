import { NavLink } from "react-router-dom";

const NavLinks = () => {
    return (
        <ul className="flex md:flex-row flex-col md:gap-3 gap-10 items-center
        [&>li>a]:text-white 
        [&>li>a]:hover:bg-digital-blue-400
        [&>li>a]:px-2
        [&>li>a]:py-1
        [&>li>a]:rounded-md
        [&>li>a]:transition-colors
        [&>li>a]:duration-500
        [&>li>a]:inline-block
        [&>li>a.active]:bg-digital-blue-400
        md:text-sm text-2xl
        ">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/features">Features</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    );
};

export default NavLinks;
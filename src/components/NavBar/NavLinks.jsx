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
        md:text-sm text-2xl
        ">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Contact</a></li>
        </ul>
    );
};

export default NavLinks;
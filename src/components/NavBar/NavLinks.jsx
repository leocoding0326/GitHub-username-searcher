const NavLinks = () => {
    return (
        <ul className="flex gap-3 items-center
        [&>li>a]:text-gray-500 
        [&>li>a]:hover:bg-digital-blue-400 
        [&>li>a]:hover:text-white
        [&>li>a]:px-2
        [&>li>a]:py-1
        [&>li>a]:rounded-md
        [&>li>a]:transition-colors
        [&>li>a]:duration-500
        [&>li>a]:inline-block
        text-sm
        ">
            <li><a href="">Tools</a></li>
            <li><a href="">Why</a></li>
            <li><a href="">How To</a></li>
        </ul>
    )
};

export default NavLinks;
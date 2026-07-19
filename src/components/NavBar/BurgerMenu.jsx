const BurgerMenu = ({helperFunction, open}) => {
    

    return (
        <button onClick={helperFunction}>
            <div className="relative h-5 w-6">
                <span className={`absolute top-0 h-0.5 w-6 bg-black rounded-full transition-all duration-300 ease-in-out ${open ? "top-2 rotate-45" : "top-0 rotate-0"}`}></span>
                <span className={`absolute top-2 h-0.5 w-6 bg-black rounded-full transition-all duration-300 ease-in ${open ? 'opacity-0 scale-x-0': 'opacity-100 scale-x-100'}`}></span>
                <span className={`absolute top-2 h-0.5 w-6 bg-black rounded-full transition-all duration-300 ease-in-out ${open ? 'top-0 -rotate-45 ':'top-4 rotate-0'}`}></span>
            </div>
        </button>
    );
};

export default BurgerMenu;
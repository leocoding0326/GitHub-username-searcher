const BurgerMenu = () => {
    return (
        <div className="relative h-5 w-6">
            <span className="absolute top-0 h-0.5 w-6 bg-black rounded-full"></span>
            <span className="absolute top-2 h-0.5 w-6 bg-black rounded-full"></span>
            <span className="absolute top-4 h-0.5 w-6 bg-black rounded-full"></span>
        </div>
    );
};

export default BurgerMenu;
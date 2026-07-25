import BurgerButton from "./BurgerButton";
import SlideMenu from "./SlideMenu";

const MobileMenu = ({showMenu, open}) => {
    return (
        <div className="md:hidden z-100">
            <BurgerButton showMenu={showMenu} open={open}/>
            <SlideMenu open={open}/>
        </div>
    );
};

export default MobileMenu;
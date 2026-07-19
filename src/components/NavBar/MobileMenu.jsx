import BurgerButton from "./BurgerButton";
import SlideMenu from "./SlideMenu";

const MobileMenu = ({showMenu, open}) => {
    return (
        <div className="md:hidden">
            <BurgerButton showMenu={showMenu} open={open}/>
            <SlideMenu open={open}/>
        </div>
    )
};

export default MobileMenu;
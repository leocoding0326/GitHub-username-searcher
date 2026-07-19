import BurgerButton from "./BurgerButton";
import SlideMenu from "./SlideMenu";

const MobileMenu = ({showMenu, open}) => {
    return (
        <div>
            <BurgerButton showMenu={showMenu} open={open}/>
            <SlideMenu />
        </div>
    )
};

export default MobileMenu;
import NavLinks from "./NavLinks";
import NavAuth from "./NavAuth";

const SlideMenu = ({open}) => {
    return (
        <div className={`flex flex-col justify-around items-center transition-all duration-300 right-0 top-0 fixed h-[90vh] w-screen rounded-md shadow-sm ${!open ? 'translate-x-full' : 'translate-x-0'
        }`}>
          <NavLinks />
          <NavAuth />
        </div>
    )
}

export default SlideMenu;
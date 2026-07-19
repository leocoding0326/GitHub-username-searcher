
const SlideMenu = ({open}) => {
    return (
        <div className={`transition-all duration-300 right-0 top-0 fixed h-[90vh] w-screen rounded-md shadow-sm ${!open ? 'translate-x-full' : 'translate-x-0'
        }`}>
            
        </div>
    )
}

export default SlideMenu;
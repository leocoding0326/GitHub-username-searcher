const BurgerMenu = ({helperFunction, open}) => {
    

  return (
      <button
        onClick={helperFunction}
        className="relative w-6 h-4 flex items-center justify-center"
        aria-label="slide menu button"
      >
          <span
            className={`absolute block left-0 h-0.5 w-6 rounded-full bg-black transition-all duration-300
            ${open ? "top-2 rotate-45" : "top-0"}`}
          />

          <span
            className={`absolute block left-0 top-2 h-0.5 w-6 rounded-full bg-black transition-all duration-300
            ${open ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"}`}
          />

          <span
            className={`absolute block left-0 h-0.5 w-6 rounded-full bg-black transition-all duration-300
            ${open ? "top-2 -rotate-45" : "top-4"}`}
          />
      </button>
  );
};
export default BurgerMenu;
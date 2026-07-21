const NavAuth = () => {
    return (
        <div className="md:[&>button]:px-4 [&>button]:px-10 md:[&>button]:py-1 [&>button]:py-3 flex flex-wrap justify-center md:gap-2 gap-4 items-center">
            <button className="text-digital-blue-400 !border rounded-md hover:bg-digital-blue-50 transition-colors">Log In</button>
            <button className="bg-digital-blue-400 rounded-md hover:bg-digital-blue-700 text-white !border !border-digital-blue-400 transition-colors">Sign Up</button>
        </div>
    );
};

export default NavAuth; 
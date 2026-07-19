const NavAuth = () => {
    return (
        <div className="[&>button]:px-4 [&>button]:py-1 flex gap-2 items-center">
            <button className="text-digital-blue-500 !border rounded-md hover:bg-digital-blue-50 transition-colors">Log In</button>
            <button className="bg-digital-blue-500 rounded-md hover:bg-digital-blue-700 text-white !border transition-colors">Sign Up</button>
        </div>
    )
}

export default NavAuth; 
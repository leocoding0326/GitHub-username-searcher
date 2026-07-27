const ReposMenu = () => {
    return (
    <ul className="flex gap-6 w-full tabs">
        <li>
            <button className="tab-link hover:bg-digital-blue-50 transition-colors rounded-md">Overview</button>
        </li>
        <li>
            <button className="tab-link hover:bg-digital-blue-50 transition-colors rounded-md">Repositories</button>
        </li>
        <li>
            <button className="tab-link hover:bg-digital-blue-50 transition-colors rounded-md">Pinned Repos</button>
        </li>
    </ul>
    );
};

export default ReposMenu;
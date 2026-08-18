const ReposMenu = ({chooseTab, current}) => {

    return (
    <ul className="flex gap-6 w-full tabs">
        <li>
            <button 
            className={`tab-link hover:bg-digital-blue-50 transition-colors rounded-md 
            ${current === 'overview' ? 'active' : ''} hover:cursor-pointer`}
            onClick={chooseTab}>Overview</button>
        </li>
        <li>
            <button 
            className={`tab-link hover:bg-digital-blue-50 transition-colors rounded-md 
            ${current === 'repositories' ? 'active' : ''} hover:cursor-pointer`} onClick={chooseTab}>Repositories</button>
        </li>
        {/*<li>
            <button className={`tab-link hover:bg-digital-blue-50 transition-colors rounded-md ${current === 'pinned repos' ? 'active' : ''} hover:cursor-pointer`} onClick={chooseTab}>Pinned Repos</button>
        </li>*/}
    </ul>
    );
};

export default ReposMenu;
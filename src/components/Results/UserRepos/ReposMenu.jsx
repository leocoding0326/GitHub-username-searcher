const ReposMenu = ({chooseTab, current}) => {

    console.log({
    current,
    overview: current === 'overview',
    repositories: current === 'repositories',
    pinned: current === 'pinned repos'
});
    return (
    <ul className="flex gap-6 w-full tabs">
        <li>
            <button 
            className={`tab-link hover:bg-digital-blue-50 transition-colors rounded-md 
            ${current === 'overview' ? 'active' : ''}`}
            onClick={chooseTab}>Overview</button>
        </li>
        <li>
            <button 
            className={`tab-link hover:bg-digital-blue-50 transition-colors rounded-md 
            ${current === 'repositories' ? 'active' : ''}`} onClick={chooseTab}>Repositories</button>
        </li>
        <li>
            <button className={`tab-link hover:bg-digital-blue-50 transition-colors rounded-md ${current === 'pinned repos' ? 'active' : ''}`} onClick={chooseTab}>Pinned Repos</button>
        </li>
    </ul>
    );
};

export default ReposMenu;
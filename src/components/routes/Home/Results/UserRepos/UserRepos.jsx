import ReposMenu from "./ReposMenu";
import { useState } from "react";
import RenderRepos from "./RenderRepos";
import OverviewTab from "./OverviewTab";


const UserRepos = ({reposObject, resultObject}) => {

    const [navChoice, setNavChoice] = useState('overview');

    const overviewRepos = reposObject
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 2);
    

    const handleNavChoice = (e) => {
        const tab = e.currentTarget.textContent.trim().toLowerCase();
        setNavChoice(tab);
    };

    return (
        <div className="p-4 border border-digital-blue-100 shadow-sm rounded-md bg-slate-50">
            <ReposMenu chooseTab = {handleNavChoice} current = {navChoice}/>
            {navChoice==='overview' && <OverviewTab resultObject={resultObject} object={overviewRepos}/>}
            {navChoice==='repositories' && <RenderRepos object={reposObject}/>}
        </div>
    );
};

export default UserRepos;
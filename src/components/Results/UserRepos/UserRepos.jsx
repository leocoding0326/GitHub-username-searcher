import ReposMenu from "./ReposMenu";
import OverviewTab from "./RenderRepos";
import { useState } from "react";
import RenderRepos from "./RenderRepos";


const UserRepos = ({reposObject}) => {

    const [navChoice, setNavChoice] = useState('overview');

    const overviewRepos = reposObject.slice(0, 6)

    const handleNavChoice = (e) => {
        const tab = e.currentTarget.textContent.trim().toLowerCase();
        setNavChoice(tab);
    };

    return (
        <div className="p-4 border border-digital-blue-100 shadow-sm rounded-md bg-slate-50">
            <ReposMenu chooseTab = {handleNavChoice} current = {navChoice}/>
            {navChoice==='overview' && <RenderRepos object={overviewRepos}/>}
            {navChoice==='repositories' && <RenderRepos object={reposObject}/>}
        </div>
    );
};

export default UserRepos;
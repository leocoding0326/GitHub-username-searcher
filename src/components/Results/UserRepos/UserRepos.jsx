import ReposMenu from "./ReposMenu";
import OverviewTab from "./RenderRepos";
import { useState } from "react";
import RenderRepos from "./RenderRepos";
import { Heading4 } from "lucide-react";


const UserRepos = ({reposObject}) => {

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
            {navChoice==='overview' && <h4 className="p-4 text-xl border-b border-gray-300">Top Repos</h4>}
            {navChoice==='overview' && <RenderRepos object={overviewRepos}/>}
            {navChoice==='repositories' && <RenderRepos object={reposObject}/>}
        </div>
    );
};

export default UserRepos;
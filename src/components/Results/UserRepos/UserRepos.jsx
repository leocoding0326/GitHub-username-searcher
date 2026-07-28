import ReposMenu from "./ReposMenu";
import OverviewTab from "./OverviewTab";
import { useState } from "react";


const UserRepos = ({reposObject}) => {

    const [navChoice, setNavChoice] = useState('overview');

    const overviewRepos = reposObject.slice(0, 6)

    const handleNavChoice = (e) => {
        const tab = e.currentTarget.textContent.trim().toLowerCase();
        setNavChoice(tab);
    };

    return (
        <div>
            <ReposMenu chooseTab = {handleNavChoice} current = {navChoice}/>
            <OverviewTab object={overviewRepos}/>
        </div>
    );
};

export default UserRepos;
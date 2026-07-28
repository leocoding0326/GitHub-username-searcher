import ReposMenu from "./ReposMenu";
import OverviewTab from "./OverviewTab";
import { useState } from "react";


const UserRepos = () => {

    const [navChoice, setNavChoice] = useState('overview');

    const handleNavChoice = (e) => {
        const tab = e.currentTarget.textContent.trim().toLowerCase();
        setNavChoice(tab);
    };

    return (
        <div>
            <ReposMenu chooseTab = {handleNavChoice} current = {navChoice}/>
            <OverviewTab />
        </div>
    );
};

export default UserRepos;
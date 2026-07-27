import ReposMenu from "./ReposMenu";
import OverviewTab from "./OverviewTab";

const [navChoice, setNavChoice] = useState('overview');

const handleNavChoice = (e) => {
    const tab = e.currentTarget.textContent.trim().toLowerCase();
    setNavChoice(tab);
};

const UserRepos = () => {
    return (
        <div>
            <ReposMenu chooseTab = {handleNavChoice} current = {navChoice}/>
            <OverviewTab />
        </div>
    );
};

export default UserRepos;
import ReposMenu from "./ReposMenu";

const [navChoice, setNavChoice] = useState('overview');

const handleNavChoice = (e) => {
    const tab = e.currentTarget.textContent.trim().toLowerCase();
    setNavChoice(tab);
};

const UserRepos = () => {
    return (
        <div>
            <ReposMenu chooseTab = {handleNavChoice} current = {navChoice}/>
        </div>
    );
};

export default UserRepos;
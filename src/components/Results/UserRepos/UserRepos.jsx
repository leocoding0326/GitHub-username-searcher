import ReposMenu from "./ReposMenu";

const [navChoice, setNavChoice] = useState('overview');

const handleNavChoice = (e) => {
    const tab = e.currentTarget.textContent.trim().tolowerCase();
    setNavChoice(tab);
};

const UserRepos = () => {
    return (
        <div>
            <ReposMenu />
        </div>
    );
};

export default UserRepos;
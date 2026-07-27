import ReposMenu from "./ReposMenu";

const [navChoice, setNavChoice] = useState('overview');

const UserRepos = () => {
    return (
        <div>
            <ReposMenu />
        </div>
    );
};

export default UserRepos;
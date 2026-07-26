import Profile from "./ResultsProfile/Profile";
import UserStats from "./UserStats/UserStats";


const Results = ({resultObject}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-[minmax(300px, 30%)_1fr]">
            <aside>
                <Profile resultObject={resultObject}/>
            </aside>
            <section>
                <UserStats followers={resultObject.followers} following={resultObject.following} gists={resultObject.public_gists} repos={resultObject.public_repos} org={resultObject.company}/>
            </section>
        </div>
    );
};

export default Results;
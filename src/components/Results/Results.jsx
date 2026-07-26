import Profile from "./ResultsProfile/Profile";
import UserStats from "./UserStats/UserStats";


const Results = ({resultObject}) => {
    return (
        <div className="grid grid-cols-[20%_70%] gap-8 w-full px-10">
            <aside className="w-full">
                <Profile resultObject={resultObject}/>
            </aside>
            <section>
                <UserStats followers={resultObject.followers} following={resultObject.following} gists={resultObject.public_gists} repos={resultObject.public_repos} org={resultObject.company}/>
            </section>
        </div>
    );
};

export default Results;
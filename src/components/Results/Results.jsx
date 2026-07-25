import Profile from "./ResultsProfile/Profile";

const Results = ({resultObject}) => {
    return (
        <div>
            <Profile resultObject={resultObject}/>
        </div>
    );
};

export default Results;
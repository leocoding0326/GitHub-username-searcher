import ResultsHeader from "./ResultsHeader";

const Results = (userResult) => {
    return (
        <div>
            <ResultsHeader imgSrc={userResult.avatar_url} username={login}/>
        </div>
    );
};

export default Results;
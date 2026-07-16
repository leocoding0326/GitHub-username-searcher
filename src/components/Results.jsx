import ResultsHeader from "./ResultsHeader";

const Results = ({resultObject}) => {
    console.log(resultObject)
    return (
        <div>
            <ResultsHeader imgSrc={resultObject.avatar_url} username={resultObject.login}/>
        </div>
    );
};

export default Results;
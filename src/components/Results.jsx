import ResultsHeader from "./ResultsHeader";
import ResultStats from "./ResultsStats";
const Results = ({resultObject}) => {
    console.log(resultObject)
    return (
        <div>
            <ResultsHeader imgSrc={resultObject.avatar_url} username={resultObject.login}/>
            <ResultStats  resultObject={resultObject}/>
        </div>
    );
};

export default Results;
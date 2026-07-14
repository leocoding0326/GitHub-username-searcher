import LoadingBar from './LoadingBar'

const SuggestionList = ({data, dataHandler, isLoading}) => {
    return (
            isLoading ? <LoadingBar /> : 
            <ul>
                {data.map((item, index) => 
                    <li key={item.id ?? index}>{dataHandler(item)}</li>
                )}
            </ul>
    );
};

export default SuggestionList;
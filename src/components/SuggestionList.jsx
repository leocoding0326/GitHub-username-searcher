import LoadingBar from './LoadingBar'

const SuggestionList = ({data, dataHandler, isLoading, handleClick}) => {

    

    return (
            isLoading ? <LoadingBar /> : 
            <ul>
                {data.map((item, index) => 
                    <li key={item.id ?? index} onClick={()=>handleClick(item)}>{dataHandler(item)}</li>
                )}
            </ul>
    );
};

export default SuggestionList;
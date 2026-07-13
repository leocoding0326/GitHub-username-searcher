const SuggestionList = ({data, dataHandler}) => {
    return (
        <ul>
            {data.map((item, index) => 
                <li key={item.id ?? index}>{dataHandler(item)}</li>
            )}
        </ul>
    );
}

export default SuggestionList;
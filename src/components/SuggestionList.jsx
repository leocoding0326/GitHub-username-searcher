import LoadingBar from './LoadingBar'

const SuggestionList = ({ data = [], dataHandler, isLoading, handleClick }) => {
    return (
        <ul className="suggestion-list">
            {isLoading ? (
                <li className="loading">
                    <LoadingBar />
                </li>
            ) : (
                data.map((item) => (
                    <li key={item.id} onClick={() => handleClick(item)}>
                        {dataHandler(item)}
                    </li>
                ))
            )}
        </ul>
    );
};

export default SuggestionList;
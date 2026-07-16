import LoadingBar from './LoadingBar'

const SuggestionList = ({ data = [], dataHandler, isLoading, handleClick, search }) => {
    return (
        <ul className="suggestion-list">
            {isLoading ? (
                <li className="loading">
                    <LoadingBar />
                </li>
            ) 
            
            : data.length > 0 ? (
                data.map((item) => (
                    <li key={item.id} onClick={() => handleClick(item)}>
                        {dataHandler(item)}
                    </li>
                )))
            
            : search !== '' ? (
                <li>No user found...</li>
            ): null}
        </ul>
    );
};

export default SuggestionList;
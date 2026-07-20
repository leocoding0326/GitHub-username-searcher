import LoadingBar from './LoadingBar'

const SuggestionList = ({ data = [], dataHandler, isLoading, handleClick, search, selectUser }) => {
    return (
        <ul className='min-h-[50%] absolute'>
            {isLoading ? (
                <li className="loading">
                    <LoadingBar />
                </li>
            ) : data.length > 0 ? (
                data.map((item) => (
                    <li key={item.id} onClick={() => handleClick(item)}>
                        {dataHandler(item)}
                    </li>
                ))
            ) : search !== '' && !selectUser ? (
                <li>No user found...</li>
            ) : null}
        </ul>
    );
};

export default SuggestionList;
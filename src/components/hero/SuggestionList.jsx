import LoadingBar from './LoadingBar'

const SuggestionList = ({ data = [], dataHandler, isLoading, handleClick, search, selectUser }) => {
    return (
        <ul className='absolute bg-white w-[50%] [&>li]:p-5 shadow-sm transition-all rounded-md'>
            {isLoading ? (
                <li className="loading">
                    <LoadingBar />
                </li>
            ) : data.length > 0 ? (
                data.map((item) => (
                    <li key={item.id} onClick={() => handleClick(item)} className='flex items-center hover:bg-digital-blue-100 transition-colors rounded-md'>
                        {dataHandler(item)}
                        <span className='flex-1 border-dotted border-b border-gray-200 mx-2'></span>
                    </li>
                ))
            ) : search !== '' && !selectUser ? (
                <li>No user found...</li>
            ) : null}
        </ul>
    );
};

export default SuggestionList;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchButton = () => {
    return  (
        <button type='submit' className='bg-digital-blue-500 rounded-md px-2 py-1 text-white'>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
            Search
        </button>
    )
};

export default SearchButton;
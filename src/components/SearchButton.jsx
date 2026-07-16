import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchButton = () => {
    return  (
        <button type='submit'>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
            Search
        </button>
    )
};

export default SearchButton;
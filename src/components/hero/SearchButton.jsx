import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchButton = () => {
    return  (
        <button type='submit' className='bg-digital-blue-500 rounded-md px-2 py-1 text-white hover:bg-digital-blue-600 cursor-pointer'>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
            <span className='min-[375px]:inline hidden'>Search</span>
        </button>
    )
};

export default SearchButton;
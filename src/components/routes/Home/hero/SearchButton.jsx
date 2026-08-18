import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchButton = ({isSubmitting}) => {
    return  (
        <button disabled={isSubmitting} type='submit' className='bg-digital-blue-500 rounded-md p-2 text-white hover:bg-digital-blue-600 cursor-pointer flex justify-center items-center gap-1 w-full min-[375px]:w-auto'>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
            <span> {isSubmitting ? 'Loading' : 'Search'}</span>
        </button>
    )
};

export default SearchButton;
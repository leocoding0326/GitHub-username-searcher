import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'


const ClearButton = ({value, handleClear}) => {
    
    if (value.trim() === '') {
        return
    }
    return <button onClick={handleClear} className='absolute right-28 text-gray-300 cursor-pointer hover:text-gray-500'>
        <FontAwesomeIcon icon={faCircleXmark} />
    </button>
};

export default ClearButton;
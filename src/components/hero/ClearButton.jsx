import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'


const ClearButton = ({value, handleClear}) => {
    
    if (value.trim() === '') {
        return
    }
    return <button onClick={handleClear} className='absolute right-28 text-gray-300'>
        <FontAwesomeIcon icon={faCircleXmark} />
    </button>
};

export default ClearButton;
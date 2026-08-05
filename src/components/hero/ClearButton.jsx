import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'


const ClearButton = ({value, handleClear}) => {
    
    
    return <button onClick={handleClear} className='absolute min-[375px]:right-28 right-15 text-gray-300 cursor-pointer hover:text-gray-500'>
        <FontAwesomeIcon icon={faCircleXmark} />
    </button>
};

export default ClearButton;
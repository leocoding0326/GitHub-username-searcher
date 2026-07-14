
const ClearButton = ({value, handleClick}) => {
    
    if (value.trim() === '') {
        return
    }
    return <button onClick={handleClick}>Clear</button>
};

export default ClearButton;
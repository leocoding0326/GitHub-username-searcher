
const ClearButton = ({value, handleClear}) => {
    
    if (value.trim() === '') {
        return
    }
    return <button onClick={handleClear}>Clear</button>
};

export default ClearButton;
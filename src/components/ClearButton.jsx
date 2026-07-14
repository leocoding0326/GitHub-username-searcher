
const ClearButton = ({isValid}) => {
    
    if (isValid.trim() === '') {
        return
    }
    return <button>Clear</button>
};

export default ClearButton;
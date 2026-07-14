
const ClearButton = ({value}) => {
    
    if (value.trim() === '') {
        return
    }
    return <button>Clear</button>
};

export default ClearButton;
const AutoComplete = ({searchFunction}) => {
    const handleChange = (e) => {
       console.log(searchFunction(e.target.value));
    }
    return (
        <input onChange={handleChange}/>
    );
};

export default AutoComplete;
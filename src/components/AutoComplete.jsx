const AutoComplete = ({searchFunction}) => {
    const handleChange = (e) => {
       const users = searchFunction(e.target.value);
       const usernames = users.map(user => user.login)
       console.log(usernames)
    }
    return (
        <input 
            onChange={handleChange}
            name='username'
            type='text'
            placeholder='Enter username...'
            autoComplete='off'/>
    );
};

export default AutoComplete;
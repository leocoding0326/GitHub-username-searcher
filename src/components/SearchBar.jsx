const SearchBar = ({onChangeHandler}) => {
    return (<input
        onChange = {onChangeHandler}
        name='username'
        type='text'
        placeholder='Enter username...'
        autoComplete='off'
    />);
};

export default SearchBar;
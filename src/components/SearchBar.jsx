const SearchBar = ({onSearch}) => {
    return (<input
        onChange = {onSearch}
        name='username'
        type='text'
        placeholder='Enter username...'
        autoComplete='off'
    />);
};

export default SearchBar;
const SearchBar = ({onSearch, search}) => {
    return (<input
        onChange = {onSearch}
        name='username'
        type='text'
        placeholder='Enter username...'
        autoComplete='off'
        value={search}
    />);
};

export default SearchBar;
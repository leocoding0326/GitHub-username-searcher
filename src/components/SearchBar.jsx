import ClearButton from "./ClearButton";

const SearchBar = ({onSearch, search, handleClear}) => {
    return (
        <div>
            <input
                onChange = {onSearch}
                name='username'
                type='text'
                placeholder='Enter username...'
                autoComplete='off'
                value={search}/>
            <ClearButton value = {search} handleClear = {handleClear}/>
        </div>);
};

export default SearchBar;
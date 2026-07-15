import ClearButton from "./ClearButton";
import SearchButton from "./SearchButton";

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
            <SearchButton/>
            <ClearButton value = {search} handleClear = {handleClear}/>
        </div>);
};

export default SearchBar;
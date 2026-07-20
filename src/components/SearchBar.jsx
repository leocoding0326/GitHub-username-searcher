import ClearButton from "./ClearButton";
import SearchButton from "./SearchButton";

const SearchBar = ({onSearch, search, handleClear, inputRef}) => {
    return (
        <div>
            <input
                onChange = {onSearch}
                name='username'
                type='text'
                placeholder='Enter username...'
                autoComplete='off'
                value={search}
                ref={inputRef}
                className="border border-gray-300 rounded-md px-2 focus:outline-digital-blue-300 focus:outline-1"/>
            <SearchButton/>
            <ClearButton value = {search} handleClear = {handleClear}/>
        </div>);
};

export default SearchBar;
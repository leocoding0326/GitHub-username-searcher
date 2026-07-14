import ClearButton from "./ClearButton";

const SearchBar = ({onSearch, search}) => {
    return (
        <div>
            <input
                onChange = {onSearch}
                name='username'
                type='text'
                placeholder='Enter username...'
                autoComplete='off'
                value={search}/>
            <ClearButton value = {search}/>
        </div>);
};

export default SearchBar;
import {useState, useMemo} from 'react';
import SearchBar from './SearchBar';
import SuggestionList from './SuggestionList';
import debounce from "lodash.debounce";

const SearchAutoComplete = ({searchFunction, getLabel}) => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('')
    
    const debouncedSearch = useMemo(
        () => 
            debounce(async (value) => {

                setLoading(true);

                try {
                    const results = await searchFunction(value);
                    setUsers(results)
                }
                catch(error) {
                    console.log(`Something went wrong ${error}`)
                }
                finally {
                    setLoading(false)
                };

            }, 600),
            [searchFunction]
    );
    const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value)

        if(value.trim() === '') {
            debouncedSearch.cancel();
            setUsers([]);
            return;
        };
        debouncedSearch(value);
    };

    const handleSuggestionClick = (item) => {
        setSearch(getLabel(item));
    };

    const handleClearClick = () => {
        setUsers([]);
        setSearch('');
    }

    return (
        <div>
            <SearchBar 
                onSearch = {handleChange} 
                search={search} 
                handleClear = {handleClearClick}/>

            <SuggestionList 
                data ={users} 
                dataHandler={getLabel} 
                isLoading={loading}
                handleClick={handleSuggestionClick}/>
        </div>
    );
};

export default SearchAutoComplete;
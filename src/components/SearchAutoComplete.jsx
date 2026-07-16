import {useState, useMemo, useEffect, useRef} from 'react';
import SearchBar from './SearchBar';
import SuggestionList from './SuggestionList';
import debounce from "lodash.debounce";

const SearchAutoComplete = ({searchFunction, getLabel, clearResult, search, setSearch, startSearch}) => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef(null)
    
    const debouncedSearch = useMemo(
        () => 
            debounce(async (value) => {

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

    useEffect(() => {
        return () => {
            debouncedSearch.cancel();
        };
    }, [debouncedSearch]);

    const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value)
    setLoading(true);

        if(value.trim() === '') {
            debouncedSearch.cancel();
            setUsers([]);
            return;
        };
        debouncedSearch(value);
    };

    
    const handleSuggestionClick = (item) => {
        setSearch(getLabel(item));
        inputRef.current?.focus();
        setUsers([]);

    };

    const handleClearClick = () => {
        setUsers([]);
        setSearch('');
        clearResult()
    }

    return (
        <div>
            <SearchBar 
                onSearch = {handleChange} 
                search={search} 
                handleClear = {handleClearClick}
                inputRef={inputRef}/>

            <SuggestionList 
                data ={users} 
                dataHandler={getLabel} 
                isLoading={loading}
                handleClick={handleSuggestionClick}
                search={search}/>
        </div>
    );
};

export default SearchAutoComplete;
import {useState, useMemo, useEffect, useRef} from 'react';
import SearchBar from './SearchBar';
import SuggestionList from './SuggestionList';
import debounce from "lodash.debounce";
import HeroTitle from './HeroTitle';

const SearchAutoComplete = ({searchFunction, getLabel, clearResult, search, setSearch, onSubmit}) => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectUser, setSelectUser] = useState(null)
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
    setSelectUser(null);
    setSearch(value);
        if(value.trim() === '') {
            debouncedSearch.cancel();
            setUsers([]);
            setLoading(false);
            setSelectUser(null)
            return;
        };
        debouncedSearch(value);
        setLoading(true);
    };

    
    const handleSuggestionClick = (item) => {
        setSearch(getLabel(item));
        inputRef.current?.focus();
        setSelectUser(item)
        setUsers([]);
    };

    const handleClearClick = () => {
        setUsers([]);
        setSearch('');
        clearResult();
        setSelectUser(null);
    }

    return (
        <div className='h-[40vh] flex flex-col justify-center sm:min-w-[50%] mx-4'>
            <HeroTitle />
            <SearchBar 
                onSearch = {handleChange} 
                search={search} 
                handleClear = {handleClearClick}
                inputRef={inputRef}
                onSubmit={onSubmit}/>
            <div className='min-h-[50%]'>    
                <SuggestionList 
                    data ={users} 
                    dataHandler={getLabel} 
                    isLoading={loading}
                    handleClick={handleSuggestionClick}
                    search={search}
                    selectUser={selectUser}/>
            </div>
        </div>
    );
};

export default SearchAutoComplete;
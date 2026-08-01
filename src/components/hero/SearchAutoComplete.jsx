import {useState, useMemo, useEffect, useRef} from 'react';
import SearchBar from './SearchBar';
import SuggestionList from './SuggestionList';
import debounce from "lodash.debounce";
import HeroTitle from './HeroTitle';
import Tip from './Tip';

const SearchAutoComplete = ({searchFunction, getLabel, clearResult, search, setSearch, onSubmit, users, setUsers}) => {

    const [loading, setLoading] = useState(false);
    const [hasTyped, setHasTyped] = useState(false)
    const inputRef = useRef(null)
    const searchContainerRef = useRef(null);
    
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
    setHasTyped(true)
    setSearch(value);
        if(value.trim() === '') {
            debouncedSearch.cancel();
            setUsers([]);
            setLoading(false);
            setHasTyped(false)
            return;
        };
        debouncedSearch(value);
        setLoading(true);
    };

    
    const handleSuggestionClick = (item) => {
        setSearch(getLabel(item));
        inputRef.current?.focus();
        setHasTyped(false)
        setUsers([]);
    };

    const handleClearClick = () => {
        setUsers([]);
        setSearch('');
        clearResult();
        setHasTyped(false);
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                searchContainerRef.current &&
                !searchContainerRef.current.contains(e.target)
            ) {
                setUsers([]);
                setHasTyped(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div ref={searchContainerRef} className='sm:h-[40vh] flex flex-col justify-center sm:min-w-[80%] mx-4'>
            <HeroTitle />
            <div>
            <SearchBar 
                onSearch = {handleChange} 
                search={search} 
                handleClear = {handleClearClick}
                inputRef={inputRef}
                onSubmit={onSubmit}/>
            <Tip />
            </div>
            <div>    
                <SuggestionList 
                    data ={users} 
                    dataHandler={getLabel} 
                    isLoading={loading}
                    handleClick={handleSuggestionClick}
                    search={search}
                    hasTyped={hasTyped}/>
            </div>
        </div>
    );
};

export default SearchAutoComplete;
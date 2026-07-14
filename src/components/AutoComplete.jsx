import {useState, useMemo} from 'react';
import SearchBar from './SearchBar';
import SuggestionList from './SuggestionList';
import debounce from "lodash.debounce";

const AutoComplete = ({searchFunction, getLabel}) => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    
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

            }, 500),
            [searchFunction]
    );
    const handleChange = (e) => {
    const value = e.target.value;

        if(value.trim() === '') {
            setUsers([]);
            return;
        };
        debouncedSearch(value);
    };

    return (
        <div>
            <SearchBar onSearch = {handleChange}/>
            <SuggestionList 
                data ={users} 
                dataHandler={getLabel} 
                isLoading={loading}/>
        </div>
    );
};

export default AutoComplete;
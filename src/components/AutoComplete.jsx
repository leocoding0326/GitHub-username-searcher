import {useState} from 'react';
import SearchBar from './SearchBar';
import SuggestionList from './SuggestionList';

const AutoComplete = ({searchFunction, getLabel}) => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const handleChange = async (e) => {
    const value = e.target.value;
        if(value.trim() === '') {
            setUsers([]);
            return;
        };

        setLoading(true)

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
        
    };

    return (
        <div>
            <SearchBar onSearch = {handleChange}/>
            <SuggestionList data ={users} dataHandler={getLabel}/>
        </div>
    );
};

export default AutoComplete;
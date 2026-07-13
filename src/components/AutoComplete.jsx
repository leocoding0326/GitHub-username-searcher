import {useState} from 'react';
import SearchBar from './SearchBar';
import SuggestionList from './SuggestionList';

const AutoComplete = ({searchFunction, getLabel}) => {

    const [users, setUsers] = useState([]);
    
    const handleChange = async (e) => {
    const value = e.target.value;
        if(value.trim() === '') {
            setUsers([]);
            return;
        };
        const results = await searchFunction(value);
        setUsers(results)
    };

    return (
        <div>
            <SearchBar onSearch = {handleChange}/>
            <SuggestionList data ={users} dataHandler={getLabel}/>
        </div>
    );
};

export default AutoComplete;
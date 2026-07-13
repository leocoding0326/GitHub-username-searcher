import {useState} from 'react';

const AutoComplete = ({searchFunction, getLabel}) => {
    const [users, setUsers] = useState([]);
    
    const handleChange = async (e) => {
       const results = await searchFunction(e.target.value);
       setUsers(results)
    }
    return (
        <div>
            <input 
                onChange={handleChange}
                name='username'
                type='text'
                placeholder='Enter username...'
                autoComplete='off'
            />
            <ul>
                {users.map((obj, index) =>(
                    <li key={obj.id ?? index}>
                        {getLabel(obj)}
                    </li>
                )
                )}
            </ul>
        </div>
    );
};

export default AutoComplete;
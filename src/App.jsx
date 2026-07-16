import { useState } from 'react';
import './App.css';
import userSearch from './api/userSearch.js';
import SearchAutoComplete from './components/SearchAutoComplete.jsx';
import Results from './components/Results.jsx';
import userResult from './api/userResult.js';

const App = () => {

  const [getResults, setResults] = useState(false)
  const [users, setUsers] = useState([]);

  const handleOnSearch = async (e) => {
    e.preventDefault()
    setResults(true);
  }

  const onClear = () => {
    setResults(false)
  }
  console.log(getResults)
  return (
    <div>
      <h1>Username Checker</h1>
        <form onSubmit={handleOnSearch}>
          <SearchAutoComplete 
            searchFunction={userSearch}
            getLabel={(user) => user.login}
            clearResult={onClear}
            users = {users}
            setUsers ={setUsers}
          />
        </form>
        {getResults &&
          <div>
              <Results 
                resultObject = {userResult}
              />
          </div>
        }
    </div>
  );
}

export default App

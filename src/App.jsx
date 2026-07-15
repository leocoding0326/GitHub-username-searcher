import { useState } from 'react';
import './App.css';
import userSearch from './api/userSearch.js';
import SearchAutoComplete from './components/SearchAutoComplete.jsx';
import Results from './components/Results.jsx';
import userResult from './api/userResult.js';

const App = () => {

  const [hasSearch, setSearch] = useState(false)
  
  return (
    <div>
      <h1>Username Checker</h1>
        <form action="submit">
          <SearchAutoComplete 
            searchFunction={userSearch}
            getLabel={(user) => user.login}
          />
        </form>
        <div className='result'>
            <Results 
              resultObject = {userResult}
            />
        </div>
    </div>
  );
}

export default App

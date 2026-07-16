import { useState } from 'react';
import './App.css';
import userSearch from './api/userSearch.js';
import SearchAutoComplete from './components/SearchAutoComplete.jsx';
import Results from './components/Results.jsx';
import userResult from './api/userResult.js';

const App = () => {

  const [getResults, setResults] = useState(false)
  const [search, setSearch] = useState('')

  const handleOnSearch = async (e) => {
    e.preventDefault()
    setResults(true);
    console.log('here')
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
            search={search}
            setSearch={setSearch}
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

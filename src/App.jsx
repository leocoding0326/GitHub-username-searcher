import { useState } from 'react';
import userSearch from './api/userSearch.js';
import SearchAutoComplete from './components/SearchAutoComplete.jsx';
import Results from './components/Results.jsx';
import userResult from './api/userResult.js';

const App = () => {

  const [getResults, setResults] = useState(false)
  const [search, setSearch] = useState('')
  const [resultObject, setResultObject] = useState(null)

  const handleOnSearch = async (e) => {
    e.preventDefault()
    
    if(search.trim() === '') {
      return 
    }

    const result = await userResult(search)

    setResultObject(result)
    setResults(true);
  }

  const onClear = () => {
    setResults(false)
  }
  
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
            startSearch = {handleOnSearch}
          />
        </form>
        {getResults && resultObject &&
          <div>
              <Results 
                resultObject = {resultObject}
              />
          </div>
        }
    </div>
  );
}

export default App

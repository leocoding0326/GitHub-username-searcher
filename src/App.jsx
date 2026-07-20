import { useState } from 'react';
import userSearch from './api/userSearch.js';
import SearchAutoComplete from './components/SearchAutoComplete.jsx';
import Results from './components/Results.jsx';
import userResult from './api/userResult.js';
import NavBar from './components/NavBar/NavBar.jsx';

const App = () => {

  const [getResults, setResults] = useState(false)
  const [search, setSearch] = useState('')
  const [resultObject, setResultObject] = useState(null)

  const handleOnSearch = async (e) => {
    e.preventDefault()
    
    if(search.trim() === '') {
      return 
    }

    const result = await userResult(search);
    setResultObject(result);
    setResults(true);
  };

  const onClear = () => {
    setResults(false);
  };
  
  return (
    <div className='max-w-[1440px] mx-auto'>
      <NavBar />
      <main className='min-h-screen w-full flex flex-col items-center gap-10 justify-center mt-20'>
          <SearchAutoComplete 
            searchFunction={userSearch}
            getLabel={(user) => user.login}
            clearResult={onClear}
            search={search}
            setSearch={setSearch}
            onSubmit = {handleOnSearch}
          />
          <div className='min-h-[400px]'>
            {getResults && resultObject &&
              <Results 
                resultObject = {resultObject}
              />
            }
          </div>
      </main>
    </div>
  );
} 

export default App;

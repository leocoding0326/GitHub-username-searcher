import { useState } from 'react';
import userSearch from './api/userSearch.js';
import SearchAutoComplete from './components/hero/SearchAutoComplete.jsx';
import Results from './components/Results.jsx';
import userResult from './api/userResult.js';
import NavBar from './components/NavBar/NavBar.jsx';
import Discover from './components/Discover/Discover.jsx';

const App = () => {

  const [getResults, setResults] = useState(false);//Checks if results is dislpayed
  const [search, setSearch] = useState('');//Search bar values
  const [resultObject, setResultObject] = useState(null);//Return Result Object
  const [users, setUsers] = useState([]);// Controls arrays of suggestions


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
      <main className='min-h-screen w-full flex flex-col items-center gap-4 font-code js justify-around'>
          <SearchAutoComplete 
            searchFunction={userSearch}
            getLabel={(user) => user.login}
            clearResult={onClear}
            search={search}
            setSearch={setSearch}
            onSubmit = {handleOnSearch}
            users={users}
            setUsers={setUsers}
          />

          <Discover />
      </main>
    </div>
  );
} 

export default App;

import { useEffect, useState } from 'react';
import userSearch from './api/userSearch.js';
import SearchAutoComplete from './components/hero/SearchAutoComplete.jsx';
import userResult from './api/userResult.js';
import userRepos from './api/userRepos.js';
import NavBar from './components/NavBar/NavBar.jsx';
import Discover from './components/Discover/Discover.jsx';
import Footer from './components/Footer/Footer.jsx';
import Results from './components/Results/Results.jsx';

const App = () => {

  const [resultDisplay, setResultsDisplay] = useState(false);//Checks if results is dislpayed
  const [userNotFound, setuserNotFound] = useState(false);
  const [hasTyped, setHasTyped] = useState(false)
  const [search, setSearch] = useState('');//Search bar values
  const [resultObject, setResultObject] = useState(null);//Return Result Object
  const [reposObject, setReposObject] = useState(null)
  const [users, setUsers] = useState([]);// Controls arrays of suggestions
  const [popularUsers, setPopularUsers] = useState([
  "torvalds",
  "gaearon",
  "yyx990803",
  "sindresorhus",
  "tj",
]); //Mocks a small database to use in popular searches

  const handleOnSearch = async (e) => {
    e.preventDefault()
    if(search.trim() === '') {
      return 
    }
    try {
      const [userData, userReposData] = await Promise.all([
        userResult(search),
        userRepos(search),
      ]);

      setResultObject(userData);
      setReposObject(userReposData);
      setResultsDisplay(true);
      setUsers([]);
      setHasTyped(false);
      setuserNotFound(false)
    }
    catch(err) {
      console.log(err)
      setuserNotFound(true)
    };
  };

  const onClear = () => {
    setResultsDisplay(false);
    setResultObject(null);
    setReposObject(null);
    setHasTyped(false);
    setuserNotFound(false)
  };


  console.log(userNotFound)
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main className='min-h-screen w-full font-code dot-grid-bg py-15'>
        <div className='max-w-360 w-full flex flex-col items-center gap-4 mx-auto'>
          <SearchAutoComplete 
            searchFunction={userSearch}
            getLabel={(user) => user.login}
            clearResult={onClear}
            search={search}
            setSearch={setSearch}
            onSubmit = {handleOnSearch}
            users={users}
            setUsers={setUsers}
            hasTyped={hasTyped} setHasTyped = {setHasTyped}
          />
            {resultDisplay ? (<Results resultObject={resultObject} reposObject={reposObject}/>):
            <Discover popularArray={popularUsers} setSearch={setSearch} setUsers={setUsers} userNotFound={userNotFound}/>
            }
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 

export default App;

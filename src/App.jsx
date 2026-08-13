import { useState } from 'react';
import userResult from './api/userResult.js';
import userRepos from './api/userRepos.js';
import NavBar from './components/NavBar/NavBar.jsx';
import Discover from './components/Discover/Discover.jsx';
import Footer from './components/Footer/Footer.jsx';
import Results from './components/Results/Results.jsx';
import LoadingResult from './components/LoadingResult.jsx';
import SearchForm from './components/hero/SearchForm.jsx';
import HeroTitle from './components/hero/HeroTitle.jsx';

const App = () => {

  const [resultDisplay, setResultsDisplay] = useState(false);//Checks if results is dislpayed
  const [resultLoading, setResultLoading] = useState(false)
  const [userNotFound, setuserNotFound] = useState(false);
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

  const handleOnSearch = async ({username}) => {

    setResultLoading(true)
    try {
      const [userData, userReposData] = await Promise.all([
        userResult(username),
        userRepos(username),
      ]);

      setResultObject(userData);
      setReposObject(userReposData);
      setResultsDisplay(true);
      setUsers([]);
      setuserNotFound(false)
    }
    catch(err) {
      console.log(err)
      setuserNotFound(true);
      setResultsDisplay(false)
    }
    finally {
      setResultLoading(false)
    }
  };

  console.log(resultObject)
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main className='min-h-screen w-full font-code dot-grid-bg py-15'>
        <div className='max-w-360 w-full flex flex-col items-center gap-4 mx-auto'>
        <div className='w-full flex flex-col items-center justify-center py-10 gap-10 px-4'>
          <HeroTitle />
          <SearchForm onSubmit={handleOnSearch}/>
        </div>
            {resultLoading ? (
              <LoadingResult />
            ) : resultDisplay ? (
              < Results resultObject={resultObject} reposObject={reposObject}/>
            ) : (
              <Discover popularArray={popularUsers} setSearch={setSearch} setUsers={setUsers} userNotFound={userNotFound}/>
            )
            }
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 

export default App;


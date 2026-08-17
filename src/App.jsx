import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import userResult from './API/userResult.js';
import userRepos from './API/userRepos.js';
import NavBar from './components/NavBar/NavBar.jsx';
import Discover from './components/Discover/Discover.jsx';
import Footer from './components/Footer/Footer.jsx';
import Results from './components/Results/Results.jsx';
import LoadingResult from './components/LoadingResult.jsx';
import Hero from './components/hero/Hero.jsx';



const App = () => {

  const [resultDisplay, setResultsDisplay] = useState(false);//Checks if results is dislpayed
  const [resultLoading, setResultLoading] = useState(false)
  const [userNotFound, setuserNotFound] = useState(false);
  const [resultObject, setResultObject] = useState(null);//Return Result Object
  const [reposObject, setReposObject] = useState(null)



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
        <Hero handleOnSearch={handleOnSearch}/>
            {resultLoading ? (
              <LoadingResult />
            ) : resultDisplay ? (
              < Results resultObject={resultObject} reposObject={reposObject}/>
            ) : (
              <Discover userNotFound={userNotFound}/>
            )
            }
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 

export default App;


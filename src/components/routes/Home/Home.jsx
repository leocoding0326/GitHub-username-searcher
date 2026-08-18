import { useState } from "react";
import userResult from '../../../API/userResult.js';
import userRepos from '../../../API/userRepos.js';
import NavBar from '../../NavBar/NavBar.jsx';
import Discover from './Discover/Discover.jsx';
import Footer from '../../Footer/Footer.jsx';
import Results from './Results/Results.jsx';
import LoadingResult from './Results/LoadingResult.jsx';
import Hero from './hero/Hero.jsx';

const Home = () => {

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
  return (
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
  );
};

export default Home;
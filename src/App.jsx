
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './components/routes/Home/Home.jsx'



const App = () => {

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main className='min-h-screen w-full font-code dot-grid-bg py-15'>
        <Home />
      </main>
      
      <Footer />
    </div>
  );
} 

export default App;


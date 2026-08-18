
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/routes/Home/Home';
import About from './components/routes/About/About';
import Contact from './components/routes/Contact/Contact';
import Features from './components/routes/Features/Features';



const App = () => {

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='features' element={<Features/>}></Route>
    </Route>
  )
);

  return <RouterProvider router={router} />
} 

export default App;


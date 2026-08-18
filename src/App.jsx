
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/routes/Home/Home';



const App = () => {

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}></Route>
    </Route>
  )
);

  return <RouterProvider router={router} />
} 

export default App;


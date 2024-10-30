import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Users from './components/Users/Users';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    children: [
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/users',
          loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
          element: <Users></Users>
        }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router={router} />
  </StrictMode>,
)

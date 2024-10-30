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
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';
import Error from './components/Error/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    errorElement: <Error></Error>,
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
        },
        {
          path: '/user/:id',
          loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
          element: <UserDetails></UserDetails>
        },
        {
          path:'/posts',
          loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
          element: <Posts></Posts>
        },
        {
          path:'/posts/:id',
          loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
          element: <PostDetails></PostDetails>
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
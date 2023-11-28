import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './root/Root';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import HeroRegister from './components/heroRegister/HeroRegister';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/heroRegister',
        element:<HeroRegister></HeroRegister>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App></App>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

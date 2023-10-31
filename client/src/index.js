import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SingUp from './components/SingUp/SingUp';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/Login/Login';
const router=createBrowserRouter([
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/singup',
        element:<SingUp/>
    },
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <RouterProvider router={router}/>
 
);



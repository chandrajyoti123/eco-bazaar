import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SingUp from './view/SingUp/SingUp';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './view/Login/Login';
import Home from './view/Home/Home';
import PlaceOrder from './view/PlaceOrder/PlaceOrder';
import MyOrder from './view/MyOrder/MyOrder';

const router=createBrowserRouter([
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/singup',
        element:<SingUp/>
    },
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/placeorder/:_id',
        element:<PlaceOrder/>
    },
    {
        path:'/myorder',
        element:<MyOrder/>
    },
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <RouterProvider router={router}/>
 
);



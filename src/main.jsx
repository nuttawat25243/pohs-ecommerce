import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import "./index.css";
import Home from './pages/Home.jsx';
import ProductFilter from './pages/ProductFilter.jsx'
import Productdetail from './pages/Productdetail.jsx'
import ProductTop from './pages/ProductTop.jsx'
import ProductBottom from './pages/ProductBottom.jsx'
import ProductAcc from './pages/ProductAcc.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/product",
    element: <ProductFilter/>,
  },
   {
     path: "/product/:id",
    element: <Productdetail/>,
   },
   {
    path: "/product/tops",
   element: <ProductTop/>,
  },
  {
    path: "/product/bottoms",
   element: <ProductBottom/>,
  },
  {
    path: "/product/accessories",
   element: <ProductAcc/>,
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />

  </React.StrictMode>,
)

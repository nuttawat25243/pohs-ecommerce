import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Nav from './components/Nav/Nav.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './Home.jsx';
import ProductFilter from './ProductFilter.jsx'
import ProductHome from './Productcomponents/ProductHome.jsx'
import Productdetail from './Productdetail.jsx'

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

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

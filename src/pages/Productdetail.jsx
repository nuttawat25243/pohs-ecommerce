import Nav from '../components/Nav/Nav'
import ProductInfo from '../components/ProductInfo/ProductInfo'
import Gallery from '../components/Gallery/Gallery'
import Product from '../components/Product/Product'
import Banner from '../components/Banner/Banner'
import { useState,useEffect } from 'react'
function Productdetail() {

  return (
    <>
     <Nav />
     <ProductInfo/>  
     <Gallery /> 
     <Product/>
     <Banner />
   </>

  )
}

export default Productdetail

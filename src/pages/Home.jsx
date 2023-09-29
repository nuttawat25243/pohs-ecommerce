import '../Home.css'
import Nav from '../components/Nav/Nav'
 import Header from '../components/Header/Header'
import Product from '../components/Product/Product'
import Banner from '../components/Banner/Banner'
import Gallery from '../components/Gallery/Gallery'
import Footer from '../components/Footer/Footer'
import Review from '../components/Review/Review'
import { useState,useEffect } from 'react'
function Home() {
 
 return (
  <>
      <Nav/>
      <Header />
      <Product/>
      <Banner/>
      <Gallery/>
      <Review /> 
      <Footer />  
      </>
  )
}

 export default Home


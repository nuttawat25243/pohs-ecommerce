import { useState } from 'react'
import './Home.css'
import Header from './components/Header/Header'
import Product from './components/Product/Product'
import Banner from './components/Banner/Banner'
import Gallery from './components/Gallery/Gallery'
import Footer from './components/Footer/Footer'
import Review from './components/Review/Review'
import Nav from './components/Nav/Nav'
import { Link } from 'react-router-dom'


function Home() {

  return (
  
    <div>
      <Nav />
      <Header />
      <Product/>
      <Banner/>
      <Gallery/>
      <Review /> 
      <Footer /> 
    </div>
  )
}

export default Home

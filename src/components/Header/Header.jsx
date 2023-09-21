import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='home'>
    <div  className='container'>
        <div className='grid-container'>
              <div className='feature grid-one '>
              <Link to="/product"><div className='overlay'></div>
                 <img className='' src="/src/img/home1.png" alt="" />
                  <h1 className=' absolute  bottom-0 left-0 text-white text-3xl font-bold p-4 '>Hawaii shirt New Collection</h1></Link>
              </div>
              <div className='feature grid-two'>
              <Link to="/product"><div className='overlay'></div>
                <img src="/src/img/home2.jpg" alt="" />
                <h1 className=' absolute  bottom-0 left-0 text-white text-3xl font-bold p-4 '>SHOP X POHS Collection</h1></Link>
              </div>
              <div className='feature grid-three'>
              <Link to="/product"><div className='overlay'></div>
                 <img src="/src/img/home3.jpg" alt="" />
                 <h1 className=' absolute  bottom-0 left-0 text-white text-3xl font-bold p-4 '>Up to 30% off</h1></Link>
              </div>
          </div>
         
      </div>
        
       
     
    </div>
    
  )
}

export default Header
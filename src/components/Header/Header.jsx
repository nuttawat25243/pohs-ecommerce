import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';
import img1 from '../../img/Img23.png';
import img2 from '../../img/Img22.jpg';
import img3 from '../../img/Img13.jpg';
function Header() { 
  return (
    <div className='home'>
    <div  className='container'>
        <div className='grid-container'>
              <div className='feature grid-one '>
              <Link to="/product"><div className='overlay'></div>
                 <img className='' src={img1} alt="" />
                  <h1 className=' absolute  bottom-0 left-0 text-white text-3xl font-bold p-4 '>ALL COLLECTION</h1></Link>
              </div>
              <div className='feature grid-two'>
              <Link to="/product/bottoms"><div className='overlay'></div>
                <img src={img2} alt="" />
                <h1 className=' absolute  bottom-0 left-0 text-white text-3xl font-bold p-4 '> POHS. BOTTOMS  </h1></Link>
              </div>
              <div className='feature grid-three'>
              <Link to="/product/tops"><div className='overlay'></div>
                 <img src={img3} alt="" />
                 <h1 className=' absolute  bottom-0 left-0 text-white text-3xl font-bold p-4 '>EVERYDAY TOPS</h1></Link>
              </div>
          </div>
         
      </div>
        
       
     
    </div>
    
  )
}

export default Header
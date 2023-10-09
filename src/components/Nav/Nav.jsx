import React,{useState,useRef, useEffect} from 'react'
 import Navmenu from './Navmenu';
 import Navfunction from './Navfunction';
 import Navhamburger from './Navhamburger';
 import NavSearchbutton from './NavSearchbutton';
 import "./Nav.css";

function Nav( ) {
  const [navShow,setNavShow] = useState(false);
  const [searchShow,setSearchShow] = useState(false);
  const handleNavShow = () => {
    setNavShow((prevnavShow) => !prevnavShow);
  };
  const handleSearchShow = () => {
    setSearchShow((prevsearchShow) => !prevsearchShow);
  };
  const navMenuClass = navShow ? 'slide-out' : 'slide-in';
  const searchMenuClass = searchShow ? 'slide-out' : 'slide-in';
  // const cartClass = searchShow ? 'slide-out' : 'slide-in';
  return (
    <div className='sticky top-0 z-50 drop-shadow sm:drop-shadow-none bg-white font-blink '>
       <nav className='bg-black text-white text-center text-sm p-2 '>
            <div className=' max-w-7xl m-auto '>
                <p>Use code <span className='text-yellow-100'>DISCOUNT20</span> for Discount 20% in first purchase.  </p>
            </div>
       </nav>
       <nav>
       <Navfunction  handleNavShow={handleNavShow} handleSearchShow={handleSearchShow} navShow={navShow} searchShow={searchShow} /> 
       <div className={`${navMenuClass}`}  ><Navhamburger /></div>
        <div className={`${searchMenuClass}`}  ><NavSearchbutton /></div>
        </nav>
        <nav>
         <Navmenu/> 
         </nav>
    </div>
  )
}

export default Nav
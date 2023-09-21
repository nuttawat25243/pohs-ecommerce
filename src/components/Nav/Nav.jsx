import React,{useState} from 'react'
import { FiShoppingCart,FiUser,FiSearch } from "react-icons/fi";;
import { Link } from 'react-router-dom';
 import "./Nav.css";
 import Navmenu from '../Nav/Navmenu';



function Nav() {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleButtonClick = () => {
        setIsFormVisible((prevIsFormVisible) => !prevIsFormVisible);
    };
  return (
    <div className=' font-blink z-60'>
       <nav className='bg-black text-white text-center text-sm p-2   '>
            <div className=' max-w-7xl m-auto'>
                <p>Use code <span className='text-yellow-100'>DISCOUNT20</span> for Discount 20% in first purchase.  </p>
            </div>
       </nav>
       <nav className='flex justify-between p-2  items-center max-w-7xl m-auto'>
      
            <div className='logo px-2 rounded-lg text-white text-xl bg-gradient-to-r from-gray-500 to-black '>
                <Link to="/" className='flex  ' ><h1 className=''>P O H S .</h1></Link>
               
            </div>
            <div className='p-4 text-base '>
                <form className='search-box' action="search">
                <input className="text-sm" type="text" placeholder='SEARCH PRODUCTS '  name="" id="" />
                <button><FiSearch /></button>
                </form>
            </div>
            <div className='flex  p-4  text-xl'>
                <ul className=' gap-6'>
                <button className='z-40 mr-4' onClick={handleButtonClick}><FiUser />
                
                 </button>
                 {isFormVisible && (
                    <div className='absolute z-40   -translate-x-64 -translate-y-8  bg-white m-8  p-4 w-60 h-60 border-2 border-black '>
                        <form className='z-30'>
                            <h1>SIGN-IN</h1>
                            <label className='text-sm'>
                                Email address:
                                <input className='w-48 h-6 p-1 border-2 rounded' type="email" />
                            </label>
                                <br />
                            <label className='text-sm'>
                                Password:
                                <input className='w-48 h-6 p-1 border-2 rounded' type="password" />
                            </label>
                            <p className='text-xs text-gray-400 p-1 underline underline-offset-1 '><a  href="">I forget my password</a></p>
                            <button className='my-2 px-2 rounded text-base bg-black text-white' type="submit">LOGIN</button>
                        </form>
                        </div>
                  )}    
                <button><FiShoppingCart /></button>
                <div> </div>
                </ul>
            </div>
       </nav>
       <div>
        <Navmenu/> 
        </div>
    </div>
  )
}

export default Nav
import React from 'react'
import { Link } from 'react-router-dom'
function Navfunction() {
  
  return (
    
       <nav className=' sm:p-2 w-full items-center absolute shadow bg-white'>
            <ul className=' '>
              <Link to="/product/"><li className='text-sm p-2 pl-5 hover:bg-black hover:text-white'>NEW</li></Link>
              <Link to="/product/"><li className='text-sm p-2 pl-5 hover:bg-black hover:text-white'>ALL</li></Link>
              <Link to="/product/tops"><li className='text-sm p-2 pl-5 hover:bg-black hover:text-white'>TOPS</li></Link>
              <Link to="/product/bottoms"><li className='text-sm p-2 pl-5 hover:bg-black hover:text-white'>BOTTOMS</li></Link>
              <Link to="/product/accessories"><li className='text-sm p-2 pl-5 hover:bg-black hover:text-white'>ACESSORIES</li></Link>
         
            </ul>
       
       </nav>

  )
}

export default Navfunction
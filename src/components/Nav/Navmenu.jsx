import React, { useState } from 'react'
import Menu from './Menu';



function Navmenu() {
  
  return (
    <div className=' font-blink   '>
       <nav className=' h-auto   bg-gray-50 text-base  '>
          <div className='flex h-8 items-center text-sm max-w-screen-lg  m-auto justify-center'>
             <Menu/>
          </div>
           
       </nav>
    </div>

  )
}

export default Navmenu
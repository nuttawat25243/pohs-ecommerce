import React, { useState } from 'react'
import { FiChevronDown,FiChevronUp } from "react-icons/fi";;

function Menu() {
  
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAllOpen, setIsAllOpen] = useState(false);
  

  return (
    <ul className=' flex  my-2 text-sm '>
    <li   className='mx-12     hover:bg-black hover:text-white px-1 '>
    <button className=' flex items-center ' onClick={() => setNav((prev) => !prev)}  >
          <h1 className='pr-1'>NEW</h1>
          { !isNavOpen ? ( 
              <FiChevronDown  />
            ):(
            <FiChevronUp />
            )}
            { isNavOpen &&  
                       <div className='w-full   flex  absolute left-0 top-40 z-10  text-black w-full  bg-white  mmax-w-screen-lg  m-auto text-left   '>
                         <div className='flex mx-auto'> 
                         <div className='w-56  pl-10  mt-2  text-sm  ml-auto '>
                             <ul>
                               <li className='border-b-2 pb-2 mt-2 font-bold'>CATAGORIES</li>
                               <li className='mt-2'>NEW ARRIVALS</li>
                               <li className='mt-2'>SHOP X POHS</li>
                               <li className='mt-2'>BACK IN STOCK</li>
                               <li className='mt-4'>SHOP ALL NEW</li>
                             </ul>
                         </div>
                         <div className=' w-4/5  mt-4 pl-4 text-sm '>
                               <div className='font-bold pl-2 '>FEATURED</div>
                                <div className='grid grid-cols-3  max-w-screen-md '>
                                  <div className=' p-2 mt-2  '>
                                  <a  className=' ' href=""><img  src="/src/img/navnew1.png" alt="" /></a>
                                  <div className='p-1'>
                                  <p className='mt-2 text-xs bg-gray-100 w-8 px-1'>NEW</p>
                                  <h1 className='font-bold'>Hawaii shirt New Collection</h1>
                                  <p>$29</p>
                                  <p></p>
                                  </div>
                                  </div>
                                  <div  className=' p-2 mt-2 '>
                                  <a className=' ' href=""><img src="/src/img/navnew2.png" alt="" /></a>
                                  <div className='p-1'>
                                  <p className='mt-2 text-xs bg-gray-100 w-8 px-1'>NEW</p>
                                  <h1 className='font-bold'>Hawaii shirt New Collection</h1>
                                  <p>$29</p>
                                  <p></p>
                                  </div>
                                  </div>
                                  <div className=' p-2 mt-2 '>
                                  <a className=' ' href=""><img src="/src/img/navnew3.png" alt="" /></a>
                                  <div className='p-1'>
                                  <p className='mt-2 text-xs bg-gray-100 w-8 px-1'>NEW</p>
                                  <h1 className='font-bold'>Hawaii shirt New Collection</h1>
                                  <p>$29</p>
                                  <p></p>
                                  </div>
                                  </div>
                                </div>
                                </div>
                                </div>
                              </div>
                      
                      }
    </button>
  </li>
  <li   className='mx-12     hover:bg-black hover:text-white px-1 '>
    <button className=' flex items-center ' onClick={() => setIsAllOpen((prev) => !prev)} >
          <h1 className='pr-1'>NEW</h1>
          { !isAllOpen ? ( 
              <FiChevronDown  />
            ):(
            <FiChevronUp />
            )}
            { isAllOpen &&  
                       <div className='w-full   flex  absolute left-0 top-40 z-10  text-black w-full  bg-white  mmax-w-screen-lg  m-auto text-left   '>
                         <div className='flex mx-auto'> 
                         <div className='w-56  pl-10  mt-2  text-sm  ml-auto '>
                             <ul>
                               <li className='border-b-2 pb-2 mt-2 font-bold'>CATAGORIES</li>
                               <li className='mt-2'>NEW ARRIVALS</li>
                               <li className='mt-2'>SHOP X POHS</li>
                               <li className='mt-2'>BACK IN STOCK</li>
                               <li className='mt-4'>SHOP ALL NEW</li>
                             </ul>
                         </div>
                         <div className=' w-4/5  mt-4 pl-4 text-sm '>
                               <div className='font-bold pl-2 '>FEATURED</div>
                                <div className='grid grid-cols-3  max-w-screen-md '>
                                  <div className=' p-2 mt-2  '>
                                  <a  className=' ' href=""><img  src="/src/img/navnew1.png" alt="" /></a>
                                  <div className='p-1'>
                                  <p className='mt-2 text-xs bg-gray-100 w-8 px-1'>NEW</p>
                                  <h1 className='font-bold'>Hawaii shirt New Collection</h1>
                                  <p>$29</p>
                                  <p></p>
                                  </div>
                                  </div>
                                  <div  className=' p-2 mt-2 '>
                                  <a className=' ' href=""><img src="/src/img/navnew2.png" alt="" /></a>
                                  <div className='p-1'>
                                  <p className='mt-2 text-xs bg-gray-100 w-8 px-1'>NEW</p>
                                  <h1 className='font-bold'>Hawaii shirt New Collection</h1>
                                  <p>$29</p>
                                  <p></p>
                                  </div>
                                  </div>
                                  <div className=' p-2 mt-2 '>
                                  <a className=' ' href=""><img src="/src/img/navnew3.png" alt="" /></a>
                                  <div className='p-1'>
                                  <p className='mt-2 text-xs bg-gray-100 w-8 px-1'>NEW</p>
                                  <h1 className='font-bold'>Hawaii shirt New Collection</h1>
                                  <p>$29</p>
                                  <p></p>
                                  </div>
                                  </div>
                                </div>
                                </div>
                                </div>
                              </div>
                      
                      }
    </button>
  </li>
  </ul>
  
  )
}

export default Menu
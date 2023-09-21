import React, { useState } from 'react'
import { FiChevronDown,FiChevronUp } from "react-icons/fi";;

function Testmorer() {
  const buttonData = [
    { id: 1, name: 'NEW' },
    { id: 2, name: 'ALL' },
    { id: 3, name: 'TOPS' },
    { id: 4, name: 'BOTTOMS' },
    { id: 5, name: 'Button Five' },
    { id: 6, name: 'Button Six' },
  ];

  const [buttonStates, setButtonStates] = useState(
    buttonData.map((button) => ({ id: button.id, isActive: false }))
  );

  const handleButtonClick = (buttonId) => {
    const newButtonStates = buttonStates.map((button) => ({
      ...button,
      isActive: button.id === buttonId ? !button.isActive : false,
    }));
    setButtonStates(newButtonStates);
  };


 

  return (
    <div>
      {buttonData.map((button) => (
        <button
          key={button.id}
          onClick={() => handleButtonClick(button.id)}
          className={buttonStates.find((b) => b.id === button.id)?.isActive ? 'active' : ''}
        >
          <h1 className='flex'> 
            {button.name}
           { !button.isActive ? ( <FiChevronDown className='mt-1 ml-1 text-sm'  />):(<FiChevronUp />)}
          </h1>
          { button.isActive &&  
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
      ))}
      {/* {buttonStates.map((button, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(index)}
          className={button.isActive ? 'active' : ''}
        >
            {button.data}

          { !isActive ? ( 
              <FiChevronDown  />
            ):(
            <FiChevronUp />
            )}
                  { button.isActive &&  
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
      ))} */}
    </div>
  );
}

export default Testmorer;
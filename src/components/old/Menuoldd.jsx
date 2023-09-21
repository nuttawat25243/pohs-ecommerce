import React, { useState } from 'react'
import { FiChevronDown,FiChevronUp } from "react-icons/fi";;

function Testmore() {
  const numButtons = 6; // Number of buttons

  // Define a constant with the button names

  const buttonNames = [
    'NEW',
    'ALL',
    'TOPS',
    'BOTTOMS',
    'ACCESSORIES',
    'SALE',
  ];

  // Initialize the button states with names
  const initialButtonStates = Array.from({ length: numButtons }, (_, index) => ({
    isActive: false,
    data: `Button ${index + 1} Data`,
    name: buttonNames[index], // Use the name from the constant
  }));

  const [buttonStates, setButtonStates] = useState(initialButtonStates);

  const handleButtonClick = (buttonIndex) => {
    const newButtonStates = [...buttonStates]; // Create a copy of the buttonStates array
    newButtonStates[buttonIndex].isActive = !newButtonStates[buttonIndex].isActive; // Toggle the state of the clicked button

    // Untoggle the other buttons if the clicked button is active
    if (newButtonStates[buttonIndex].isActive) {
      for (let i = 0; i < numButtons; i++) {
        if (i !== buttonIndex) {
          newButtonStates[i].isActive = false;
        }
      }
    }

    setButtonStates(newButtonStates); // Update the state
  };

  return (
    <div className=''>
      {buttonStates.map((button, index) => (
        <button key={index} onClick={() => handleButtonClick(index)}
          className={button.isActive ? 'active bg-black text-white rounded ' : '  '}>
          <div className='flex px-4 mx-2 my-1  rounded hover:bg-black hover:text-white '>
                {button.name}
               <span className='p-1 text-sm '>{ !button.isActive ? ( <FiChevronDown  />):(<FiChevronUp />)}</span>
          </div>
          <div>
               {button.isActive &&  
                    <div className='w-full   flex  absolute left-0 top-40 z-10  text-black w-full  bg-white    m-auto text-left   '>
                      <div className='flex mx-auto'> 
                        <div className='w-56  pl-10  mt-2  text-sm  ml-auto '>
                           <ul>
                             <li className='border-b-2 pb-2 mt-2 font-bold'>{button.name}CATAGORIES</li>
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
                </div>
        </button>
      ))}
    </div>
  );
}


     

export default Testmore;
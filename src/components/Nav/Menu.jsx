import React, { useState } from 'react'
import { FiChevronDown,FiChevronUp } from "react-icons/fi";;
import Img1 from "../../img/navnew1.png";
import Img2 from "../../img/navnew2.png";
import Img3 from "../../img/navnew3.png";
import Img4 from "../../img/navall1.jpg";
import Img5 from "../../img/navall2.jpg";
import Img6 from "../../img/navall3.jpg";
import Img7 from "../../img/navtop1.jpeg";
import Img8 from "../../img/navtop2.jpg";
import Img9 from "../../img/navtop3.png";
import Img10 from "../../img/navbottom1.png";
import Img11 from "../../img/navbottom2.png";
import Img12 from "../../img/navbottom3.png";
import Img13 from "../../img/navacc1.png";
import Img14 from "../../img/navacc2.png";
import Img15 from "../../img/navacc3.png";
import { Link } from 'react-router-dom';


function Menu() {
  const numButtons = 6; // Number of buttons

  // Define a constant with the button names
  const buttonName = [
    { id: 1, 
      names: 'NEW' , 
      catagories1:"ALL ARRIVALS" , 
      catagories2:"EVERYDAY TOPS",
      catagories3:"POHS. BOTTOMS",
      catagories4:"POHS. ACCESSORIES", 
      catagories5:"SHOP ALL", 
      img1:Img1,
      img2:Img2,
      img3:Img3,
      tag1:"NEW",
      tag2:"NEW",
      tag3:"NEW",
      product1:"Hawaii shirt New Collection",
      product2:"Hawaii shirt New Collection",
      product3:"Hawaii shirt New Collection",
      link1: 6,
      link2: 8,
      link3: 5,
      price1:"999",
      price2:"999",
      price3:"999",
    },
    { id: 2, 
      names: 'ALL',
      catagories1:"" , 
      catagories2:"TOPS",
      catagories3:"BOTTOMS", 
      catagories4:"", 
      catagories5:"SHOP ALL", 
      img1:Img4,
      img2:Img5,
      img3:Img6,
      tag1:"TRENDING",
      tag2:"NEW",
      tag3:"NEW",
      product1:"Hawaii shirt New Collection",
      product2:"Hawaii shirt New Collection",
      product3:"Hawaii shirt New Collection",
      link1: 3,
      link2: 5,
      link3: 10,
      price1:"999",
      price2:"1399",
      price3:"1699",},
    { id: 3, 
      names: 'TOPS',
      catagories1:"TOPS" , 
      catagories3:"SHOP ALL",
      catagories4:"", 
      img1:Img7,
      img2:Img8,
      img3:Img9,
      tag1:"NEW",
      tag2:"NEW",
      tag3:"NEW",
      product1:"Hawaii shirt New Collection",
      product2:"Hawaii shirt New Collection",
      product3:"Hawaii shirt New Collection",
      link1: 1,
      link2: 2,
      link3: 3,
      price1:"999",
      price2:"1399",
      price3:"1699", },
    { id: 4, 
    names: 'BOTTOMS',
    catagories1:"" , 
    catagories3:"BOTTOMS",
    catagories5:"SHOP ALL", 
    img1:Img10,
    img2:Img11,
    img3:Img12,
    tag1:"NEW",
    tag2:"NEW",
    tag3:"NEW",
    product1:"Hawaii shirt New Collection",
    product2:"Hawaii shirt New Collection",
    product3:"Hawaii shirt New Collection",
    link1: 7,
    link2: 9,
    link3: 10,
    price1:"999",
    price2:"1399",
    price3:"1699", },
    { id: 5, 
    names: 'ACCESSORIES',
    catagories4:"ACCESSORIES" , 
    catagories5:"SHOP ALL",
    img1:Img13,
    img2:Img14,
    img3:Img15,
    tag1:"NEW",
    tag2:"NEW",
    tag3:"NEW",
    product1:"Hawaii shirt New Collection",
    product2:"Hawaii shirt New Collection",
    product3:"Hawaii shirt New Collection",
    link1: 12,
    link2: 11,
    link3: 13,
    price1:"999",
    price2:"1399",
    price3:"1699", },
   
  ];

  const initialButtonStates = buttonName.map((button) => ({
    id: button.id,
    isActive: false,
    name: button.names,
    catagories1:button.catagories1,
    catagories2:button.catagories2,
    catagories3:button.catagories3,
    catagories4:button.catagories4,
    catagories5:button.catagories5,
    img1:button.img1,
    img2:button.img2,
    img3:button.img3,
    img4:button.img4,
    img5:button.img5,
    img6:button.img6,
    tag1:button.tag1,
    tag2:button.tag2,
    tag3:button.tag3,
    product1:button.product1,
    product2:button.product2,
    product3:button.product3,
    link1: button.link1,
    link2: button.link2,
    link3: button.link3,
    price1:button.price1,
    price2:button.price2,
    price3:button.price3,
  }));

  const [buttonStates, setButtonStates] = useState(initialButtonStates);

  const handleButtonClick = (buttonId) => {
    const newButtonStates = [...buttonStates]; // Create a copy of the buttonStates array
    const clickedButton = newButtonStates.find((button) => button.id === buttonId);

    // Untoggle the other buttons if the clicked button is active
    if (clickedButton) {
      clickedButton.isActive = !clickedButton.isActive; // Toggle the state of the clicked button

      // Untoggle the other buttons if the clicked button is active
      if (clickedButton.isActive) {
        newButtonStates.forEach((button) => {
          if (button.id !== buttonId) {
            button.isActive = false;
          }
        });
      }

      setButtonStates(newButtonStates); // Update the state
    }
  };

  return (
    <div className='flex'>
        {buttonStates.map((button, index) => (
          <div key={index} className="">
            <button
              onClick={() => handleButtonClick(button.id)}
              className={button.isActive ? 'active bg-gray-50 rounded-t' : ''}
            >
              <div className='flex px-2 mx-2 my-1 rounded hover:bg-gray-50'>
                {button.name}
                <span className='p-1 text-sm '>
                  {!button.isActive ? <FiChevronDown /> : <FiChevronUp />}
                </span>
              </div>
            </button>
            <div className='clicked absolute left-0 top-38 z-10 text-black w-full bg-white  border-gray-200 m-auto text-left' >
                <div  className={`${ button.isActive ? 'inline' : 'hidden'}   `}>
                    <div className='w-full   flex  absolute left-0 top-38 z-10  text-black w-full  bg-white border-b-2 border-gray-200    m-auto text-left   '>
                            <div className='flex mb-8 mx-auto'> 
                              <div className='w-56  pl-10  mt-2  text-sm  ml-auto '>
                                <ul>
                                  <li className='border-b-2 pb-2 mt-2 font-bold'>CATAGORIES</li>
                                  <li className='mt-2'><Link  onClick={() => window.top(0, 0)} to="/product">{button.catagories1}</Link></li>
                                  <li className='mt-2'><Link  onClick={() => window.top(0, 0)} to="/tops">{button.catagories2}</Link></li>
                                  <li className='mt-2'><Link  onClick={() => window.top(0, 0)} to="/bottoms">{button.catagories3}</Link></li>
                                  <li className='mt-2'><Link  onClick={() => window.top(0, 0)} to="/accessories">{button.catagories4}</Link></li>
                                  <li className='mt-2'><Link  onClick={() => window.top(0, 0)} to="/product">{button.catagories5}</Link></li>
                                  
                                </ul>
                              </div>
                              <div className=' w-4/5  mt-4 pl-4 text-sm '>
                                  <div className='font-bold pl-2 '>FEATURED</div>
                                    <div className='grid grid-cols-3  max-w-screen-md '>
                                        <div className=' p-2 mt-2  '>
                                        <Link  onClick={() => window.top(0, 0)} to={`/product/${button.link1}`}><img  src={button.img1} alt="" /></Link>
                                            <div className='p-1'>
                                            <p className='inline  text-xs bg-gray-100  px-1'>{button.tag1}</p>
                                            <h1 className='font-bold pl-0.5'>{button.product1}</h1>
                                            <p className='pl-0.5'>฿{button.price1} THB</p>
                                            </div>
                                        </div>
                                        <div  className=' p-2 mt-2 '>
                                        <Link  onClick={() => window.top(0, 0)} to={`/product/${button.link2}`}><img src={button.img2} alt="" /></Link>
                                            <div className='p-1'>
                                            <p className='inline  text-xs bg-gray-100  px-1'>{button.tag2}</p>
                                            <h1 className='font-bold pl-0.5'>{button.product2}</h1>
                                            <p className='pl-0.5'>฿{button.price2} THB</p>
                                        </div>
                                    </div>
                                    <div className=' p-2 mt-2 '>
                                    <Link  onClick={() => window.top(0, 0)} to={`/product/${button.link3}`}><img src={button.img3} alt="" /></Link>
                                        <div className='p-1'>
                                        <p className=' inline  text-xs bg-gray-100  px-1'>{button.tag3}</p>
                                        <h1 className='font-bold pl-0.5'>{button.product3}</h1>
                                        <p className='pl-0.5'>฿{button.price3} THB</p>
                                        <p></p>
                                        </div>
                                    </div>
                                </div>
                              </div>
                        </div>
                    </div>
                  </div>
        </div>
      </div>
    ))}
  </div>
);
}
     

export default Menu;
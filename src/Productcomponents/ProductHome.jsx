import React,{useState}from 'react'
import ProductHomeItem from "../Productcomponents/ProductHomeItem";
import { FiChevronDown,FiChevronUp } from "react-icons/fi";;
import { Link } from 'react-router-dom';
function ProductHome() {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
  
    const toggleDropdown1 = () => {
      setIsOpen1(!isOpen1);
    };
  
    const toggleDropdown2 = () => {
      setIsOpen2(!isOpen2);
    };
  
    const toggleDropdown3 = () => {
      setIsOpen3(!isOpen3);
    };
  
    const toggleDropdown4 = () => {
      setIsOpen4(!isOpen4);
    };
  return (
    <div className='font-blink'> 
        <div className='max-w-7xl m-auto text-sm '>
            <h1 className='p-4'>HOME</h1>
        </div>
        <hr />
        <div className='max-w-7xl m-auto text-sm my-8 '>
          <div className='flex'>
            <div className='w-1/5 p-4 mr-8 '>
              <h1 className='border-b-2 pb-4 text-lg '>FILTERS</h1>
              <ul>
                <li className='  border-b-2 py-4 '>
                 <button  className={`flex justify-between w-44${isOpen1 ? ' underline ' : ''}`}  onClick={toggleDropdown1} > CATAGORY  <FiChevronDown  className={` pt-1 text-lg ${isOpen1 ? 'transform rotate-180 mt-1' : ''}`}/></button>
                 {isOpen1 && (
                   <ul className='p-4 text-sm '>
                    <li className='py-1'>SHIRT</li>
                    <li className='py-1'>HOODIES</li>
                    <li className='py-1'>SWEATSHIRT</li>
                    <li className='py-1'>JACKET</li>
                    <li className='py-1'>JEANS</li>
                    <li className='py-1'>CHINO</li>
                    <li className='py-1'>GLASSES</li>
                    <li className='py-1'>BEANIE</li>
                   </ul>
                  )}  
                </li>
                <li className='  border-b-2 py-4 '>
                 <button  className={`flex justify-between w-44${isOpen2 ? ' underline ' : ''}`} onClick={toggleDropdown2} > <h1 className='pr-1'>COLOR</h1>  <FiChevronDown  className={` pt-1 text-lg ${isOpen2 ? 'transform rotate-180 mt-1 ' : ''}`}/></button>
                 {isOpen2 && (
                   <ul className='p-4 text-sm '>
                    <li className='py-1'>WHITE</li>
                    <li className='py-1'>BLACK</li>
                    <li className='py-1'>GREEN</li>
                    <li className='py-1'>BLUE</li>
                    <li className='py-1'>ORANGE</li>
                    <li className='py-1'>BEIGE</li>
                    <li className='py-1'>PATTERN</li>
                     </ul>
                  )}  
                </li>
                <li className='  border-b-2 py-4 '>
                 <button  className={`flex justify-between w-44${isOpen3 ? ' underline ' : ''}`} onClick={toggleDropdown3} > SIZE  <FiChevronDown  className={` pt-1 text-lg ${isOpen3 ? 'transform rotate-180 mt-1' : ''}`}/></button>
                 {isOpen3 && (
                   <ul className='p-4 text-sm '>
                    <li className='py-1'>XS</li>
                    <li className='py-1'>S</li>
                    <li className='py-1'>M</li>
                    <li className='py-1'>L</li>
                    <li className='py-1'>XL</li>
                   </ul>
                  )}  
                </li>
                <li className='  border-b-2 py-4 '>
                 <button  className={`flex justify-between w-44${isOpen4 ? ' underline ' : ''}`} onClick={toggleDropdown4} > PRICE  <FiChevronDown  className={` pt-1 text-lg ${isOpen4 ? 'transform rotate-180 mt-1' : ''}`}/></button>
                 {isOpen4 && (
                   <ul className='p-4 text-sm '>
                    <li className='py-1'>$ 0-10</li>
                    <li className='py-1'>$ 10-20</li>
                    <li className='py-1'>$ 20-30</li>
                    <li className='py-1'>$ 30-40</li>
                    <li className='py-1'>$ 40-50</li>
                
                   </ul>
                  )}  
                </li>
             
              </ul>

            </div >
            <div className='w-full'>
           <div className='flex flex-wrap p-4 gap-12'>
               <ProductHomeItem />


              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductHome
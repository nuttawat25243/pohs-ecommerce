import Input from "./Input";
import { FiChevronDown } from "react-icons/fi";;
import {useState}from 'react'

function Category  ({ handleChange })  {
 const [isOpen, setIsOpen] = useState(false);
 const toggleDropdown = () => {
    setIsOpen(!isOpen);
 };
  return (
    <>
      <div className='font-blink text-sm  flex  lg:border-b-2'>
         <div className='w-full lg:w-48  py-4 truncate lg:p-0 pl-8 '>
           <button className={`flex justify-between w-full lg:py-4 ${isOpen ? ' underline ' : ''}`} 
              onClick={toggleDropdown} >  CATAGORY  
              <FiChevronDown  className={` pt-1 text-lg ${isOpen ? 'transform rotate-180 mt-1' : ''}`}/>
            </button>
        {isOpen && (
        <ul className=' p-4 text-sm '>
        <li>
          <label className="flex">
            <input  className="appearance-none" onChange={handleChange} type="radio" value="" name="test" />
            <span className="py-1 hover:underline cursor-pointer">ALL</span>
          </label>
        </li>
        <li className='py-1'><Input  
              handleChange={handleChange}
              value="tops"
              title="TOPS"
              name="test"
            />
        </li>
        <li className='py-1'><Input 
              handleChange={handleChange}
              value="bottoms"
              title="BOTTOMS"
              name="test"
            />
          </li>
 
              <li className='py-1'><Input 
              handleChange={handleChange}
              value="accessories"
              title="ACCESSORIES"
              name="test"
            /></li>
        </ul>
             )} 
         </div>
      </div>
    </>
  );
};

export default Category;
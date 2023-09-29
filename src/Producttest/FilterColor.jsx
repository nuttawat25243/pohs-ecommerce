import Input from "./Input";
import { FiChevronDown } from "react-icons/fi";;
import {useState}from 'react'

function Color  ({ handleChange }) {
  const [isOpen1, setIsOpen1] = useState(false);
  const toggleDropdown1 = () => {
     setIsOpen1(!isOpen1);
  };
  return (
    <>

          <div className='font-blink text-sm   flex lg:border-b-2'>
            <div className='w-full lg:w-48  py-4 truncate lg:p-0 pl-8  '>
              <button className={`flex justify-between w-full lg:py-4  ${isOpen1 ? ' underline ' : ''}`} 
                 onClick={toggleDropdown1} >COLOR  
                <FiChevronDown  className={` pt-1 text-lg ${isOpen1 ? 'transform rotate-180 mt-1' : ''}`}/>
              </button>
              {isOpen1 && (
        <ul className=' p-4 text-sm '>
        <li>
            <label className="flex">
              <input className="appearance-none" onChange={handleChange}  type="radio" value="" name="test1" />
              <span className="py-1 hover:underline cursor-pointer"></span>
            </label>
        </li>
        <li className='py-1'>
        <Input
          handleChange={handleChange}
          value="black"
          title="BLACK"
          name="test1"
        />
        </li>
        <li className='py-1'>
        <Input
          handleChange={handleChange}
          value="blue"
          title="BLUE"
          name="test1"
        />
        </li>
        <li className='py-1' >
        <Input
          handleChange={handleChange}
          value="beige"
          title="BEIGE"
          name="test1"
        />
        </li>
        <li className='py-1'>
        <Input
          handleChange={handleChange}
          value="green"
          title="GREEN"
          name="test1"
        />
        </li>
        <li className='py-1'>   
             <Input
          handleChange={handleChange}
          value="orange"
          title="ORANGE"
          name="test1"
        />
        </li>
        <li className='py-1'>   
        <Input
          handleChange={handleChange}
          value="white"
          title="WHITE"
          name="test1"
        />
        </li>
        </ul>
         )} 
         </div>
      </div>
    </>
  );
};

export default Color;
import Input from "./Input";
import {useState}from 'react'
import { FiChevronDown } from "react-icons/fi";;

function Price  ({ handleChange })  {

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
     setIsOpen(!isOpen);
    };
  return (
    <>
      <div className='font-blink text-sm  flex  lg:border-b-2'>
      <div className='w-full lg:w-48   py-4 truncate  lg:p-0 pl-8'>
      <button className={`flex  justify-between w-full lg:py-4 ${isOpen ? ' underline ' : ''}`} 
              onClick={toggleDropdown} >PRICE  
              <FiChevronDown  className={`   pt-1  text-lg ${isOpen ? 'transform rotate-180 mt-1' : ''}`}/>
            </button>
        {isOpen && (
        <ul  className=' p-4 text-sm '>
        <li>
        <label className="flex">
          <input className="appearance-none" onChange={handleChange} type="radio" value="" name="test2" />
          <span className='py-1 '>ALL</span>
        </label>
        </li>
        <li className='py-1 whitespace-nowrap'>
        <Input
          handleChange={handleChange}
          value="1000"
          title="0 - 1,000 THB"
          name="test2"
        />
        </li>
        <li className='py-1 whitespace-nowrap'>
        <Input 
          handleChange={handleChange}
          value="2000"
          title="1,000 - 2,000 THB"
          name="test2"
        />
        </li>
        </ul>
        )} 
        </div>
      </div>
    </>
  );
};

export default Price;
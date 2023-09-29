import Category from "./FilterCategory";
import Price from "./FilterPrice";
import Colors from "./FilterColor";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";;

const Sidebar = ({ handleChange }) => {
    const [isOpenFilter, setIsOpenFilter] = useState(false);
    const toggleDropdownFilter = () => {
       setIsOpenFilter(!isOpenFilter);
    };
  return (
     <section className='font-blink w-full  lg:w-1/5 mr-8  '>
          <button className={`flex gap-4 pl-8 p-4  font-bold lg:hidden w-full ${isOpenFilter ? ' underline ' : ''}`} 
              onClick={toggleDropdownFilter} >  FILTERS  
              <FiChevronDown  className={` pt-1 text-lg ${isOpenFilter ? 'transform rotate-180 mt-1' : ''}`}/>
            </button>
            <hr  className="lg:hidden"/>
          <h1 className=' border-b-2 pb-4  font-bold hidden lg:block   '>FILTERS</h1>
          {isOpenFilter && (
            <div className="absolute   bg-white w-full">
              <div className="">
                <Category handleChange={handleChange} /><hr />
                <Colors handleChange={handleChange} /><hr />
                <Price handleChange={handleChange} /><hr />
            </div>
          </div>
          )}
              <div className="hidden  lg:block">
          <Category handleChange={handleChange} />
          <Colors handleChange={handleChange} />
          <Price handleChange={handleChange} />
          </div>
          
     </section>
  );
};

export default Sidebar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import Account from './Account';
import Cart from './Cart';

import { IoSearchOutline, IoReorderThreeOutline, IoCloseOutline } from 'react-icons/io5';

function Navfunction({ handleNavShow,handleSearchShow, navShow,searchShow }) {
  const [closeButtonVisible, setCloseButtonVisible] = useState(false);

  const handleReorderClick = () => {
    if (searchShow){
      handleSearchShow();
    }
    handleNavShow();
    setCloseButtonVisible(!closeButtonVisible);
  };
  const handleResearchClick = () => {
    if (navShow){
      handleNavShow();
    }
    handleSearchShow();
  };
  return (
    <nav className='flex justify-between sm:p-2 items-center max-w-7xl m-auto'>
      <div className='mx-2 flex sm:hidden'>
      {!closeButtonVisible && (<button onClick={handleReorderClick} className='m-2 '>
          <IoReorderThreeOutline size={'32'} />
        </button> )}
        {closeButtonVisible && (
          <button onClick={handleReorderClick} className=' m-2'>
            <IoCloseOutline size={'32'} />
          </button>
        )}
        <button onClick={handleResearchClick} className='m-2 '>
          <IoSearchOutline size={'22'} />
        </button>
      </div>

      <div className='logo px-2 rounded-lg text-white text-xl bg-gradient-to-r from-gray-500 to-black hidden sm:block'>
        <Link to='/' className='flex '>
          <h1 className=''>P O H S .</h1>
        </Link>
      </div>
      <Search />
      <div className='logo px-2 rounded-lg text-white text-xl bg-gradient-to-r from-gray-500 to-black sm:hidden'>
        <Link to='/' className='flex '>
          <h1 className=''>P O H S .</h1>
        </Link>
      </div>
    <div className='flex p-4 text-xl '>
      <Account  />
      <Cart />
      </div>
    </nav>
  );
}

export default Navfunction;

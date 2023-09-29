import React, { useState,useContext } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import {  IoCloseOutline } from 'react-icons/io5';
function Cart() {
  const [openCart,setOpenCart] = useState(false);
   const [quantity, setQuantity] = useState(1);
   const handleCartClick = () => {
    setOpenCart(!openCart);
   }
  return (
    <div>
     <div className='flex p-4 text-xl sm:gap-6'>
        <button onClick={handleCartClick}> 
          <FiShoppingCart />
        </button>
    </div>
    <div>
     {openCart && (
            <div className='absolute z-30 top-0 right-0 bg-white w-1/4 h-screen'>
                  <div className='flex justify-between'>
                  <h1>Your Shopping Cart </h1>
                  <button onClick={handleCartClick} className=' m-2'>
                    <IoCloseOutline size={'32'} />
                  </button>
                  </div>
                  <div>
                       {/* {cartItem.map((item, id) => (
                        <div key={id} className="">
                          <div className="">
                            <img src={item.img} alt="product" />
                          </div>
                          <div className="">
                            <p className="">{item.description}</p>
                          </div>
                          <div className="">
                               <span>asd</span>
                          </div>
                        </div>
                      ))}   */}asd
                  </div>
        </div> 
        )} 
        </div> 
    </div>
  );
}

export default Cart;

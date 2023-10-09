import React, { useState } from 'react';
import { BsFillBagFill,BsTrashFill } from "react-icons/bs";
import {  IoCloseOutline } from 'react-icons/io5';
 import { useSelector } from 'react-redux'; 
 import { useDispatch } from 'react-redux';
 import { Link } from 'react-router-dom';
 import { removeFromCart  } from '../store/features/CartSlice';
 import { increaseQuantity  } from '../store/features/CartSlice';
 import { decreaseQuantity  } from '../store/features/CartSlice';
 import { totalCartItem } from '../store/features/CartSelector';
 import { totalPrice } from '../store/features/CartSelector';
 import "./Cart.css";
function Cart() {
  const [openCart,setOpenCart] = useState(false);
  const dispatch = useDispatch();
  const selectCartItems = (state) => state.cart.items;
  const cartItems = useSelector(selectCartItems);
  const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
  const handleClickCart = () => {
    setOpenCart(!openCart); 
  };
  const totalCartQuantity = useSelector(totalCartItem);
  const Price = useSelector(totalPrice);
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
    const itemIndexToRemove = savedCartItems.findIndex(cartItem => cartItem.id === item.id && cartItem.size === item.size);

    if (itemIndexToRemove !== -1) {
      savedCartItems.splice(itemIndexToRemove, 1);
      localStorage.setItem("cartItems", JSON.stringify(savedCartItems));
    }
  };
  const handleIncreaseQuantity = (item) => {
    dispatch(increaseQuantity({ id: item.id, size: item.size }));
  };
  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseQuantity({ id: item.id, size: item.size }));
  };

  return (
    <div>
     <h1 className=' p-4 text-xl sm:gap-6'>
        <button className='flex' onClick={handleClickCart}> 
          <BsFillBagFill  size={'20'} />
          <div   className=' absolute  pl-1 pt-1 text-xs w-4 h-4 text-white   ' >{totalCartQuantity}</div>
        </button> 
    </h1>
    <div>
    {openCart && (
          <div className="absolute flex flex-col  z-40 top-0 right-0 bg-white lg:w-1/3 h-screen max-w-xs onepxborder">
            <div className='content-between h-full  '>
            <div className='flex justify-between  bg-gray-100 text-black     '>
              <h1 className='text-base p-1.5  font-bold  z-50   '>CART({totalCartQuantity})</h1>
              <button onClick={handleClickCart} className='px-2 text-sm underline  font-bold'>
                CLOSE
              </button>
            </div>
            {cartItems&&savedCartItems && savedCartItems.map((item) => (
            <div key={item.id} className="">
                  <div className='flex p-2 bg-white w-full  bot-border '>  
                  <span><img className='min-w-24 w-40 ' src={item.img} alt="" /></span>
                  <ul className='text-sm w-full ml-2 font pl-2 '>
                    <li className='font-semibold'>{item.name} </li>
                    <li>Size: {item.size} </li>
                    <li>Price: {item.price} THB </li>
                    <li className=' w-max flex mt-2'>
                    <button onClick={() => handleDecreaseQuantity(item)} 
                    className='px-2 onepxborder border-gray-500'>-</button>
                    <p className='px-2 y-border border-gray-500'>{item.quantity}</p> 
                    <button onClick={() => handleIncreaseQuantity(item)} 
                    className='px-2 onepxborder border-gray-500'>+</button></li>
                  </ul>
                  <button className='flex w-4 cursor-pointer text-2xl mt-0.5' 
                    onClick={() => handleRemoveFromCart(item)}><BsTrashFill size={'16'}/>
                  </button>
                 </div>
             </div>
            ))}
          </div>

          <footer className='content-end bg-gray-100 h-24 pt-2 text-center w-full  '>
            <div className='flex justify-between p-2 mx-2'>
                <p className='text-sm'>TOTAL </p>
                <p className='text-sm'> {Price} THB </p>
            </div>
            <Link to="/checkout"><button className='bg-black text-white  text-sm w-5/6 h-8  '>CHECK OUT</button></Link>
          </footer>   
          </div>
        )}
        </div> 
        
    </div>
  );
}

export default Cart;

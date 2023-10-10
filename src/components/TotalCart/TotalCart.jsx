import React from 'react'
import { Link } from 'react-router-dom';
import "../TotalCart/TotalCart.css"
import { useSelector } from 'react-redux';
import { BsTrashFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { removeFromCart  } from '../store/features/CartSlice';
import { increaseQuantity  } from '../store/features/CartSlice';
import { decreaseQuantity  } from '../store/features/CartSlice';
import { totalCartItem } from '../store/features/CartSelector';
import { totalPrice } from '../store/features/CartSelector';
function TotalCart() {
  const selectCartItems = (state) => state.cart.items;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
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
    <div className='max-w-5xl px-4 m-auto block'>
      <div className='text-center p-4 font-bold h-auto '>
              <h1>CHECK OUT</h1>
      </div>
      <div className='flex gap-4 '>
          <main className='w-full h-[42rem]  onepxborder   overflow-auto'>
            {cartItems&&savedCartItems && savedCartItems.map((item) => (
            <div key={item.id} className="">
                  <div className='flex p-2 bg-white w-full   bot-border '>  
                  <span><img className='w-40 ' src={item.img} alt="" /></span>
                  <ul className='text-sm w-full ml-2 font pl-2 '>
                    <li className='font-semibold p-0.5'>{item.name} </li>
                    <li className='p-0.5'>Size: {item.size} </li>
                    <li className='p-0.5'>Price: {item.price} THB </li>
                    <li className=' w-max flex mt-2'>
                    <button onClick={() => handleDecreaseQuantity(item)} 
                    className='px-2 onepxborder '>-</button>
                    <p className='px-2 y-border '>{item.quantity}</p> 
                    <button onClick={() => handleIncreaseQuantity(item)} 
                    className='px-2 onepxborder '>+</button></li>
                  </ul>
                  <button className='flex w-4 cursor-pointer text-2xl mt-0.5' 
                    onClick={() => handleRemoveFromCart(item)}><BsTrashFill size={'16'}/>
                  </button>
                 </div>
             </div>
            ))}
          </main>
          <aside  className='w-1/2 onepxborder h-min '>
            <div>
              <h1 className='p-4 bot-border font-bold  '>
                  SHOPPING CART TOTAL 
              </h1>
              <div className='p-4 mt-2 bot-border'>
                    <p className='text-sm '>ADD A DISCOUNT</p>
                    <input className='onepxborder mb-4 mt-2 p-2 mr-4 ' type="text" id="discount" 
                    name="discount" ></input>
                    <button className='onepxborder  mt-2 p-2'>ADD</button>

              </div>
              <footer className=' h-auto pt-2 text-center w-full  bot-border '>
                <div className='flex justify-between p-2 mx-2'>
                    <p className='text-sm'>TOTAL </p>
                    <p className='text-sm'> {Price} THB </p>
                </div>
                <Link to="/checkout"><button className='bg-black text-white  text-sm w-5/6 h-8 mb-4  '>CHECK OUT</button></Link>
              </footer>   
              </div>
              <div className='p-6'>
                  <div className='text-xs py-2'>
                    <h1 className='font-bold py-1'>Shipping</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Asperiores, exercitationem. Tempore 
                      maiores eaque voluptatem, modi vero deserunt
                       sit nobis amet, sequi voluptate voluptas blanditiis.</p>
                  </div>
                  <div className='text-xs  py-2'>
                  <h1 className='font-bold py-1'>Return</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Asperiores, exercitationem. Tempore 
                      maiores eaque voluptatem, modi vero deserunt
                       sit nobis amet, sequi voluptate voluptas blanditiis.</p>
                  </div>
              </div>
          </aside>
      </div>
        
       
     
    </div>
    
  )
}

export default TotalCart
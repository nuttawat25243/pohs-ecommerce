import React,{useState,useEffect}from 'react'
import "./ProductInfo.css";
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/features/CartSlice';
import {items} from '../Data/ProductData'
function ProductInfo() {
     const { id } = useParams();
     const productData = items.find((item) => item.id === parseInt(id));
     const [size, setSize] = useState("");
     const [quantity,setQuantity] = useState(1);
     const [pickSizeAlert, setPickSizeAlert] = useState();
     const dispatch = useDispatch();
     const handleSizeClick = (selectedSize) => {
       setSize((prevSize) => (prevSize === selectedSize ? "" : selectedSize));
     };
     const handleAddToCart = () => {
      if (productData&& size) {
       const product = {
         id: productData.id,
         name: productData.name,
         price: productData.price,
         quantity : quantity,
         size: size, 
         img: productData.img,
        };
 
 
        dispatch(addToCart(product));
        setQuantity(1);
        setPickSizeAlert(false);
          const json = JSON.stringify(updatedCart);
        localStorage.setItem("cartItems", json);
      } 
      else {
       setPickSizeAlert(true);
     }
    };
      
  return (
    <>
      <div className="font-blink">
           <div className="max-w-7xl m-auto text-sm ">
            <div className="flex  justify-center   my-8 w-full h-auto ">
              <div className="sm:flex sm:flex-row-reverse mx-4 w-3/5   ">
                
                <div className=" mx-auto lg:max-h-[36rem]  lg:max-w-[36rem]    	 ">
                      <img className=' max-h-[36rem] w-auto ' src={productData.img} alt="product" />
                  </div>  
                  
              </div> 
              <div className="w-2/5 ml-4">
              <h1 className="text-lg sm:text-xl font-bold mb-2">{productData.name}</h1> 
                <h2 className="text-lg sm:text-xl  mb-2">{productData.description}</h2> 
                 <h3 className=" sm:text-lg  mb-8 ">฿{productData.price} THB</h3> 
                 <div className="product-quant ">
                    <h1 className='py-2 '>SIZE</h1>
                   <div className="flex flex-wrap gap-2 mb-4">
                            {id >= 1 && id <= 6 ? (
                    ['XS', 'S', 'M', 'L', 'XL'].map((availableSize) => (
                      <button
                        key={availableSize}
                        className={`border-2 w-8 h-8 ${
                          size === availableSize ? 'bg-black text-white' : 'bg-white'
                        }`}
                        onClick={() => handleSizeClick(availableSize)}
                      >
                        {availableSize}
                      </button>
                    )))
                   : ("")
                    }
                  {id >= 7 && id <= 10 ? (
                    ['28', '30', '32', '34', '36'].map((availableSize) => (
                      <button
                        key={availableSize}
                        className={`border-2 w-8 h-8 ${
                          size === availableSize ? 'bg-black text-white' : 'bg-white'
                        }`}
                        onClick={() => handleSizeClick(availableSize)}
                      >
                        {availableSize}
                      </button>
                    ))
                  ) : ("")
                 }
                  {id >= 11 && id <= 13 ? (
                    [ "ONESIZE"].map((availableSize) => (
                      <button
                        key={availableSize}
                        className={`border-2 px-2 h-8 ${
                          size === availableSize ? 'bg-black text-white' : 'bg-white'
                        }`}
                        onClick={() => handleSizeClick(availableSize)}
                      >
                        {availableSize}
                      </button>
                    ))
                  ) : ("")
                 }
                 {pickSizeAlert && (
                <p className='text-red-500'>Please pick a size first.</p>
                 )}
                    </div>
                  </div> 
                  <div className="atc-buy mt-4">
                      <button       
                      onClick={() => { 
                      handleAddToCart();
                    }} className="bg-black text-white px-2 sm:px-8 py-2 text-">
                      ADD TO CART
                      </button> 
                  </div> 
              </div>
            </div>
             
          </div> 
        </div>
        
    </>
  );
}

export default ProductInfo

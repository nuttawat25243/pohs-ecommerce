import React,{useState,createContext,useContext  }from 'react'
import { items } from "../components/Data/ProductData";
import "../ProductInfo/ProductInfo.css";
import { useParams } from 'react-router-dom';

function ProductInfo() {
     const { id } = useParams();
     const item = items.filter((item) => item.id === parseInt(id));
     const [size, setSize] = useState("");
   const [activeSize, setActiveSize] = useState(null);
     const handleSizeClick = (size) => {
       setActiveSize((prevActiveSize) => (prevActiveSize === size ? null : size));
     };
    const [image, setImage] = useState(item[0].otherImgs);
    const changeImage = (e) => {
      setImage(e.target.src);
      };

  return (
    <>
      <div className="font-blink">
   
        <div className="max-w-7xl m-auto text-sm ">
          <div className="flex  justify-center   my-8 w-full h-auto ">
            <div className="sm:flex sm:flex-row-reverse mx-4 w-3/5   ">
             
                <div className=" mx-auto lg:max-h-[36rem]  lg:max-w-[36rem]    	 ">
                    <img className=' max-h-[36rem] w-auto ' src={image} alt="product" />
                </div>
                <div className=" ">
                  <div className='w-20   m-4 lg:m-0 gap-4 lg:gap-0 lg:w-20 flex sm:block   h-24  object-cover  lg:container-height    '>
                    <img className='mb-4   hover:border-2 cursor-pointer '
                      onClick={changeImage}
                      src={item[0].img}
                      alt="product"
                    />
                    <img  className='mb-4  hover:border-2 cursor-pointer '
                      onClick={changeImage}
                      src={item[0].otherImgs[0]}
                      alt="product"
                    />
                  </div>
                </div>
            </div> 
            <div className="w-2/5 ml-4">
                <h1 className="text-lg sm:text-xl font-bold mb-2">{item[0]. name}</h1> 
                <h2 className="text-lg sm:text-xl  mb-2">{item[0]. description}</h2> 
                <h3 className=" sm:text-lg  mb-8 ">฿{item[0]. price} THB</h3> 

                <div className="product-quant ">
                 <h1 className='py-2 '>SIZE</h1>
                 <div className="flex flex-wrap gap-2 mb-4">
                     {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                      <button
                        key={size}
                        className={`border-2 w-8 h-8 ${
                          activeSize === size ? 'bg-black text-white' : 'bg-white'
                        }`}
                        onClick={() => handleSizeClick(size)}
                      >
                        {size}
                      </button>
                    ))} 
                  </div>
                <h2 className='py-2  text-xs text-gray-500'>SIZE GUIDE</h2>
                </div> 
                <div className="atc-buy mt-4">
                    <button   onClick={() => {
                    addToCart(item[0]);
                    // showNotify();
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
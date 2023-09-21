import React,{useState}from 'react'
import { items } from "../components/Data/ProductData";
import { useParams } from "react-router";
import "../ProductInfo/ProductInfo.css";

function ProductInfo() {
   const { id } = useParams();
   const item = items.filter((item) => item.id === parseInt(id));
   const [quantity, setQuantity] = useState(1);
   const [image, setImage] = useState(item[0].otherImgs);
   const changeImage = (e) => {
     setImage(e.target.src);
     };
  const increase = () => {
    if (quantity >= 1) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calcPrice = (quantity) => {
    return quantity * item[0].price;
  };

  const [notify, setNotify] = useState(false);

  const showNotify = () => {
    setNotify(!notify);
  };
  return (
    <>
      <div className="font-blink">
      <div className=''>
            <h1 className='max-w-7xl m-auto text-sm p-4  '>HOME</h1>
        </div>
        <hr />
        <div className="max-w-7xl m-auto text-sm ">
          <div className="flex  justify-center   my-8 w-full h-auto ">
            <div className="flex w-3/5   ">
                <div className="">
                  <div className='w-20  object-cover  container-height mr-4   '>
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
                <div className=" mx-auto max-h-[36rem]  max-w-[36rem]    	 ">
                    <img className=' max-h-[36rem] w-auto ' src={image} alt="product" />
                </div>
            </div>
            <div className="w-2/5 ml-4">
                <h1 className=" text-xl font-bold mb-2">{item[0]. name}</h1> 
                <h2 className=" text-xl  mb-2">{item[0]. description}</h2> 
                <h3 className=" text-lg  mb-8 ">฿{item[0]. price} THB</h3> 

                <div className="product-quant ">
                 <h1 className='py-2 '>SIZE</h1>
                <div className="flex flex-wrap gap-2 mb-4 ">
                      <button className='border-2 w-8 h-8  ' >XS</button>
                      <button className='border-2 w-8 h-8  '>S</button>
                      <button className='border-2 w-8 h-8  '>M</button>
                      <button className='border-2 w-8 h-8  '>L</button>
                      <button className='border-2 w-8 h-8  '>XL</button>
                </div>
                <h2 className='py-2  text-xs text-gray-500'>SIZE GUIDE</h2>
                </div> 
                <div className="atc-buy mt-4">
                    <button className="bg-black text-white px-8 py-2 text-">
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
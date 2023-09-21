import React from 'react'
import "./Banner.css";
import { MdLocalShipping } from "react-icons/md";
import { AiFillSkin } from "react-icons/ai";
import { ImLoop2 } from "react-icons/im";
function Banner() {


  return (
    <div className='w-fulll h-36 mb-12'>

    <div className="flex items-center justify-center font-blink ">
        <div className='flex'>
        <div className='flex items-center bg-gray-200 px-16 py-4 mx-12'><span className='mr-4'><AiFillSkin size={20} /></span>Best Quality</div>
        <div className='flex items-center bg-gray-200 px-16 py-4 mx-12'><span className='mr-4'><MdLocalShipping size={20} /></span>Free Shipping</div>
        <div className='flex items-center bg-gray-200 px-16 py-4 mx-12  '><span className='mr-4'><ImLoop2 size={20} /></span>Return in Store</div>
        </div>
        </div>
    </div>
  );
}

export default Banner;

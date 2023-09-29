import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { AiFillSkin } from "react-icons/ai";
import { ImLoop2 } from "react-icons/im";
function Banner() {


  return (
    <div className='w-fulll h-36 mb-12'>

    <div className="flex items-center justify-center font-blink ">
        <div className='sm:flex'>
        <div className='flex items-center bg-gray-200 p-4 my-4 px-20 xl:mx-12 xl:px-16 lg:mx-4 lg:px-12 lg:py-4  md:mx-4 md:px-10 md:py-4  sm:mx-2 sm:px-8 sm:py-4  '><span className='mr-4'><AiFillSkin size={20} /></span>Best Quality</div>
        <div className='flex items-center bg-gray-200 p-4 my-4 px-20 xl:mx-12 xl:px-16 lg:mx-4 lg:px-12 lg:py-4  md:mx-4 md:px-10 md:py-4  sm:mx-2 sm:px-8 sm:py-4' ><span className='mr-4'><MdLocalShipping size={20} /></span>Free Shipping</div>
        <div className='flex items-center bg-gray-200 p-4 my-4 px-20 xl:mx-12 xl:px-16 lg:mx-4 lg:px-12 lg:py-4  md:mx-4 md:px-10 md:py-4  sm:mx-2  sm:px-8 s,:py-4 '><span className='mr-4'><ImLoop2 size={20} /></span>Return in Store</div>
        </div>
        </div>
    </div>
  );
}

export default Banner;

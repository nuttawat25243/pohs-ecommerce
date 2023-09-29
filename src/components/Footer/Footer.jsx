import React from 'react'
import style from "./Footer.module.css";
import { FaInstagram,FaFacebookSquare } from "react-icons/fa";
function Footer() {
 
  return (
  <div className='bg-black h-84 font-blink '>
    <div className='p-10  '>
        <div className="relative  xl:grid xl:grid-cols-2 justify-center text-center text-white  " >
            <div className=' xl:m-10 mx-12  '>
                  <div className=' px-2 mx-4   w-24  rounded-lg text-black text-xl bg-gradient-to-r from-gray-500 to-white'>
                      <a href="" className='' ><h1 className='text-center '>P O H S .</h1></a>
                    </div> 
                    <div>
                      <ul className='flex flex-wrap text-white gap-4 my-8 mb-2  mx-4   justify-start'>
                        <li>Search</li>
                        <li>Contact Us</li>
                        <li>Track Order</li>
                        <li>Shipping</li>
                        <li>Returns + Exchanges</li>
                        <li>Rewards</li>
                        <li>Terms + Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Our Story</li>
                      </ul>
                    </div>
                </div>
            <div className='m-12 border-2  py-12 xl:py-0 xl:border-0'>
                <h1 className='my-4 mx-2 text-sm'>BE FIRST TO KNOW ABOUT PROMOTION AND NEW RELEASES</h1>
                <form className='m-4 ' action="">
                  <label ><input className='bg-transparent border-b-2 text-sm p-1 max-w-48' type="email" placeholder='Email Address'/></label>
                  <button className='text-black bg-white p-1 px-1' type="submit">Subscribe</button>
                </form> 
            </div>
        </div>
        <div className='p-4 mx-12 xl:border-t-2   '>
        <div className='flex gap-4 text-white '>
          <FaInstagram size={'24'}/>
          <FaFacebookSquare size={'24'}/>
        </div>
        </div>
        </div>
  </div>
  );
}

export default Footer;

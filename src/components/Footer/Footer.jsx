import React from 'react'
import style from "./Footer.module.css";
import { FaInstagram,FaFacebookSquare } from "react-icons/fa";
function Footer() {
 
  return (
  <div className='bg-black h-84 font-blink '>
    <div className='p-10  '>
        <div className="grid grid-cols-2 justify-center text-center text-white  " >
            <div className='m-10 w-full'>
                  <div className='logo px-2 mx-4  w-24  rounded-lg text-black items-center  text-xl bg-gradient-to-r from-gray-500 to-white'>
                      <a href="" className='  ' ><h1 className=''>P O H S .</h1></a>
                    </div> 
                    <div>
                      <ul className='flex flex-wrap text-white gap-4 my-8 mb-2 mx-4'>
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
        
            <div className='m-10 '>
                <h1 className='my-4 text-sm'>BE FIRST TO KNOW ABOUT PROMOTION AND NEW RELEASES</h1>
                <form className='m-4 ' action="">
                  <label ><input className='bg-black border-b-2 text-sm p-1 w-48' type="email" placeholder='Email Address'/></label>
                  <button className='text-black bg-white p-1 px-1' type="submit">Subscribe</button>
                </form> 
            </div>
        </div>
        <div className='p-4 mx-12 border-t-2 '>
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

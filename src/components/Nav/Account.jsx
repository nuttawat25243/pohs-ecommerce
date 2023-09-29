import React, { useState, useRef, useEffect } from 'react';
import { FiShoppingCart, FiUser } from 'react-icons/fi';

function Nav() {
  //formVisible
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isForgotPasswordVisible, setIsForgotPasswordVisible] = useState(false);

  const signInRef = useRef(null);
  const forgotPasswordRef = useRef(null);

  useEffect(() => {
    const handleSignInClickOutside = (event) => {
      if (signInRef.current && !signInRef.current.contains(event.target)) {
        setIsFormVisible(false);
      }
    };

    const handleForgotPasswordClickOutside = (event) => {
      if (forgotPasswordRef.current && !forgotPasswordRef.current.contains(event.target)) {
        setIsForgotPasswordVisible(false);
      }
    };

    document.addEventListener('mousedown', handleSignInClickOutside);
    document.addEventListener('mousedown', handleForgotPasswordClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleSignInClickOutside);
      document.removeEventListener('mousedown', handleForgotPasswordClickOutside);
    };
  }, []);

  const handleButtonClick = () => {
    setIsFormVisible((prevIsFormVisible) => !prevIsFormVisible);
    setIsForgotPasswordVisible(false); // Close the forgot password form
  };

  const handleLabelClick = () => {
    setIsFormVisible((prevIsFormVisible) => !prevIsFormVisible);
    setIsForgotPasswordVisible((prevIsForgotPasswordVisible) => !prevIsForgotPasswordVisible);
  };

  return (
    <>
        <button className="z-20 mr-4  "  onClick={handleButtonClick}>
          <FiUser />
        </button>
        {isFormVisible && (
          <div ref={signInRef}className='absolute z-40 -translate-x-56 bg-white m-8 p-4 w-auto h-auto border-2 border-black '>
            <form className='block z-30'>
              <h1>SIGN-IN</h1>
              <label className='text-sm'>
                Email address:
                <input className='w-48 block h-6 p-1 border-2 rounded' type='email' />
              </label>
              <label className='text-sm'>
                Password:
                <input className='w-48 block h-6 p-1 border-2 rounded' type='password' />
              </label>
              <p className='text-xs text-gray-400 p-1 underline underline-offset-1 '>
                <button className='underline' onClick={handleLabelClick}>I forget my password</button>
              </p>
              <button className='my-2 px-2 rounded text-base bg-black text-white' type='submit'>
                LOGIN
              </button>
            </form>
          </div>
        )}

        {isForgotPasswordVisible && (
          <div ref={forgotPasswordRef} className='absolute z-40 -translate-x-52 -translate-y-18 w-40 p-4  w-52 h-auto border-2 border-black bg-white'>
            <form className=''>
              
              <label className='text-base'>
               <p className='text-sm'> Your Email address:</p>
                <input className='w-40 h-6 p-1 border-2 rounded text-black' type='email' />
                <button type='submit' className='text-white rounded px-3 py-1 text-xs bg-black'>SEND</button>
              </label>
              <p className='text-xs p-1'>We'll send you an email to reset your password.</p>
            </form>
          </div>
        )}
   
   </>
  );
}

export default Nav;

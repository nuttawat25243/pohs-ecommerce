import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Star = ({ stars }) => {
  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    // Here, we use the value argument which is provided by Array.from.
    const number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill className='icon' />
        ) : stars >= number ? (
          <BsStarHalf className='icon' />
        ) : (
          <BsStar className='icon' />
        )}
      </span>
    );
  });

  return (
    <div className='flex'>
      {ratingStar}
    </div>
  )
}

export default Star;

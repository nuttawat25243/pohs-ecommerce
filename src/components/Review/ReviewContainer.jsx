import React from 'react'
import style from "./ReviewContainer.module.css";
import { Reviews } from "../Data/ReviewData";
import Star from "./Star";

function Review() {
 
  const filteredItems = Reviews.filter((item) => item.id >= 1);
  return (
    <>
      {filteredItems.map((item) => (
        <div key={item.id} className=" border-2 rounded-lg ">
          <div className=' p-4 w-96 h-64'>
            <div className="flex justify-between">
              <p>{item.name}</p> 
              <p>{item.date}</p> 
            </div>
             <div className="">
              <Star stars={item.stars} />
            </div> 
            <div className="text-center m-16">
            <p>{item.review}</p> 
            </div>
            <div>
            <p>{item.product}</p> 
            </div>
        </div>
        </div>
      ))}
    </>
  );
}

export default Review;

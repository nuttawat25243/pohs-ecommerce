import React from 'react'
import style from "./Review.module.css";
import { FiArrowLeft,FiArrowRight  } from "react-icons/fi";;
import ReviewContainer from "./ReviewContainer";
import Star from "./Star";
import { BsChevronLeft,BsChevronRight } from "react-icons/bs";

function Review() {
  const slideLeft = () => {
    let slider = document.getElementById("review-slider");
    slider.scrollLeft = slider.scrollLeft - 416;
  };

  const slideRight = () => {
    let slider = document.getElementById("review-slider");
    slider.scrollLeft = slider.scrollLeft + 416;
  };
  return (
    <div className={style.trending}>
     <div className={style.container}>
        <div className={style.titlebutton}>
         <h3>REVIEWS FROM CUSTOMER</h3>
        </div>
        <div className={style.btns}>
            <button title="scroll left" onClick={slideLeft}>
              <BsChevronLeft  />

            </button>
            <div className={style.rowcontainer} id="review-slider">
             <ReviewContainer /> 
             
            </div>
            <button title="scroll right" onClick={slideRight}>
            <BsChevronRight />
            
            </button>
        </div> 
        <div>
            
        </div>
        
    </div>
    </div>
      
  );
}

export default Review;

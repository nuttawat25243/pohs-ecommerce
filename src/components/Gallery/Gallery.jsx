import React from 'react'
import style from "./Gallery.module.css";
import GalleryItem from "./GalleryItem";
import { BsChevronLeft,BsChevronRight } from "react-icons/bs";


function Gallery() {
  const slideLeft = () => {
    let slider = document.getElementById("gallery-slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  };

 const slideRight = () => {
      let slider = document.getElementById("gallery-slider");
      slider.scrollLeft = slider.scrollLeft + 300;
 
    };
  return (
<div className={style.trending} >
     <div className={style.container}>
        <div className={style.titlebutton}>
          <h3  >SHOP THE LOOK.</h3>
          <h2 ><a href="">View All</a></h2>  
        </div> 
        <div className={style.btns}>
            <button title="scroll left" onClick={slideLeft}>
              <BsChevronLeft />
            </button> 
            <button className= {style.rightbutton} title="scroll right" onClick={slideRight}>
              <BsChevronRight />
            </button>
            <div className={style.rowcontainer} id="gallery-slider">
              <GalleryItem />
              <div className={style.btns}>
             
            </div>
            </div>
           
        </div>
      </div> 
    </div>
  );
}

export default Gallery;

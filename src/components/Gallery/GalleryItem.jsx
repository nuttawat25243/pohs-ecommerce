import React from 'react'
import style from "./Galleryitem.module.css";
import { items } from "../Data/ProductData";

function GalleryItem() {
  const filteredItems = items.filter((item) =>  item.id >= 1);
  return (
    <>
       {filteredItems.map((item) => (
        <div key={item.id} className={style.row}>
            <div className={style.itemimage}>
            <div class={style.overlay} >
              <a className={style.link} href=""><p>SHOP THIS LOOK</p></a>
              <img src={item.otherImgs}  alt="product" />
              
              </div>
            </div>
          
        </div>
      ))} 
    </>
  );
}

export default GalleryItem;

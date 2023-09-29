import React, { useState } from 'react';
import style from './Galleryitem.module.css';
import { items } from '../Data/ProductData';
import { GrClose } from "react-icons/gr";
import { Link } from 'react-router-dom';
function GalleryItem() {
  const [itemInfoVisibility, setItemInfoVisibility] = useState({});

  const toggleInfo = (itemId) => {
    // Toggle visibility for the specific item by its ID
    setItemInfoVisibility((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId] || false,
    }));
  };

  const closeInfo = (itemId) => {
    // Close info for the specific item by its ID
    setItemInfoVisibility((prevState) => ({
      ...prevState,
      [itemId]: false,
    }));
  };

  const filteredItems = items.filter((item) => item.id >= 1);

  return (
    <>
      {filteredItems.map((item) => (
        <div key={item.id} className={style.row}>
          <div className={style.itemimage}>
            <div className={style.overlayimg}>
              {/* Pass the item's ID to toggleInfo */}
              <a onClick={() => toggleInfo(item.id)} className={style.link}>
                <p>SHOP THIS LOOK</p>
              </a>
              <img src={item.otherImgs} alt="product" />
            </div>
          </div>

          {itemInfoVisibility[item.id] && (
            <div className={style.overlayInfo}>
              <div className={style.infocontain}>
                <span className='fixed right-5 top-5 cursor-pointer ' onClick={() => closeInfo(item.id)}><GrClose /></span>
                <div className={style.shopInfo}>
                  <img src={item.img} alt={item.name} />
                  <div className='p-4 text-ellipsis '>
                    <h3 className='font-bold '>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>฿{item.price} THB</p>
                     <Link 
                    onClick={() => window.top(0, 0)}
                    to={`/product/${item.id}`}
                   className='text-xs underline mt-4 cursor-pointer'>BUY NOW</Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default GalleryItem;

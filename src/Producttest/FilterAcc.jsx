import { useState } from "react";
import { items } from "../components/Data/ProductData";
import Sidebar from "./Sidebar";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";
function ProductAll() {
    const [selectedCategory, setSelectedCategory] = useState("accessories");
    // ----------- Radio Filtering -----------
    const handleChange = (event) => {
      setSelectedCategory(event.target.value);
    };
    function filteredData(selected) {
      let filteredProducts = items;
      // Filtering Input Items
      if (selected) {
        filteredProducts = filteredProducts.filter(
          ({ category, color, rangeprice }) =>
            category === selected ||
            color === selected ||
            rangeprice === selected 
        );
      }
  
      return filteredProducts.map(
        ({ id,img, name, price,tag }) => (
          <Link to={`/product/${id}`} >  <ProductList       
          key={id} id={id}
          img={img}
          name={name}
          price={price}
          tag={tag}
          /></Link >
        )
      );
    } 
  
    const result = filteredData(selectedCategory);
  
    return (
      <div className=" ">
          {/* <div className='max-w-7xl m-auto  text-sm  '>
              <h1 className='p-4'>HOME</h1>
          </div>
          <hr />
          <div className="max-w-7xl m-auto flex my-8">
            <div className="w-1/5 p-4 mr-8">
              <Sidebar handleChange={handleChange} />
            </div>
            <div className="w-full flex flex-wrap ">
                {result}
            </div>
          </div> */}

      </div>
    );
  }

export default ProductAll;
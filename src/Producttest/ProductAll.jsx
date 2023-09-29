import { useState,useContext } from "react";
import { items } from "../components/Data/ProductData";
import Sidebar from "./Sidebar";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";
function ProductAll() {
    // ----------- State Category,Name Filtering -----------
    const [selectedCategory, setSelectedCategory] = useState(null);
    // ----------- Radio Filtering -----------
    const handleChange = (event) => {
      setSelectedCategory(event.target.value);
    };
   // ----------- From Search Bar -----------
   function filteredData(category) {
    let filteredProducts = items;
  
    // Filtering by category
    if (category) {
      filteredProducts = filteredProducts.filter(
        ({ category: productCategory }) => productCategory === category
      );
    }
    return filteredProducts.map(({ id,img, name, price, tag }) => (
      <Link to={`/product/${id}`} ><ProductList key={id} id={id} img={img} name={name} price={price} tag={tag} /></Link>
    )); 
  }

  const result = filteredData(selectedCategory);
    return (
      <>
          <div className="max-w-7xl m-auto block lg:flex lg:my-8">
          
              <Sidebar handleChange={handleChange} />
            <div className="w-full flex flex-wrap ">
                {result}
            </div>
          </div>
      </>
    );
  }

export default ProductAll;

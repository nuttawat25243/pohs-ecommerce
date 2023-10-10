import Nav from '../components/Nav/Nav'
import { useState,useContext } from "react";
import { items } from "../components/Data/ProductData";
import Sidebar from "../components/Sidebar/Sidebar";
import ProductList from "../components/ProductList/ProductList";
import { Link } from "react-router-dom";

function ProductAll() {
   const [selectedCategory, setSelectedCategory] = useState(null);
   const handleChange = (event) => {
     setSelectedCategory(event.target.value);
   };
  function filteredData(category) {
   let filteredProducts = items;
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
      <Nav    />
      <div className="max-w-7xl m-auto block lg:flex lg:my-8">
          <Sidebar handleChange={handleChange} />
        <div className="w-full flex flex-wrap ">
            {result}
        </div>
      </div>
    </>
  )
}

export default ProductAll

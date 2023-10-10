import Nav from '../components/Nav/Nav'
import { useState } from "react";
import { items } from "../components/Data/ProductData";
import Sidebar from "../components/Sidebar/Sidebar";
import ProductList from "../components/ProductList/ProductList";
import { Link } from "react-router-dom";

function ProductAccessories() {
  const [selectedCategory, setSelectedCategory] = useState("accessories");
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  function filteredData(selected) {
    let filteredProducts = items;
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
    <>
      <Nav />
      <div className="max-w-7xl m-auto block lg:flex lg:my-8">
          <Sidebar handleChange={handleChange} />
        <div className="w-full flex flex-wrap ">
            {result}
        </div>
      </div>
    </>
  )
}

export default ProductAccessories

// import { useState,useContext } from "react";
// import { items } from "../components/Data/ProductData";
// // import products from "./db/data";
// import Sidebar from "./Sidebar";
// import ProductList from "./ProductList";
// import { SearchContext } from "../components/Nav/Searchbar";


// function ProductAll() {
//     // ----------- State Category,Name Filtering -----------
//     const [selectedCategory, setSelectedCategory] = useState(null);
//     const searchName  = useContext(SearchContext);
//     console.log(searchName);

//     // ----------- Radio Filtering -----------
//     const handleChange = (event) => {
//       setSelectedCategory(event.target.value);
//     };
//    // ----------- From Search Bar -----------
  

//    function filteredData(category, name) {
//     let filteredProducts = items;
  
//     // Filtering by category
//     if (category) {
//       filteredProducts = filteredProducts.filter(
//         ({ category: productCategory }) => productCategory === category
//       );
//     }
  
//      // Filtering by name
//      if (name) {
//        filteredProducts = filteredProducts.filter(({ name: productName }) =>
//          productName.toLowerCase().includes((name || "").toLowerCase())
//        );
//      }
    
//     return filteredProducts.map(({ img, name, price, tag }) => (
//       <ProductList key={Math.random()} img={img} name={name} price={price} tag={tag} />
//     ));
//   }

//   const result = filteredData(selectedCategory, searchName);
//     return (
//       <div className=" ">
//           <div className='max-w-7xl m-auto  text-sm  '>
//               <h1 className='p-4'>HOME</h1>
//           </div>
//           <hr />
//           <div className="max-w-7xl m-auto flex my-8">
//             <div className="w-1/5 p-4 mr-8">
//               <Sidebar handleChange={handleChange} />
//             </div>
//             <div className="w-full flex flex-wrap ">
//                 {result}
//             </div>
//           </div>
//       </div>
//     );
//   }

// export default ProductAll;
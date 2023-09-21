import "./Product.css";
import ProductItem from "./ProductItem";
import { FiArrowLeft,FiArrowRight  } from "react-icons/fi";;
import { Link } from "react-router-dom";
function Product() {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 235;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 235;
  };

  return (
    <div className="trending font-blink max-w-8xl m-auto">
      <div className="container">
        <div className="title-btns ">
          <h1>Best Seller</h1>
          <div className="view-all">
          <Link to="/product">View All</Link>
          <div className="btns">
                <button title="scroll left" onClick={slideLeft}>
                  <FiArrowLeft />
                </button>
                <button title="scroll right" onClick={slideRight}>
                  <FiArrowRight />
                </button>
           </div>
           </div>
        </div>
        <div className="row-container" id="slider">
          <ProductItem />
        </div>
      
      </div>

    </div>
  );
}

export default Product;

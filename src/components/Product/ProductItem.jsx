import "./Product.css";
import { items } from "../Data/ProductData";
import { Link } from "react-router-dom";

function ProductItem() {
  const filteredItems = items.filter((item) => item.id >= 1);
  return (
    <>
      {filteredItems.map((item) => (
          <Link
          onClick={() => window.top(0, 0)}
          to={`/product/${item.id}`}
        >
        <div key={item.id} className="row-item ">
            <div className="item-image ">
              <img src={item.img} alt="product" />
            </div>
            <div className="item-description   font-blink">
              <p>{item.name}</p>
              <p className="item-price">฿{item.price} THB</p>
            </div>
        </div>
        </Link>
      ))}
    </>
  );
}

export default ProductItem;

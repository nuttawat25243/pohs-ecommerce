import { items } from "../../Data/ProductData";
import { Link } from "react-router-dom";
import "./ProductHomeItem.css";

function ProductHomeItem() {
    const filteredItems = items.filter((item) => item.id >= 1);
    return (
      <>
        {filteredItems.map((item) => (
          <div key={item.id} >
             <div className="w-48  ">
                <img src={item.img} alt="product" />
              </div>
              <div className="item-description font-blink">
                <p className="text-xs bg-gray-200 max-w-min  ">{item.tag}</p>
                <p>{item.name}</p>
                <p className="item-price">{item.price}$</p>
              </div>
          </div>
        ))}
      </>
    );
}
export default ProductHomeItem

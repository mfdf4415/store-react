import { Link } from "react-router-dom";
import "../Styles/css/product.css";
import img from "../resource/pink-sweater-front-removebg-preview.png"

const Product = ({product}) => {
  return (
    <div className="product">
      <div className="prd-img-container">
        <img
          src={product.images[0]}
        />
        <p>{product.creationAt}</p>
      </div>
      <div className="prd-top">
        <Link to="/">
          <h2>{product.title}</h2>
        </Link>
        <Link to="/">
          <h4>{product.category.name}</h4>
        </Link>
      </div>
      <div className="prd-bottom flex">
        <h3 className="price">${product.price}.00/</h3>
        <button>Rent Now</button>
      </div>
    </div>
  );
};

export default Product;

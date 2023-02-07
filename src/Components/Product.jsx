import { Link } from "react-router-dom";
import "../Styles/css/product.css";
import img from "../resource/pink-sweater-front-removebg-preview.png"

const Product = () => {
  return (
    <div className="product">
      <div className="prd-top">
        <Link to="/">
          <h2>Mom-fit Clothes</h2>
        </Link>
        <Link to="/">
          <h4>Clothes</h4>
        </Link>
      </div>
      <div className="prd-img-container">
        <img
          src={img}
        />
        <p>2023-02-06T11:38:35.000Z</p>
      </div>
      <div className="prd-bottom flex">
        <h3 className="price">$80.00/</h3>
        <button>Rent Now</button>
      </div>
    </div>
  );
};

export default Product;

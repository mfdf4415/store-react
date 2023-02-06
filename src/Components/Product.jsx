import { Link } from "react-router-dom";

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
        <div className="img"></div>
        <p>2022 23 456</p>
      </div>
      <div className="prd-bottom">
        <h3 className="price">$80.00/</h3>
        <button>Rent Now</button>
      </div>
    </div>
  );
};

export default Product;

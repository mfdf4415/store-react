import "../Styles/css/loadingProduct.css";
import { BsImageFill } from "react-icons/bs";

const LoadingProduct = () => {
  return (
    <div className="load-product">
      <div>
        <div className="load-title"></div>
        <div className="load-category"></div>
      </div>
      <div className="prd-img-container">
        <div className="load-img flex">
          <BsImageFill />
        </div>
        <div className="load-creation"></div>
      </div>
      <div className="prd-bottom flex">
        <div className="load-price"></div>
        <div className="load-btn"></div>
      </div>
    </div>
  );
};

export default LoadingProduct;

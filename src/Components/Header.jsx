import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header flex">
      <div className="logo">
        <h1>KURDSHOP</h1>
      </div>
      <div className="categories">
        <Link>Clothes</Link>
        <Link>Shoes</Link>
        <Link>Electronics</Link>
        <Link>Nombre</Link>
        <Link>Others</Link>
      </div>
      <div className="cart">
        <Link>
          <FaShoppingCart />
        </Link>
      </div>
    </header>
  );
};

export default Header;

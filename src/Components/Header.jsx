import "../Styles/css/header.css";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { BiX, BiMenu } from "react-icons/bi";
import { useState } from "react";

const Header = () => {
  const [sideNav, setSideNav] = useState(false);

  return (
    <header className="header flex">
      <div className="logo">
        <h1>7AMAClass</h1>
      </div>
      <nav className={`categories flex ${sideNav && "side"}`}>
        <div className="side-categories">
          <div className="close">
            <BiX onClick={() => setSideNav(false)} />
          </div>
          <Link to="/">Clothes</Link>
          <Link to="/">Shoes</Link>
          <Link to="/">Electronics</Link>
          <Link to="/">Nombre</Link>
          <Link to="/">Others</Link>
          {sideNav && <Link to="/">acount</Link>}
        </div>
      </nav>
      <div className="cart">
        <Link to="/">
          <FaUser />
        </Link>
      </div>
      <div className="menu">
        <BiMenu onClick={() => setSideNav(true)} />
      </div>
    </header>
  );
};

export default Header;

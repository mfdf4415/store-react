import { Children } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "../Styles/css/layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

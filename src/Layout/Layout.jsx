import { Children } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

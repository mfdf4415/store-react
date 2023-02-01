import { Link } from "react-router-dom";
import "../Styles/css/footer.css";

const Footer = () => {
  return (
    <footer className="footer flex">
      <div className="top-footer flex">
        <div className="footer-logo">
          <h1>7AMAClass</h1>
          <p>
            Our vision is to provide convenience <br /> and help increase your
            sales business.
          </p>
        </div>
        <div className="footer-links flex">
          <div className="footer-links-item flex">
            <h3>About</h3>
            <Link to="/">How it work</Link>
            <Link to="/">Featured</Link>
            <Link to="/">Partnership</Link>
            <Link to="/">Bussiness Relation</Link>
          </div>
          <div className="footer-links-item flex">
            <h3>Community</h3>
            <Link to="/">Events</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Podcast</Link>
            <Link to="/">Invite a friend</Link>
          </div>
          <div className="footer-links-item flex">
            <h3>Socials</h3>
            <Link to="/">Discord</Link>
            <Link to="/">Instagram</Link>
            <Link to="/">Twitter</Link>
            <Link to="/">Facebook</Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="bottom-footer flex">
        <div>
          <Link to="/">&copy;7AMAClass.2023.by Mo7ammad</Link>
        </div>
        <div>
          <Link to="/">Privacy & Policy</Link>
          <Link to="/">Terms & Condition</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

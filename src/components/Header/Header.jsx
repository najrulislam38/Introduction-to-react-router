import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <h3>Navbar</h3>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </ul>
    </nav>
  );
};

export default Header;

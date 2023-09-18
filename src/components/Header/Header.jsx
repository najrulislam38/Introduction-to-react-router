import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <ul>
        <span>My website</span>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Link to="/contact">Contact Us</Link>
      </ul>
    </nav>
  );
};

export default Header;

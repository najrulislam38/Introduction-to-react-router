import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <ul>
        <span>My website</span>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </ul>
    </nav>
  );
};

export default Header;

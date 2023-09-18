import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  const userStyle = {
    padding: "10px",
    border: "2px solid purple",
    borderRadius: " 8px",
  };
  return (
    <div style={userStyle}>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
      <Link to={`/user/${id}`}>See Details</Link>
      <Link to={`/user/${id}`}>
        <button>User Details </button>
      </Link>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
};

export default User;

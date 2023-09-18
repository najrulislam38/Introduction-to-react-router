import PropTypes from "prop-types";

const User = ({ user }) => {
  const { id, name, email } = user;
  const userStyle = {
    padding: "10px",
    border: "2px solid purple",
    borderRadius: " 8px",
  };
  return (
    <div style={userStyle}>
      <p>{id}</p>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
};

export default User;

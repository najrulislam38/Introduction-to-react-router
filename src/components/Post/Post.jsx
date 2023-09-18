import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, body, title } = post;
  const postStyle = {
    padding: "10px",
    border: "2px solid purple",
    borderRadius: " 8px",
  };
  return (
    <div style={postStyle}>
      <h3>{title}</h3>
      <p>{body}</p>
      <Link to={`/post/${id}`}> Post Details</Link>
      <Link to={`/post/${id}`}>
        <button>See Details</button>
      </Link>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;

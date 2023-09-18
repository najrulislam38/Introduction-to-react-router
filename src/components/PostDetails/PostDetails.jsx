import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body } = post;
  const navigate = useNavigate();
  const { postId } = useParams();
  console.log(postId);
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h3>Post details about: {id}</h3>
      <h4>{title}</h4>
      <p>
        <small>{body}</small>
      </p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;

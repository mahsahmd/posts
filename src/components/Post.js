import { useHistory } from "react-router-dom";

const Post = ({ post }) => {
  const history = useHistory();
  return (
    <div className="post" onClick={() => history.push(`/post/${post.id}`)}>
      <p className="postText">{post.title}</p>
    </div>
  );
};

export default Post;

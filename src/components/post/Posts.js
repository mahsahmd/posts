import Post from "./Post";
const Posts = ({ posts, user }) => {
  return (
    <div className="posts">
      {posts.length > 0 ? <p className="postInfo">User {user} posts</p> : null}
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;

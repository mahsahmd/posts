import { useEffect, useState } from "react";
import axios from "axios";
import Posts from "./post/Posts";
import Users from "./user/Users";

const Main = () => {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    filterUserPost(user);
  }, [user]);

  //* fetch userData
  const getUserData = async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data);
        const posts = res.data.map((data) => data.userId);
        setUsers([...new Set(posts)]);
      })
      .catch((error) => console.log(error));
  };
  //* change user state
  const changeUser = (id) => {
    setUser(id);
  };

  //* filter post with user id
  const filterUserPost = (id) => {
    setPosts(data.filter((data) => data.userId === id));
  };

  return (
    <div className="main">
      <Users users={users} changeUser={changeUser} />
      <Posts posts={posts} user={user} />
    </div>
  );
};

export default Main;

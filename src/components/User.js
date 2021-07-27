const User = ({ user, changeUser }) => {
  return (
    <button className="user" onClick={() => changeUser(user)}>
      User {user}
    </button>
  );
};

export default User

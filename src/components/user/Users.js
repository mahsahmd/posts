import User from "./User";

const Users = ({ users,changeUser }) => {
  return (
    <div className="users">
      {users.map((user, index) => (
        <User user={user} changeUser={changeUser} key={index} />
      ))}
    </div>
  );
};

export default Users;

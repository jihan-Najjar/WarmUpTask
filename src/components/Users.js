
import React from "react";
import User from "./User";

const Users = ({ users }) => {
  console.log(users);
  return (
    <div>
      {users.map((user, index) => (
        <User key={index}  user={user} />
      ))}
    </div>
  );
};

export default Users;

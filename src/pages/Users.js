import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://sat-olt.onrender.com/api" + "/user/").then((response) => {
      response.json().then((user) => {
        console.log(post);
        setUsers(user);
        console.log(posts);
      });
    });
  }, []);
  return (
    <div className="users">
      {/* {users.length > 0 &&
        posts.map((post) => {
          return <Post {...post} />;
        })} */}
      USERs WINDOW
    </div>
  );
};

export default Users;

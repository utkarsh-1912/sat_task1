import React, { useEffect, useState } from "react";
import Post from "../component/Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://sat-olt.onrender.com/api" + "/post").then((response) => {
      response.json().then((post) => {
        console.log(post);
        setPosts(post);
        console.log(posts);
      });
    });
  }, []);
  return (
    <div className="posts">
      {posts.length > 0 &&
        posts.map((post) => {
          return <Post {...post} />;
        })}
    </div>
  );
};

export default Posts;

import React, { useEffect, useState } from "react";
import Post from "./Post";

function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://66f17adb4153791915511635.mockapi.io/posts")
      .then((data) => data.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <Post post={post} setPosts={setPosts} />
      ))}
    </div>
  );
}

export default PostsList;

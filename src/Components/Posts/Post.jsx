import React from "react";

function Post({ post, setPosts }) {
  const onDeleteHandler = (id) => {
    fetch(`https://66f17adb4153791915511635.mockapi.io/posts/${id}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then((data) => {
        setPosts((prev) => prev.filter((post) => post.id !== data.id));
      });
  };

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.image}</p>
      <img src={post.body} />
      <button type="button" onClick={() => onDeleteHandler(post.id)}>
        Удалить
      </button>
    </div>
  );
}

export default Post;

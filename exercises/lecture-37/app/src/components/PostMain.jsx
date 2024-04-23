import React, { useState, useEffect, useContext } from 'react';
import PostContext from './PostContext';

const PostMain = () => {
  const post = useContext(PostContext);
  const [likes, setLikes] = useState(post.likes);

  useEffect(() => {
    if (post.likes !== undefined) {
      setLikes(post.likes);
    }
  }, [post.likes]);

  useEffect(() => {
    const likeThis = () => {
      setLikes(likes => likes + 1);
    };

    document.getElementById("like").addEventListener("click", likeThis);

    return () => {
      document.getElementById("like").removeEventListener("click", likeThis);
    };
  }, []);

  return (
    <div className="post-main">
      <div className="cover-container">
        <img src={post.cover} alt={post.title} />
      </div>
      <div className="post-footer">
        <h3>{post.title} {post.id}</h3>
        <p>{post.content}</p>
        <button id="like">Like this post <strong>{likes}</strong></button>
      </div>
    </div>
  );
};

export default PostMain;

import React, { useContext } from 'react';
import PostContext from './PostContext';

const PostTitle = () => {
  const post = useContext(PostContext);
  return <h3>{post.title} {post.id}</h3>;
};

export default PostTitle;

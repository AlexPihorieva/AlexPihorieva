import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import Header from './Header';
import PostMain from './PostMain';
import PostContext from './PostContext';

const Post = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://my-json-server.typicode.com/AlexPihorieva/AlexPihorieva/posts/1"
      );
      const data = await response.json();
      setPost(data);
    }
    fetchData();
  }, []);

  return (
    <PostContext.Provider value={post}>
      <Layout>
        <Header />
        <PostMain />
      </Layout>
    </PostContext.Provider>
  );
};

export default Post;

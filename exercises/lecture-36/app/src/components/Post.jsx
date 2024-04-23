import React from "react";
import { useState, useEffect } from 'react';




function Post(props) {
    const [post, setPost] = useState([]);
    const [likes, setLikes] = useState(post.likes)

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://my-json-server.typicode.com/AlexPihorieva/AlexPihorieva/posts/1');
            const data = await response.json();
            setPost(data);
            setLikes(data.likes);
        }
        fetchData();
        
      }, []);

    function likeThis() {
        if (likes)
            return setLikes(likes + 1);
    }
    useEffect(() => {
        document.getElementById('like')
        .addEventListener(
            "click",
            likeThis)
        },
        [likes]);


    return (
        <article className='post'>
            <div className='cover-container'>
                <img src={post.cover} alt={post.title} />
            </div>
            <div className='post-footer'>
                <h3>{post.title} {post.id}</h3>
                <p>{post.content}</p>
                <button id='like'>
                    Like this post <strong>{likes}</strong>
                </button>
            </div>
        </article>
    );
}


export default Post;
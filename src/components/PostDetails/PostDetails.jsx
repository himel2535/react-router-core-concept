import React from 'react';
import { useLoaderData } from 'react-router';
import "./postDetails.css"


const PostDetails = () => {
    const post=useLoaderData();
    // console.log(x)
    return (
        <div className='postDetailsStyle'>
            <h3>{post.title}</h3>
            <p>{post.id}</p>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetails;
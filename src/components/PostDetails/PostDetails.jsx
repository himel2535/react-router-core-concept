import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import "./postDetails.css"


const PostDetails = () => {

    const post=useLoaderData();
    const navigate=useNavigate();
    
    return (
        <div className='postDetailsStyle'>
            <h3>{post.title}</h3>
            <p>{post.id}</p>
            <p>{post.body}</p>
            <button onClick={()=> navigate(-1)}>Go Back</button>
        </div>
    );
};

export default PostDetails;
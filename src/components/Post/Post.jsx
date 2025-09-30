import React from 'react';
import "./post.css"
import { Link } from 'react-router';

const Post = ({post}) => {
    const {id,title}=post
    return (
        <div className="postStyle">
            <p>{id}</p>
            <h4>{title}</h4>
            <Link to={`/posts/${id}`} >Show Details</Link>
        </div>
    );
};

export default Post;
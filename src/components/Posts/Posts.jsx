import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {
    const posts=useLoaderData();
    console.log(posts)
    return (
        <div>
            <h5>all posts are here</h5>
            <div>
                {
                    posts.map(post=> <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;
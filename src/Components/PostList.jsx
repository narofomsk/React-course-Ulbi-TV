import React from 'react';
import PostItem from "./PostItem.jsx";

const PostList = ({posts, title, remove}) => {
    return (
        <div>
            <h1>{title}</h1>
            <PostItem remove={remove} posts={posts}/>
        </div>
    );
};

export default PostList;
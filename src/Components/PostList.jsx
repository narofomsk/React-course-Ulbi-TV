import React from 'react';
import PostItem from "./PostItem.jsx";

const PostList = ({posts, title, remove}) => {
    if (!posts.length) {
        return <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
    }

    return (
        <div>
            <h1>{title}</h1>
            <PostItem remove={remove} posts={posts}/>
        </div>
    );
};

export default PostList;
import React from 'react';
import PostItem from "./Ul/Post/PostItem.jsx";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove, isLoading}) => {
    if (!posts.length) {
        return <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
    }

    return (
        <div style={{textAlign: 'center'}}>
            <h1>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames='post'
                    >
                        <PostItem number={index + 1} key={post.id} remove={remove} post={post}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;
import React from 'react';

const PostItem = ({posts, remove}) => {
    return (
        <div>
            {posts.map(post =>
                <div key={post.id}  style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
                    <div style={{textAlign: 'center'}}>
                        <div>{post.title}</div>
                        <div>{post.body}</div>
                    </div>
                    <button onClick={() => remove(post)}>Удалить</button>
                </div>
            )}
        </div>
    );
};

export default PostItem;
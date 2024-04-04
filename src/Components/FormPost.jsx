import React, {useState} from 'react';

const FormPost = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form action="">
            <input
                onChange={(event) => setPost({...post, title: event.target.value})}
                value={post.title}
                type="text"
                placeholder='Название поста'/>
            <input
                onChange={(event) => setPost({...post, body: event.target.value})}
                type="text"
                value={post.body}
                placeholder='Описание поста'/>
            <button onClick={addNewPost}>Создать пост</button>
        </form>
    );
};

export default FormPost;
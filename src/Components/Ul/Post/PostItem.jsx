import React from 'react'
import classes from './PostItem.module.css'
import { useNavigate } from 'react-router-dom'

const PostItem = ({ post, remove, number }) => {
	const router = useNavigate()
	return (
		<div className={classes.Post}>
			<div>
				<div>
					{number}. {post.title}
				</div>
				<div>{post.body}</div>
			</div>
			<div style={{display: 'flex', gap: '10px', marginLeft: '20px'}}>
				<button onClick={() => remove(post)}>Удалить</button>
				<button onClick={() => router(`/posts/${post.id}`)}>Открыть</button>
			</div>
		</div>
	)
}

export default PostItem

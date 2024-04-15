import React from 'react'
import classes from './PostItem.module.css'

const PostItem = ({ post, remove, number }) => {
	return (
		<div className={classes.Post}>
			<div>
				<div>
					{number}. {post.title}
				</div>
				<div>{post.body}</div>
			</div>
			<button onClick={() => remove(post)}>Удалить</button>
		</div>
	)
}

export default PostItem

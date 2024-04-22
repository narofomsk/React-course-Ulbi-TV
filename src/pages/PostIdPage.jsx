import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostsService from '../API/PostService'
import { useFetching } from '../API/useFetching'
import Loader from '../Components/Ul/Loader/Loader'

export default function PostIdPage() {
	const params = useParams()
	const [post, setPost] = useState({})
	const [comments, setComments] = useState([])

	const [fetchPostById, isLoading, error] = useFetching(async id => {
		const response = await PostsService.getById(params.id)
		setPost(response.data)
	})

	const [fetchComments, isComLoading, comError] = useFetching(async id => {
		const response = await PostsService.getCommentsByPostId(params.id)
		setComments(response.data)
	})

	useEffect(() => {
		fetchPostById(params.id)
		fetchComments(params.id)
	}, [])

	return (
		<div>
			<h1 className=''>Вы попали на страницу поста c ID = {params.id}</h1>
			{isLoading ? (
				<Loader />
			) : (
				<h2>
					{post.id}.{post.title}
				</h2>
			)}
			<h2>Комментарии</h2>
			{isComLoading ? (
				<Loader />
			) : (
				<div>
					{comments.map(comm => (
						<div key={comm.id} style={{ marginTop: '20px' }}>
							<h5>{comm.email}</h5>
							<div>{comm.body}</div>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

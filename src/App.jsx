import React, { useEffect, useState } from 'react'
import PostsService from './API/PostService.js'
import './App.css'
import FormPost from './Components/FormPost.jsx'
import PostFilter from './Components/PostFilter.jsx'
import PostList from './Components/PostList.jsx'
import Loader from './Components/Ul/Loader/Loader.jsx'
import MyModal from './Components/Ul/MyModal/MyModal.jsx'
import { usePosts } from './hooks/usePosts.js'

function App() {
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({ sort: '', query: '' })
	const [modal, setModal] = useState(false)
	const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)
	const [isPostsLoading, setIsPostsLoading] = useState(false)

	useEffect(() => {
		fetchPosts()
	}, [])

	const createPost = newPost => {
		setPosts([...posts, newPost])
		setModal(false)
	}

	async function fetchPosts() {
		setIsPostsLoading(true)
		const posts = await PostsService.getAll()
		setPosts(posts)
		setIsPostsLoading(false)
	}

	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<>
			<button onClick={fetchPosts}>get posts</button>
			<button onClick={() => setModal(true)}>Создать пользователя</button>
			<MyModal visible={modal} setVisible={setModal}>
				<FormPost create={createPost} />
			</MyModal>
			<hr />
			<PostFilter filter={filter} setFilter={setFilter} />
			{isPostsLoading ? (
				<div style={{ textAlign: 'center', marginTop: '50px' }}>
					<Loader />
				</div>
			) : (
				<PostList
					isLoading={isPostsLoading}
					remove={removePost}
					title='Список постов'
					posts={sortedAndSearchPosts}
				/>
			)}
		</>
	)
}

export default App

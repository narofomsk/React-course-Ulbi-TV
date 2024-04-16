import React, { useEffect, useState } from 'react'
import PostsService from './API/PostService.js'
import './App.css'
import FormPost from './Components/FormPost.jsx'
import PostFilter from './Components/PostFilter.jsx'
import PostList from './Components/PostList.jsx'
import Loader from './Components/Ul/Loader/Loader.jsx'
import MyModal from './Components/Ul/MyModal/MyModal.jsx'
import { usePosts } from './hooks/usePosts.js'
import {useFetching} from "./API/useFetching.js";
import {getPageCount} from "./utils/pages.js";
import {usePagination} from "./hooks/usePagination.js";

function App() {
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({ sort: '', query: '' })
	const [modal, setModal] = useState(false)
	const [totalPages, setTotalPages] = useState(0)
	const [limit, setLimit] = useState(10)
	const [page, setPage] = useState(1)
	const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)
	let pagesArray = usePagination(totalPages, page)
	const [fetchPosts, isPostsLoading, postError] = useFetching( async () => {
		const response = await PostsService.getAll(limit, page)
		setPosts(response.data)
		const totalCount = response.headers['x-total-count']
		setTotalPages(getPageCount(totalCount, limit))
	})

	useEffect(() => {
		fetchPosts()
	}, [])

	const createPost = newPost => {
		setPosts([...posts, newPost])
		setModal(false)
	}

	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	const removePostAll = () => {
		setPosts([])
	}

	return (
		<>
			<button onClick={() => setModal(true)}>Создать пользователя</button>
			<MyModal visible={modal} setVisible={setModal}>
				<FormPost create={createPost} />
			</MyModal>
			<hr />
			<PostFilter filter={filter} setFilter={setFilter} />
			{}
			{isPostsLoading ? (
				<div style={{ textAlign: 'center', marginTop: '50px' }}>
					<Loader />
				</div>
			) : (
				<PostList
					isLoading={isPostsLoading}
					remove={removePost}
					removeAll={removePostAll}
					title='Список постов'
					posts={sortedAndSearchPosts}
				/>
			)}
			<div>
				{pagesArray.map(p => <button>{p}</button>)}
			</div>
		</>
	)
}

export default App

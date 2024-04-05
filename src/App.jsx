import React, { useMemo, useState } from 'react'
import './App.css'
import FormPost from './Components/FormPost.jsx'
import PostList from './Components/PostList.jsx'
import PostFilter from "./Components/PostFIlter.jsx";

function App() {
	const [posts, setPosts] = useState([
		{ title: 'JavaScript', body: 'Desc', id: 1 },
		{ title: 'Python', body: 'Desc', id: 2 },
		{ title: 'C++', body: 'Desc', id: 3 },
		{ title: 'Java', body: 'Desc', id: 4 },
	])

	const [filter, setFilter] = useState({sort: '', query: ''})

	const sortedPosts = useMemo(
		() => {
		if (filter.sort) {
			return [...posts].sort((a, b) =>
				a[filter.sort].localeCompare(b[filter.sort])
			)
		}
		return posts
	}, [filter.sort, posts])

	const sortedAndSearchPosts = useMemo(() => {
		return sortedPosts.filter(post =>
			post.title.toLowerCase().includes(filter.query)
		)
	}, [filter.sort, sortedPosts])

	const createPost = newPost => {
		setPosts([...posts, newPost])
	}

	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<>
			<div>
				<FormPost create={createPost} />
				<hr/>
				<PostFilter filter={filter} setFilter={setFilter}/>
				<PostList
					remove={removePost}
					title='Список постов'
					posts={sortedAndSearchPosts}
				/>

			</div>
		</>
	)
}

export default App

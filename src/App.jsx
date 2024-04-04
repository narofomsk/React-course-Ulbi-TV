import React, { useMemo, useState } from 'react'
import './App.css'
import FormPost from './Components/FormPost.jsx'
import PostList from './Components/PostList.jsx'

function App() {
	const [posts, setPosts] = useState([
		{ title: 'JavaScript', body: 'Desc', id: 1 },
		{ title: 'Python', body: 'Desc', id: 2 },
		{ title: 'C++', body: 'Desc', id: 3 },
		{ title: 'Javd', body: 'Desc', id: 4 },
	])

	const [selectedSort, SetSelectedSort] = useState('')
	const [searchQuery, setSearchQuery] = useState('')

	const sortedPosts = useMemo(() => {
		if (selectedSort) {
			return [...posts].sort((a, b) =>
				a[selectedSort].localeCompare(b[selectedSort])
			)
		}
		return posts
	}, [selectedSort, posts])

	const sortedAndSearchPosts = useMemo(() => {
		return sortedPosts.filter(post =>
			post.title.toLowerCase().includes(searchQuery)
		)
	}, [sortedPosts, searchQuery])

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
				{sortedAndSearchPosts.length === 0
					? (<h1>Список пуст</h1>)
					: (<PostList
						remove={removePost}
						title='Список постов'
						posts={sortedAndSearchPosts}
						/>
					)}
			</div>
		</>
	)
}

export default App

import React, { useMemo, useState } from 'react'
import './App.css'
import FormPost from './Components/FormPost.jsx'
import PostList from './Components/PostList.jsx'
import PostFilter from "./Components/PostFIlter.jsx";
import MyModal from "./Components/Ul/MyModal/MyModal.jsx";
import {usePosts} from "./hooks/usePosts.js";

function App() {
	const [posts, setPosts] = useState([
		{ title: 'JavaScript', body: 'Desc', id: 1 },
		{ title: 'Python', body: 'Desc', id: 2 },
		{ title: 'C++', body: 'Desc', id: 3 },
		{ title: 'Java', body: 'Desc', id: 4 },
	])

	const [filter, setFilter] = useState({sort: '', query: ''})
	const [modal, setModal] = useState(false)
	const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)

	const createPost = newPost => {
		setPosts([...posts, newPost])
		setModal(false)
	}

	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<>
				<button onClick={() => setModal(true)}>Создать пользователя</button>
				<MyModal visible={modal} setVisible={setModal}>
					<FormPost create={createPost} />
				</MyModal>
				<hr/>
				<PostFilter filter={filter} setFilter={setFilter}/>
				<PostList
					remove={removePost}
					title='Список постов'
					posts={sortedAndSearchPosts}
				/>

		</>
	)
}

export default App

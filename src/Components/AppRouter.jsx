import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About.jsx'
import Error from '../pages/Error.jsx'
import PostIdPage from '../pages/PostIdPage.jsx'
import Posts from '../pages/Posts.jsx'

export default function AppRouter() {
	return (
		<Routes>
			<Route path='about' element={<About />} />
			<Route exact path='posts' element={<Posts />} />
			<Route exact path='posts/:id' element={<PostIdPage />} />
			<Route path='*' element={<Error />} />
		</Routes>
	)
}

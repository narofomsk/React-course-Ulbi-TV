import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Ul/Navbar/Navbar.jsx'
import AppRouter from './Components/AppRouter.jsx'

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<AppRouter/>
		</BrowserRouter>
	)
}

export default App

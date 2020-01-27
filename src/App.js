import React from 'react'
import { Home, About, Contact, Navigation } from './components'
import { Route } from 'react-router-dom'
import './App.css'

const App = () => (
	<div>
		<Navigation />
		<Route exact path='/' />
		<Route path='/about'>
			<About />
		</Route>
		<Route path='/contact'>
			<Contact />
		</Route>
	</div>
)

export default App

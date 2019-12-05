'use strict'

import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import Header from './components/organisms/header'
import Home from './components/pages/home'
import Posts from './components/pages/posts'
import About from './components/pages/about'

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render () {
		return <Router>
			<Header/>
			<div style={{padding: '24px'}}>
				<Switch>
					<Route exact path="/">
						<Home/>
					</Route>
					<Route path="/about">
						<About/>
					</Route>
					<Route path="/posts">
						<Posts/>
					</Route>
				</Switch>
			</div>
		</Router>
	}
}

export default App

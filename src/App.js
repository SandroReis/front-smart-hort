import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Views/Home'

function App() {
	return (
		<div className="relative pb-10 min-h-screen">
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App

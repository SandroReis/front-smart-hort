import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import About from './Views/About'
import Product from './Views/Product'

function App () {
  return (
    <div className='relative pb-10 min-h-screen'>
      <Router>

          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/feiras'>
              <About />
            </Route>
          </Switch>

      </Router>
    </div>
  )
}

export default App

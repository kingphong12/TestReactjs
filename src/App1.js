import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './page/Home'
import Products from './page/Products'
import Reports from './page/Reports'


const App = () => {
  return(
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/reports' component={Reports} />
        </Switch>
      </Router>

    </>
  )
}

export default App

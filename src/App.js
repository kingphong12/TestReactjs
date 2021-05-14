import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import TheHeader from './component/header/TheHeader'
// import Home from './component/Home'
import SideBarContent from './component/SideBarContent'
import './scss/index.scss'


const App = () => {
  return(
    <Router>
      <div>
        <TheHeader />
        <Switch>
          <Route path="/quanlyvanban">
            <SideBarContent />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Home from './component/Home'
import './scss/index.scss'

const loading = (
  <div >
    phong
  </div>
)

// const TheLayout import('./component/Layout')

const App = () => {
  return(
    <Router>
      <div className="App">

          <React.Suspense fallback={loading}>
            <Switch>
              <Route path="/" exact component={Home} />
            </Switch>
          </React.Suspense>
      </div>
    </Router>
  )
}

export default App

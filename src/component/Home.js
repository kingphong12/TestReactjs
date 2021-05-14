import React from 'react'
import './Home.scss'
import TheHeader from './header/TheHeader'
import SideBarContent from './SideBarContent'
import { useSelector } from 'react-redux'
import HomeMain from '../page/HomeMain'
import {BrowserRouter as Router, Link, Route, Switch, useRouteMatch } from 'react-router-dom'
import Products from '../page/Products'


function Home() {
  const match = useRouteMatch();
  console.log(match)
  const IsSidebar  = useSelector(state => state.sidebar.IsSidebar)
  const IsActive = useSelector(state => state.sidebar.IsActive)

  return (
    <>
      <>
        {/* <TheHeader match={match} /> */}
          <div>
            <Link to={`${match.url}/products`}>Components</Link>
          </div>
          {/* <Products match={match} /> */}
        <div className="conainer">
          <Switch>
            <Route path={`${match.path}/products`}>
              <Products />
            </Route>
            {/* <Route exact path={`${match.path}/products`} component={HomeMain}/> */}
            {/* <Route path="/quanlyvanban" exact component={ SideBarContent }/> */}
            {/* <Route path="/products" exact component={ Products }/> */}
            {/* <Route path="/home/products" exact>
              <Products />
            </Route> */}
          </Switch>
        </div>
      </>
    </>
  )
}

export default Home

import React from 'react'
import './Home.scss'
import TheHeader from './header/TheHeader'
import SideBarContent from './SideBarContent'
import { useSelector } from 'react-redux'
import HomeMain from '../page/HomeMain'
import {BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Products from '../page/Products'


function Home() {

  const IsSidebar  = useSelector(state => state.sidebar.IsSidebar)
  const IsActive = useSelector(state => state.sidebar.IsActive)

  return (
    <>
      <>
        {/* <TheHeader /> */}
          <Link to="/products">
                quan ly van ban
          </Link>
        <div className="conainer">
          {/* <Switch> */}
            {/* <Route path='/' exact render={props => <HomeMain {...props}/>} /> */}
            {/* <Route path="/quanlyvanban" exact component={ SideBarContent }/> */}
            <Route path="/products" exact component={Products }/>
          {/* </Switch> */}
        </div>
      </>
    </>
  )
}

export default Home

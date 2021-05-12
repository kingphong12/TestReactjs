import React from 'react'
import { BrowerRouter as Router, Route, Switch } from 'react-router-dom'
import HomeMain from '../page/HomeMain'
import SideBarContent from './SideBarContent'

function Layout() {
  return (
    <>
      <Switch>
            <Route path='/' exact component={ HomeMain } />
            <Route path='/quanlyvanban' exact component={ SideBarContent } />
      </Switch>
    </>
  )
}

export default Layout

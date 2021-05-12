import React from 'react'
import Sidebar from './Sidebar'
import TheContent from './TheContent'
import './SidebarContent.scss'
import {BrowserRouter as Router} from 'react-router-dom'

const SideBarContent = (props) => {
  const { match } = props
  console.log(match)
  return (

    <Router>
      <div className="sidebar-content">
        <Sidebar />
        <div className="wrap-content">
          <TheContent />
        </div>
      </div>
    </Router>
  )
}

export default SideBarContent

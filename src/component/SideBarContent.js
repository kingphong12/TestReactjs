import React from 'react'
import Sidebar from './Sidebar'
import TheContent from './TheContent'
import './SidebarContent.scss'
import {BrowserRouter as Router} from 'react-router-dom'

const SideBarContent = () => {

  return (

    <>
      <div className="sidebar-content">
        <Sidebar />
        <div className="wrap-content">
          <TheContent />
          {/* xuaphong */}
        </div>
      </div>
    </>
  )
}

export default SideBarContent

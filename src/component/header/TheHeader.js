import React from 'react'
import './TheHeader.scss'
import Navs from './Navs'
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom'

const TheHeader = () => {

  return (
    <>
      <IconContext.Provider value={{color: 'red'}}>
        <div className="header">
          <div className="header__top">
            Logo
          </div>

          <Link to="/quanlyvanban">Topics</Link>

          {/* <Navs /> */}
        </div>
      </IconContext.Provider>
    </>
  )
}

export default TheHeader

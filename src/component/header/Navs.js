import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { IconContext} from 'react-icons'
import { NavData } from './NavData'
import NavItem from './NavItem'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
// import './nav.css'
import './Nav.scss'


const Navs = () => {
  // const [sidebar, setSidebar ] = useState(false)

  // const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <IconContext.Provider value={{color: '#fff'}}>
        <div className="nav">
          <div className="nav__menu">
            {NavData.map((item, index) => {
              return (
                <NavItem item={item} key={index} />
              )
            })}
          </div>

          <div className="nav__icons">
            <Link to="#" className="nav__icon" >
              <AiIcons.AiFillBell />
              <span>1</span>
            </Link>
            <Link to="#" className="nav__icon" >
              <AiIcons.AiFillMessage />
              <span>1</span>
            </Link>
            <Link to="#" className="nav__icon" >
              <AiIcons.AiTwotoneMail />
              <span>1</span>
            </Link>
            <Link to="#" className="nav__icon">
              <IoIcons.IoMdArrowDropdown className="nav__icon-drop" />
            </Link>
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
}

export default Navs

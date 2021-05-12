import React, { useState } from 'react'
import styled from 'styled-components'
import { SidebarData } from './SidebarData'
import SubMenu from './SubMenu'
import { IconContext} from 'react-icons'

const SidebarNav = styled.nav`
  padding-top: 10px;
  background-color: rgb(59, 92, 240);
  width: 15%;
  height: 100vh;
  display: flex;
  justify-content: center;
  top: 0;
  // transition: 350ms;
`
const SidebarWrap = styled.div`
  width: 100%;
`

const Sidebar = (match) => {
  const [sidebar, setSidebar ] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <SidebarNav>
        <SidebarWrap>
          {/* <NavIcon to="#">
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </NavIcon> */}
          {SidebarData.map((item, index) => {
            return(
              <SubMenu item={item} key={index} match={match}/>
            )
          })}
        </SidebarWrap>
      </SidebarNav>
      </IconContext.Provider>
    </>
  )
}

export default Sidebar

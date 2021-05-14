import React, { useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'

const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;

    &:hover {
      background-color: rgb(92, 121, 252);
      border-left: 4px solid #632ce4;
      cursor: pointer;

    }
  `

  const SidebarLabel = styled.span`
    margin-left: 16px;
  `

   const DropdownLink = styled(Link)`
   background-color: rgb(131, 154, 250);
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;

    &:hover {
      background-color: rgb(131, 154, 239);
      cursor: pointer;
    }
   `
const SubMenu = ({item}) => {
  const {url} = useRouteMatch();
  const [subnav, setSubnav] = useState(false)

  const showSubnav = () => setSubnav(!subnav)

  return (
    <>

          <li>
            <Link to={`${url}/products`}>truong xuan phong Products</Link>
          </li>
      {/* <SidebarLink className="menu-link" to={`${url}${item.path}`} onClick={item.subNav &&
        showSubnav}>
        <div >
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
          ? item.iconOpened
          : item.subNav
          ? item.iconClosed
          : null }
        </div>
      </SidebarLink>

      {subnav && item.subNav.map((item, index) => {
        return(
          <DropdownLink className="menu-link-item" to={item.path} key={index} >
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </DropdownLink>
        )
      })} */}
    </>
  )
}

export default SubMenu

import React from 'react'
// import { AiTwotoneFileImage } from 'react-icons/ai'
// import { IconContext } from 'react-icons/lib'
import { useDispatch} from 'react-redux'
import { Link, useRouteMatch } from 'react-router-dom'
import { showSideBar } from '../../store/action/sidebar'
import './NavItem.scss'


const NavItem = ({item}) => {

  const match = useRouteMatch()
  const dispatch = useDispatch()

  const handleClickShowSidebar = (item) => {
    const action = showSideBar(item)
    dispatch(action)
  }

  return (
    <>
      <div className="nav__wrap">
      {/* <Link to={`${match.url}/quanlyvanban`}>
                quan ly van ban
      </Link> */}
          <li>
            <Link to="/quanlyvanban">Topics</Link>
          </li>
        {/* <Link className="nav__menu__item" to={item.path} onClick={handleClickShowSidebar(item)} >
          {item.icon}
          <div className="nav__menu__item--text">
          {item.title}
          </div>
        </Link>

        <ul className={item.subNav ? "nav__menu__item__sub" : ""}>
            {item.subNav && item.subNav.map((item, idx) => {
              return(
                <li className="nav__menu__item__sub__item" key={idx}>
                  <Link className="__item--link" to={item.path} >
                    {item.icon}

                    <div>
                    {item.title}
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul> */}
      </div>
    </>
  )
}

export default NavItem

import React from 'react'
import { useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router'


const HomeMain = () => {
  const { path, url } = useRouteMatch();
  console.log(url)
  const IsSidebar  = useSelector(state => state.sidebar.IsSidebar)
  const IsActive = useSelector(state => state.sidebar.IsActive)

  return (
    <div>
      truong xuan phong
    </div>
  )
}

export default HomeMain

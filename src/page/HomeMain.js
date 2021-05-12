import React from 'react'
import { useSelector } from 'react-redux'


const Home = () => {

  const IsSidebar  = useSelector(state => state.sidebar.IsSidebar)
  const IsActive = useSelector(state => state.sidebar.IsActive)

  return (
    <div>
      truong xuân phong
    </div>
  )
}

export default Home

import React from 'react'
import { Link } from 'react-router-dom'
import Products from './Products'

export const Vanbandi = () => {
  return (
    <div className="pages">
      taomoi/vanbandi
    </div>
  )
}

export const Vanbannoibo = () => {
  return(
    <div className="pages">
    taomoi/vanbannoibo
    <button>
      <Link to="/reports/reports1">
        phong
      </Link>
    </button>
  </div>
  )
}

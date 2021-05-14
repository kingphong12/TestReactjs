import React from 'react'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom'
import HomeMain from './HomeMain'

function Products() {
  const { path, url } = useRouteMatch();
  console.log(url)
  return (
    <>
      <div>
        <Link to={`${url}/homemain`}>
          Products
        </Link>
      </div>

        <Route path={`${path}/products`} exact component={HomeMain} />
    </>
  )
}

export default Products

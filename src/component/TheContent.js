import React from 'react'
import {Route, Switch, useHistory, useRouteMatch } from 'react-router-dom'
import Products from '../page/Products'
// import HomeMain from '../page/HomeMain'
// // import { ReportsOne, ReportsTwo, ReportsThree } from '../page/Reports'
// // import { Vanbandi, Vanbannoibo } from '../page/Taomoi'

const TheContent = () => {
  const {path} = useRouteMatch();
  const history = useHistory()
  console.log("histoty :  "  + history)
  return (
    <div className="content">
      <Switch>
        <Route path={`${path}/products`} exact component={Products} />
      </Switch>
    </div>
  )
}

export default TheContent

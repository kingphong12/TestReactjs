import React from 'react'
import {Route, Switch } from 'react-router-dom'
import Products from '../page/Products'
import { ReportsOne, ReportsTwo, ReportsThree } from '../page/Reports'
import { Vanbandi, Vanbannoibo } from '../page/Taomoi'

const TheContent = () => {
  return (
    <div className="content">
      <Switch>
        <Route path='/taomoi/vanbandi' exact component={Vanbandi} />
        <Route path='/taomoi/vanbannoibo' exact component={Vanbannoibo} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Route path='/products' exact component={Products} />
      </Switch>
    </div>
  )
}

export default TheContent

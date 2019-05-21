import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/home'
import Cart from './components/cart'
import Checkout from './components/checkout'
import Orders from './components/orders'

const Router = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/cart' component={Cart} />
    <Route exact path='/checkout' component={Checkout} />
    <Route path='/orders/:id' component={Orders} />
  </Switch>
)

export default Router
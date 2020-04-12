import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Admin from 'layouts/Admin.js'
import Login from './views/Login/Login'
import { useUser } from 'context/user'

const Routes = () => {
  const [user, dispatchUser] = useUser()

  const renderRoutes = _ => {
    return (
      <Switch>
        <Route path='/admin' component={Admin} />
        <Redirect to='/admin/inicio' />
      </Switch>
    )
  }

  const renderPublicRoutes = () => {
    return (
      <Switch>
        <Route path={`/login`} render={props => <Login {...props} />} />
        <Redirect to='/login' />
      </Switch>
    )
  }
  return (
    <>{user.status === 'loggedOut' ? renderPublicRoutes() : renderRoutes()}</>
  )
}

export default Routes

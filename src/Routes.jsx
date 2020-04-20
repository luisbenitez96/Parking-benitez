import React, { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Login from './views/Login/Login'
import HomeRedirect from './views/Auth/HomeRedirect'
import Admin from 'layouts/Admin.js'

import { useUser } from 'context/user'
import Loading from './components/Loading/Loading'

const Routes = _ => {
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
    <>
      {user.status !== 'loggedOut' ? (
        <Suspense fallback={Loading}>{renderRoutes()}</Suspense>
      ) : (
        renderPublicRoutes()
      )}
    </>
  )
}

export default Routes

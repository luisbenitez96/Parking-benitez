import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import PermissionContext from '../../PermissionContext'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useContext(PermissionContext)
  const userId = auth.userId && auth.userId

  const route = (
    <Route {...rest} render={props => <Component {...props} {...userId} />} />
  )

  const redirect = (
    <Redirect
      to={{
        pathname: '/login',
        state: { from: rest.location }
      }}
    />
  )
  return auth.isAuthenticated ? route : redirect
}

export default PrivateRoute

import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Router } from 'react-router-dom'

import 'assets/css/material-dashboard-react.css?v=1.8.0'

import Routes from './Routes'
import { FirebaseProvider } from './context/firebase'
import { UserProvider } from './context/user'

const hist = createBrowserHistory()

ReactDOM.render(
  <Router history={hist}>
    <FirebaseProvider>
      <UserProvider>
        <Routes />
      </UserProvider>
    </FirebaseProvider>
  </Router>,
  document.getElementById('root')
)

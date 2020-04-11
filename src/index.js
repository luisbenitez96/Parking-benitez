import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch, Redirect } from 'react-router-dom'

import Admin from 'layouts/Admin.js'

import 'assets/css/material-dashboard-react.css?v=1.8.0'

import { FirebaseProvider } from './context/firebase'
import { UserProvider } from './context/user'



const hist = createBrowserHistory()

ReactDOM.render(
    <Router history={hist}>
        <FirebaseProvider>
            <UserProvider>
                <Switch>
                    <Route path='/admin' component={Admin} />
                    <Redirect from='/' to='/admin/inicio' />
                </Switch>
            </UserProvider>
        </FirebaseProvider>
    </Router>,
    document.getElementById('root')
)

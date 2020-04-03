import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import { useUser } from 'context/user'

import GridItem from 'components/Grid/GridItem.js'
import GridContainer from 'components/Grid/GridContainer.js'
import Card from 'components/Card/Card.js'
import CardFooter from 'components/Card/CardFooter.js'

import styles from 'assets/jss/material-dashboard-react/views/dashboardStyle.js'

const useStyles = makeStyles(styles)
const Login = () => {
  const classes = useStyles()
  const [formCreateUser, setFormCreateUser] = useState({
    email: '',
    password: '',
    phone: '',
    fullName: ''
  })
  const [formLogin, setLogin] = useState({ email: '', password: '' })

  const [user, dispatchUser] = useUser()
  console.log({ user, dispatchUser })
  const onChangeFormCreateUser = ev => {
    const value = ev.target.value
    const name = ev.target.name

    setFormCreateUser(prev => ({
      ...prev,
      [name]: value
    }))
  }
  const onChangeFormLogin = ev => {
    const value = ev.target.value
    const name = ev.target.name

    setLogin(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const createUser = async () => {
    try {
      const response = await dispatchUser.register(formCreateUser)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const login = async () => {
    try {
      await dispatchUser.login(formLogin)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <GridContainer>
        <button
          onClick={() => {
            dispatchUser.logout()
          }}
        >
          LOGOUT
        </button>

        <input
          type='text'
          name='email'
          placeholder='email'
          value={formCreateUser.email}
          onChange={onChangeFormCreateUser}
        />
        <input
          type='text'
          name='password'
          placeholder='password'
          value={formCreateUser.password}
          onChange={onChangeFormCreateUser}
        />
        <input
          type='text'
          name='phone'
          placeholder='phone'
          value={formCreateUser.phone}
          onChange={onChangeFormCreateUser}
        />
        <input
          type='text'
          name='fullName'
          placeholder='fullName'
          value={formCreateUser.fullName}
          onChange={onChangeFormCreateUser}
        />
        <button onClick={createUser}>Crear usuario</button>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <p className={classes.cardCategory}>Login</p>
            <CardFooter>
              <input
                type='text'
                name='email'
                placeholder='email'
                value={formLogin.email}
                onChange={onChangeFormLogin}
              />
              <input
                type='text'
                name='password'
                placeholder='password'
                value={formLogin.password}
                onChange={onChangeFormLogin}
              />
              <button onClick={login}>Iniciar sesion</button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  )
}

export default Login

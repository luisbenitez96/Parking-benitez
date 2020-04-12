import React, { useState } from 'react'

import TextField from '@material-ui/core/TextField'

import { useUser } from 'context/user'

import GridItem from 'components/Grid/GridItem.js'
import GridContainer from 'components/Grid/GridContainer.js'
import Button from '../../components/CustomButtons/Button'

const Login = () => {
  const [formCreateUser, setFormCreateUser] = useState({
    email: '',
    password: '',
    phone: '',
    fullName: ''
  })
  const [formLogin, setLogin] = useState({ email: '', password: '' })

  const [user, dispatchUser] = useUser()

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
    <>
      <GridContainer
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          padding: '150px'
        }}
      >
        <GridItem xs={12} sm={6}>
          <GridItem
            xs={12}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <h3>Iniciar sesión</h3>
          </GridItem>
          <GridContainer spacing={3}>
            <GridItem xs={12}>
              <TextField
                variant='outlined'
                autoComplete='none'
                type='text'
                name='email'
                placeholder='Email'
                style={{ width: '100%' }}
                value={formLogin.email}
                onChange={onChangeFormLogin}
              />
            </GridItem>
            <GridItem xs={12}>
              <TextField
                variant='outlined'
                autoComplete='none'
                type='text'
                name='password'
                placeholder='Contraseña'
                style={{ width: '100%' }}
                value={formLogin.password}
                onChange={onChangeFormLogin}
              />
            </GridItem>
            <GridItem
              xs={12}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Button color='success' onClick={login}>
                Iniciar sesión
              </Button>
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={6}>
          <GridItem
            xs={12}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <h3>Crear cuenta</h3>
          </GridItem>
          <GridContainer spacing={3}>
            <GridItem xs={12}>
              <TextField
                variant='outlined'
                autoComplete='none'
                type='text'
                style={{ width: '100%' }}
                name='email'
                placeholder='Email'
                value={formCreateUser.email}
                onChange={onChangeFormCreateUser}
              />
            </GridItem>
            <GridItem xs={12}>
              <TextField
                variant='outlined'
                autoComplete='none'
                type='text'
                style={{ width: '100%' }}
                name='password'
                placeholder='Contraseña'
                value={formCreateUser.password}
                onChange={onChangeFormCreateUser}
              />
            </GridItem>
            <GridItem xs={12} sm={6}>
              <TextField
                variant='outlined'
                autoComplete='none'
                type='text'
                style={{ width: '100%' }}
                name='phone'
                placeholder='Celular'
                value={formCreateUser.phone}
                onChange={onChangeFormCreateUser}
              />
            </GridItem>
            <GridItem xs={12} sm={6}>
              <TextField
                variant='outlined'
                autoComplete='none'
                type='text'
                name='fullName'
                style={{ width: '100%' }}
                placeholder='Nombre completo'
                value={formCreateUser.fullName}
                onChange={onChangeFormCreateUser}
              />
            </GridItem>
            <GridItem
              xs={12}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Button color='success' onClick={createUser}>
                Crear cuenta
              </Button>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </>
  )
}

export default Login

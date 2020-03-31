import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'

import Store from '@material-ui/icons/Store'
import ChevronRight from '@material-ui/icons/ChevronRight'
import Accessibility from '@material-ui/icons/Accessibility'
import { useUser } from 'context/user'

import GridItem from 'components/Grid/GridItem.js'
import GridContainer from 'components/Grid/GridContainer.js'
import Card from 'components/Card/Card.js'
import CardHeader from 'components/Card/CardHeader.js'
import CardIcon from 'components/Card/CardIcon.js'
import CardFooter from 'components/Card/CardFooter.js'

import styles from 'assets/jss/material-dashboard-react/views/dashboardStyle.js'

const useStyles = makeStyles(styles)

export default function Dashboard() {
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
        <div style={{ paddingTop: '50px' }}>
            <button onClick={() => {
                dispatchUser.logout()
            }}>LOGOUT</button>
            <GridContainer>
                <GridItem xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader color='warning' stats icon>
                            <CardIcon color='warning'>
                                <Accessibility />
                            </CardIcon>
                            <p className={classes.cardCategory}>Sección:</p>
                            <h3 className={classes.cardTitle}>Usuarios</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <ChevronRight />
                                <a href='/admin/usuarios'>
                                    Ir a seccion de usuarios
                                </a>
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader color='success' stats icon>
                            <CardIcon color='success'>
                                <Icon>content_copy</Icon>
                            </CardIcon>
                            <p className={classes.cardCategory}>Sección</p>
                            <h3 className={classes.cardTitle}>Vehiculos</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <ChevronRight />
                                <a href='/admin/vehiculos'>
                                    Ir a seccion de vehiculos
                                </a>
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader color='danger' stats icon>
                            <CardIcon color='danger'>
                                <Store />
                            </CardIcon>
                            <p className={classes.cardCategory}>Sección:</p>
                            <h3 className={classes.cardTitle}>Balances</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <ChevronRight />
                                <a href='/admin/balances'>
                                    Ir a seccion de balances
                                </a>
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>

                <GridItem xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader color='danger' stats icon>
                            <CardIcon color='danger'>
                                <Store />
                            </CardIcon>
                            <p className={classes.cardCategory}>Create user</p>
                        </CardHeader>
                        <CardFooter>
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
                            <div className={classes.stats}>
                                <ChevronRight />
                                <a href='/admin/balances'>
                                    Ir a seccion de balances
                                </a>
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>

                <GridItem xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader color='danger' stats icon>
                            <CardIcon color='danger'>
                                <Store />
                            </CardIcon>
                            <p className={classes.cardCategory}>Login</p>
                        </CardHeader>
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
                            <div className={classes.stats}>
                                <ChevronRight />
                                <a href='/admin/balances'>
                                    Ir a seccion de balances
                                </a>
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    )
}

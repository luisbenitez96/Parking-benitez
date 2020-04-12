import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'

import Store from '@material-ui/icons/Store'
import ChevronRight from '@material-ui/icons/ChevronRight'
import Accessibility from '@material-ui/icons/Accessibility'

import GridItem from 'components/Grid/GridItem.js'
import GridContainer from 'components/Grid/GridContainer.js'
import Card from 'components/Card/Card.js'
import CardHeader from 'components/Card/CardHeader.js'
import CardIcon from 'components/Card/CardIcon.js'
import CardFooter from 'components/Card/CardFooter.js'

import styles from 'assets/jss/material-dashboard-react/views/dashboardStyle.js'

const useStyles = makeStyles(styles)

const Dashboard = _ => {
  const classes = useStyles()

  return (
    <div style={{ paddingTop: '50px' }}>
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
                <a href='/admin/usuarios'>Ir a seccion de usuarios</a>
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
                <a href='/admin/vehiculos'>Ir a seccion de vehiculos</a>
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
                <a href='/admin/balances'>Ir a seccion de balances</a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  )
}

export default Dashboard

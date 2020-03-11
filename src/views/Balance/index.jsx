import React from 'react'

import ChartistGraph from 'react-chartist'

import { makeStyles } from '@material-ui/core/styles'

import ArrowUpward from '@material-ui/icons/ArrowUpward'
import AccessTime from '@material-ui/icons/AccessTime'

import GridItem from 'components/Grid/GridItem.js'
import GridContainer from 'components/Grid/GridContainer.js'
import Card from 'components/Card/Card.js'
import CardHeader from 'components/Card/CardHeader.js'
import CardBody from 'components/Card/CardBody.js'
import CardFooter from 'components/Card/CardFooter.js'

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from 'variables/charts.js'

import styles from 'assets/jss/material-dashboard-react/views/dashboardStyle.js'

const useStyles = makeStyles(styles)

export default function Balance() {
  const classes = useStyles()
  return (
    <div style={{ paddingTop: '50px' }}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color='success'>
              <ChartistGraph
                className='ct-chart'
                data={dailySalesChart.data}
                type='Line'
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Usuarios semanales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{' '}
                Aumento de los clientes.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> actualizado hace 4 minutos
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color='warning'>
              <ChartistGraph
                className='ct-chart'
                data={emailsSubscriptionChart.data}
                type='Bar'
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Usuarios mensuales</h4>
              <p className={classes.cardCategory}>
                Cantidad de usuarios recibidos al mes
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> actualizado hace 2 días
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color='danger'>
              <ChartistGraph
                className='ct-chart'
                data={completedTasksChart.data}
                type='Line'
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Usuarios diarios</h4>
              <p className={classes.cardCategory}>
                Cantidad de usuarios recibidos en el día
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> actuaizado hace 2 días
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  )
}

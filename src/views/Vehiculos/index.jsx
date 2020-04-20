import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import GridItem from 'components/Grid/GridItem.js'
import GridContainer from 'components/Grid/GridContainer.js'
import Modal from 'components/Modal/Modal.jsx'
import Table from 'components/Table/Table.js'
import Card from 'components/Card/Card.js'
import CardHeader from 'components/Card/CardHeader.js'
import CardBody from 'components/Card/CardBody.js'
import Button from 'components/CustomButtons/Button.js'

import styles from 'assets/jss/material-dashboard-react/views/dashboardStyle.js'

import { vehiculosData } from '../../variables/tableData'
import VehiculosDataPage from './VehiculosData'

const useStyles = makeStyles(styles)

export default function User() {
  const [data, setData] = useState(vehiculosData)
  const [modal, setModal] = useState(false)
  const [selected, setSelected] = useState(null)
  const classes = useStyles()

  const onRemove = id => {
    let newData = data.filter(item => {
      if (item[0] !== id) return item
    })
    setData(newData)
  }

  const handleModal = ev => {
    let item = data.map(item => {
      if (item[0] === ev) return item
    })
    !isNaN(ev) && setSelected(item[0])
    modal && setSelected(null)
    setModal(!modal)
  }

  return (
    <GridContainer>
      <Modal openModal={modal} onToggleModal={handleModal}>
        <VehiculosDataPage
          setData={setData}
          data={data}
          selected={selected}
          toggle={handleModal}
        />
      </Modal>
      <GridItem
        xs={12}
        sm={12}
        md={12}
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Button color='success' onClick={handleModal}>
          Agregar vehiculo
        </Button>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color='success'>
            <h4 className={classes.cardTitleWhite}>Vehiculos</h4>
            <p className={classes.cardCategoryWhite}>
              Vehiculos registrados en el parqueadero
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor='success'
              tableHead={[
                'Placa',
                'Cuidad',
                'Departamento',
                'Propietario',
                'Fecha de ingreso'
              ]}
              tableData={data}
              onRemove={onRemove}
              onEdit={handleModal}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  )
}

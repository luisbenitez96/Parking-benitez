import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import styles from './style'
import { parkingData } from '../../variables/parkingData'

const useStyles = makeStyles(styles)

const ParkingView = () => {
  const classes = useStyles()
  const [data, setData] = useState({ ...parkingData })

  const getParkingClass = item => {
    let parkinClass = classes.divTableCell
    switch (item) {
      case 0:
        return `${parkinClass} ${classes.divTableCellEmpty}`
      case 1:
        return `${parkinClass} ${classes.divTableCellSelected}`
      case 2:
        return `${parkinClass} ${classes.divTableCellUnassigned}`
      default:
        return `${parkinClass} ${classes.divTableCellUnassigned}`
    }
  }
  return (
    <div className={classes.container}>
      <div className={classes.divTable}>
        <div className={classes.divTableBody}>
          {[0, 3, 6, 9, 12, 15].map(i => {
            return (
              <div className={classes.divTableRow} key={i}>
                {[1, 2, 3].map(j => {
                  return (
                    <div
                      className={getParkingClass(data[i + j].state)}
                      key={i + j}
                    >
                      <p>{i + j}</p>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ParkingView

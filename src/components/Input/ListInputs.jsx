import React from 'react'
import PropTypes from 'prop-types'

import Input from './Input'
import GridItem from '../Grid/GridItem'

const ListInputs = props => {
  return props.inputs.map(formElement => {
    const sizeFile =
      formElement.config.elementType === 'photo'
        ? { xs: 12, sm: 12, md: 12 }
        : {}

    return (
      <GridItem
        key={formElement.id}
        xs={props.xs}
        sm={props.sm}
        md={props.md}
        {...sizeFile}
      >
        <Input
          key={formElement.id}
          label={formElement.config.elementLabel}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          onChange={ev => props.changed(ev, formElement.id)}
          error={!formElement.config.valid && formElement.config.touched}
          helperText={formElement.config.error}
        />
      </GridItem>
    )
  })
}

ListInputs.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number
}

ListInputs.defaultProps = {
  xs: 12,
  sm: 12,
  md: 12
}

export default ListInputs

import React, { useEffect } from 'react'

import GridItem from 'components/Grid/GridItem.js'
import GridContainer from 'components/Grid/GridContainer.js'
import ListInputs from '../../components/Input/ListInputs'
import userFields from '../../variables/fields/user'
import useForm from '../../hooks/useForm'

import Button from '../../components/CustomButtons/Button'

const UserData = props => {
  const { data, setData, selected, toggle } = props
  const form = useForm(userFields)

  useEffect(() => {
    selected && form.onLoad(selected)
    return () => form.onReset()
  }, [selected])

  const handlerSubmit = ev => {
    ev.preventDefault()
    let dataUpdated = data
    const newData = form.getJson()
    if (selected) {
      let index = data.findIndex(item => item[0] == selected[0])
      dataUpdated = [...data.slice(0, index), newData, ...data.slice(index + 1)]
      setData(dataUpdated)
      toggle()
    } else {
      dataUpdated.unshift(newData)
      setData(dataUpdated)
      form.onReset()
      toggle()
    }
  }

  return (
    <form onSubmit={handlerSubmit}>
      <GridContainer>
        <ListInputs inputs={form.onRender()} changed={form.onChanged} />
        <GridItem
          xs={12}
          sm={12}
          md={12}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px'
          }}
        >
          <Button color='success' type='submit'>
            {selected ? 'Editar' : 'Crear'}
          </Button>
        </GridItem>
      </GridContainer>
    </form>
  )
}

export default UserData

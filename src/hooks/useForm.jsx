import { useState } from 'react'

const useForm = fieldForm => {
  const [fieldState, setFieldState] = useState({ ...fieldForm })

  const onRender = () => {
    const formElementsArr = []
    if (fieldState) {
      for (let key in fieldState) {
        formElementsArr.push({
          id: key,
          config: fieldState[key]
        })
      }
    }
    return formElementsArr
  }

  const getJson = () => {
    const data = []
    Object.keys(fieldState).map(key => data.push(fieldState[key].value))
    return data
  }

  const getFormData = () => {
    const data = new FormData()
    for (let key in fieldState) {
      data.append(key, fieldState[key].value)
    }
    return data
  }

  const onReset = () => {
    const loadForm = { ...fieldState }
    Object.keys(loadForm).map((key, indx) => (loadForm[key].value = ''))
    setFieldState(loadForm)
  }

  const onChanged = (ev, id) => {
    const inputValue = ev.target.value
    const formData = {
      ...fieldState,
      [id]: {
        ...fieldState[id],
        value: inputValue
      }
    }
    setFieldState(formData)
  }

  const onLoad = data => {
    const loadForm = { ...fieldState }
    console.log(data)
    Object.keys(loadForm).map((key, indx) => (loadForm[key].value = data[indx]))
    setFieldState(loadForm)
  }

  return {
    onRender,
    onChanged,
    getJson,
    onReset,
    onLoad,
    getFormData
  }
}

export default useForm

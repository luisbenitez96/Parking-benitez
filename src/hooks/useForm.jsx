import { useState } from 'react'
import { checkValidation } from '../variables/formValidity'

const useForm = fieldForm => {
  const [fieldState, setFieldState] = useState({ ...fieldForm })
  const [formIsValid, setFormIsValid] = useState(false)

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

  const handlerFormValidation = form => {
    let isValidForm = true
    for (const inputElement in form) {
      isValidForm = isValidForm && form[inputElement].valid
    }
    return isValidForm
  }

  const onChanged = (ev, id) => {
    const inputValue = ev.target.value
    let validation = {
      isValid: true,
      error: false
    }
    validation = checkValidation(inputValue, fieldState[id].validation)
    const formData = {
      ...fieldState,
      [id]: {
        ...fieldState[id],
        value: inputValue,
        valid: validation.isValid,
        touched: true,
        error: validation.error
      }
    }
    setFieldState(formData)
    setFormIsValid(handlerFormValidation(formData))
  }

  const onLoad = data => {
    const loadForm = { ...fieldState }
    Object.keys(loadForm).map((key, indx) => (loadForm[key].value = data[indx]))
    setFieldState(loadForm)
  }

  return {
    onRender,
    onChanged,
    getJson,
    onReset,
    onLoad,
    getFormData,
    formIsValid
  }
}

export default useForm

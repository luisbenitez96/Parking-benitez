export const checkValidation = (value = '', rules) => {
  let isValid = true
  let error = ''

  if (!rules) {
    return {
      isValid,
      error
    }
  }

  if (rules.required) {
    isValid = value.trim() !== '' && isValid
    if (!isValid) {
      error = 'Este campo es requerido'
    }
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid
    if (!isValid) {
      error = `Este campo debe tener mínimo ${rules.minLength} caracteres `
    }
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid
    if (!isValid) {
      error = `Este campo debe tener máximo ${rules.maxLength} caracteres `
    }
  }

  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    isValid = pattern.test(value) && isValid
    if (!isValid) {
      error = `Este correo no es valido`
    }
  }

  if (rules.isNumeric) {
    const pattern = /^\d+$/
    isValid = pattern.test(value) && isValid
    if (!isValid) {
      error = `Esto no es un número`
    }
  }

  if (rules.isText) {
    const pattern = /^(?=.*[0-9])(?=.*[!@#$])[a-zA-Z0-9!@#$%^&*]+$/
    if (pattern.test(value)) {
      isValid = false
      error = 'Este campo contiene caracteres no permitidos'
    }
  }

  if (rules.isUrl) {
    const pattern = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/
    isValid = pattern.test(value) && isValid
    if (!isValid) {
      isValid = false
      error = 'Esta URL no es válida'
    }
  }

  return {
    isValid,
    error
  }
}

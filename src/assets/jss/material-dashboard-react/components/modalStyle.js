import { primaryColor } from '../../material-dashboard-react'

const modalStyle = {
  dialogTitle: {
    background: `linear-gradient(45deg, ${primaryColor[0]} 30%, ${
      primaryColor[4]
    } 90%)`,
    textAlign: 'center',
    flex: '0 0 auto',
    margin: 0,
    padding: '24px 24px 20px'
  },
  dialogTitleText: {
    color: 'white'
  }
}

export default modalStyle

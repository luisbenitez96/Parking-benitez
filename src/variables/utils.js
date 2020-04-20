import moment from 'moment'
import 'moment/locale/es'

export const getDateNow = () => moment().format('YYYY-MM-DD')

export const getSpecificDate = date => moment(date).format('YYYY-MM-DD')

export const getFullDateNow = _ => moment().format('YYYY-MM-DD, hh:mm a')

export const getSpecificFullDate = date =>
  moment(date).format('YYYY-MM-DD, hh:mm a')

export const getTimeAgo = date => moment(date).fromNow()

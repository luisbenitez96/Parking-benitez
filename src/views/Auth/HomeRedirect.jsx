import React, { useEffect } from 'react'
import Spinner from '../../components/Loading/Spinner'

const HomeRedirect = () => {
  useEffect(() => {
    window.location.replace('/')
  }, [])

  return <Spinner />
}

export default HomeRedirect

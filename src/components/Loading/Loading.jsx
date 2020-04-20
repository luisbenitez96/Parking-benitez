import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

const Loading = (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%'
  }}
  >
    <CircularProgress size={40} thickness={5} />
  </div>
)
export default Loading

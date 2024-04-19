import { Button, TextField } from '@mui/material'
import React from 'react'

const A = () => {
    

  return (
    <div style={{margin:'10%'}}>
      <TextField variant='outlined' label="Username"></TextField>
      <br /><br />
      <TextField variant='outlined' label="Password"></TextField>
      <br /><br />
      <Button variant='Contained'>Login</Button>
      <br /><br />
    </div>
  )
}

export default A

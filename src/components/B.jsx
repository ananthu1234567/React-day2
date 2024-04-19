import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

const B = () => {
  return (
    <div style={{margin:'10%'}}>
      <TextField label="Your name" variant='filled'></TextField>
      <br />
      <br />
      <Button variant='Contained'>Signup</Button>
    </div>
  )
}

export default B

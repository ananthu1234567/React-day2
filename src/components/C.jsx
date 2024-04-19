import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const C = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h5" style ={{textAlign:'left'}} component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit"><Link to={'/login'} style={{textDecoration:'none', color:"white"}}>Login</Link></Button>
          <Button color="inherit"><Link to={'/signup'} style={{textDecoration:'none', color:"white"}}>Signup</Link></Button>
          <Button color="inherit"><Link to={'/data'} style={{textDecoration:'none', color:"white"}}>Data</Link></Button>
          <Button color="inherit"><Link to={'/text'} style={{textDecoration:'none', color:"white"}}>Text</Link></Button>

        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default C

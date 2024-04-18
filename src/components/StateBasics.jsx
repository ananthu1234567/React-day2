import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [name,setName] = useState("As you can see")
    const changeName = ()=>{
        console.log("btn clicked");
        setName("I'm not dead")
    }
  return (
    <div>
      <Typography varient ='h4'> {name}</Typography><br />
      <Button variant='contained' onClick={changeName}>click me</Button>
      
    </div>
  )
}

export default StateBasics

import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Spiderman = () => {
    var [name,setName] = useState()
    const changeGallery = ()=>{
        console.log("btn clicked");
        setName("Welcome to Gallery")
    } 
    var [name,setName] = useState()
    const changeHome = ()=>{
        console.log("btn clicked");
        setName("Welcome to Home")
    } 
    var [name,setName] = useState()
    const changeContactus = ()=>{
        console.log("btn clicked");
        setName("Welcome to Contact us")
    } 
    return (
    <div style={{margin:'10%'}}>
        <Typography variant='h3'>{name}</Typography>
        <br /><br />
    <Button variant='contained' color='primary' onClick={changeGallery}>Gallery</Button>&nbsp;
    <Button variant='contained' color='success' onClick={changeHome}>Home</Button>&nbsp;
    <Button variant='contained' color='error' onClick={changeContactus}>Contact us</Button>
    </div>
  )
}

export default Spiderman

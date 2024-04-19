import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useState } from 'react'

const D = () => {
    var[inputs,setInputs] = useState([]);
    var[data,setData] = useState([]);
    const inputHandler =(e)=>{
      setInputs({...inputs,[e.target.name]:e.target.value})
      console.log(inputs)
    }
      const addHandler = () =>{
        console.log("clicked");
        setData((data)=>[...data,inputs]);
        console.log(data);
    }
    
  return (
    <div style={{margin:'10%'}}>
      <TextField variant='filled' name='sname' label='Name'onChange={inputHandler}></TextField> &ensp;
      <TextField variant='filled' name='age' label='Age' onChange={inputHandler}></TextField><br /><br />
      <TextField variant='filled' name='place' label='Place' onChange={inputHandler}></TextField> &ensp;
      <TextField variant='filled' name='Phone' label='Phone no' onChange={inputHandler}></TextField><br /><br />
         <Button variant='outlined' onClick={addHandler}>Submit</Button>
  
         <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell style={{color:"red",fontStyle:"oblique"}}>Name</TableCell>
                    <TableCell style={{color:"red",fontStyle:"oblique"}}>Age</TableCell>
                    <TableCell style={{color:"red",fontStyle:"oblique"}}>Place</TableCell>
                    <TableCell style={{color:"red",fontStyle:"oblique"}}>Phone no</TableCell>   
                    </TableRow>
                </TableHead>
                <TableBody>
                   {data.map((v,i)=>{
                    return<TableRow key={i}>
                        <TableCell>{v.sname}</TableCell>
                        <TableCell>{v.age}</TableCell>
                        <TableCell>{v.place}</TableCell>
                        <TableCell>{v.Phone}</TableCell>
                    </TableRow>
                   })} 
                
                </TableBody>
            </Table>
        </TableContainer> 

    </div>
  )
}

export default D

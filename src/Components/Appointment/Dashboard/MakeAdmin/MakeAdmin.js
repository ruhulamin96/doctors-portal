import { Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import useAuth from '../../../hooks/useAuth';

function MakeAdmin() {
    const {token}=useAuth()
    const [email, setEmail]=useState();
    const handleOnBlur=(e)=>{
    const email=e.target.value;
          setEmail(email)
    }
    const handleOnsubmit=(e)=>{
        const user={email}
        axios.put(`https://intense-reef-07418.herokuapp.com/users/admin`,{
            user,
             headers: {"Authorization" : `Bearer ${token}`} 
        })
        .then(result=>console.log(result))
        console.log(email)
        e.preventDefault()
    }
    return (
        <div>
          <form onSubmit={handleOnsubmit}>
          <TextField 
          type="email"
          onBlur={handleOnBlur}
           label="Email" variant="standard" />
           <Button type="submit">Make Admin</Button>
              </form>
        </div>
    )
}

export default MakeAdmin

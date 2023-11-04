import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios"
import { Link, json } from 'react-router-dom'

export default function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const loginfunc= async()=>{
   
    if (!email) {
        alert("email is required")
        return;
    }
    if (!password) {
        alert("password is required")
        return;
    }
  
     
  const response = await axios.post('/loginuser',{
  
    email:email,
    password:password,
  
    })

    if (response?.data?.user) {
      console.log(response?.data?.message)
    localStorage.setItem("user",JSON.stringify(response.data.user))

        window.location.href='/'
     } 
    else {
        alert(response?.data?.message)
    }

  
}

  
  return (

        <div className='singup-form'>
        <div className='heading'>Login</div>
   

        <div className='input-field' >
            <label htmlFor='email' className='input-label'>Email</label>
            <input type='email' id='email' className='input-tag' value={email} onChange={(e)=>{
                setEmail(e.target.value)
            }} />
        </div>

        <div className='input-field'>
            <label htmlFor='password' className='input-label'>Password</label>
            <input type='password' id='password' className='input-tag'  value={password} onChange={(e)=>{
                setPassword(e.target.value)
            }}/>
        </div>

        <Link to={'/singup'}  className='linktext'>Create new account</Link>


    

       
       
        <button type='button' className='btn' onClick={loginfunc} >login Up</button>

    </div>

  )
}

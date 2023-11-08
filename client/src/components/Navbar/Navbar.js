import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    const [user,setUser]=useState("")
    const [fulluser,setFulluser]=useState("")
    useEffect(()=>{
        const response=JSON.parse(localStorage.getItem("user") || "{}")
        setUser(response)
        loaduser()
     },[])
    const logoutfunc=()=>{
      localStorage.removeItem("user")
      window.location.href='/login'
    }
    const loaduser=()=>{
      const response=JSON.parse(localStorage.getItem('user'))
      setFulluser(response)
      
      }

     
  return (
    <div className='navbar'>
      <div className='logo'>
      <span>Eco-Bazaar🛒</span>

      </div>
      <ul>
      <li><Link  className='navlink' to={'/'}>Home</Link></li>
        <li><Link  className='navlink'  to={'/singup'}>Singup</Link></li>
        <li><Link  className='navlink' to={'/login'}>Login</Link></li>
        <li><Link  className='navlink' to={'/myorder'}>My Order</Link></li>
        
      </ul>
      <div className='user'>
       <span>hello {user.name?user.name:"user"}</span>
       {
        fulluser?<div className='logout-btn' onClick={logoutfunc}>logout</div>:""
       }
      </div>
    </div>
  )
}

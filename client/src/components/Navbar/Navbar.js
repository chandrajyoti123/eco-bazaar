import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    const [user,setUser]=useState("")
    useEffect(()=>{
        const response=JSON.parse(localStorage.getItem("user") || "{}")
        setUser(response)
     },[])

     
  return (
    <div className='navbar'>
      <div className='logo'>
      <span>eco-bazaar🛒</span>

      </div>
      <ul>
        <li><Link  className='navlink'  to={'/singup'}>singup</Link></li>
        <li><Link  className='navlink' to={'/login'}>login</Link></li>
        <li><Link  className='navlink' to={'/'}>Home</Link></li>
      </ul>
      <div className='user'>
       <span>hello {user.name?user.name:"user"}</span>
      </div>
    </div>
  )
}

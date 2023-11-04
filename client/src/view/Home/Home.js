import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useState,useEffect } from 'react'

export default function Home() {
  const checkvalidity=()=>{
    const response =JSON.parse(localStorage.getItem("user"))
    if(response==null){
        alert('you are not login yet ')
        window.location.href='/login'
    }
  

}
useEffect(()=>{
    checkvalidity()
},[])
  return (
    <div>
      <Navbar/>
  <h1>this is product page</h1>
    </div>
  )
}

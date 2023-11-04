import React from 'react'

export default function Home() {
    const play=()=>{
    window.location.href='/singup'
    }
  return (
    <div>
      <h1 onClick={play}>this is Home page</h1>
    </div>
  )
}

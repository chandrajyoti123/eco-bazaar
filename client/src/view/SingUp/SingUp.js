import React, { useState } from 'react'
import "./SignUp.css"
import axios from "axios"
import { Link } from 'react-router-dom'
export default function SingUp() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [mobile,setMobile]=useState('')
    const [address,setAddress]=useState('')
    const [gender,setGender]=useState('female')
    
    const singUpfuc= async()=>{
       
        if (!name) {
            alert("name is required")
            return;
        }
        if (!email) {
            alert("email is required")
            return;
        }
        if (!password) {
            alert("password is required")
            return;
        }
        if (!mobile) {
            alert("number is required")
            return;
        }
        if (!address) {
            alert("address is required")
            return;
        }
         
      const response = await axios.post('/user',{
        name:name,
        email:email,
        password:password,
        mobile:mobile,
        address:address,
        gender:gender
        })

        if (response?.data?.user) {
            window.location.href='/login'
         console.log("tara")
          
        

        } 
        else {
            alert(response?.data?.message)
        }

      
    }


  return (
    <div>
      
    <div className='singup-form'>
    <div className='heading'>Sinp Up</div>
        <div className='input-field'>
            <label htmlFor='name'  className='input-label'>Name</label>
            <input type='text' id='name' className='input-tag' value={name} onChange={(e)=>{
                setName(e.target.value)
            }} />
        </div>

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

        <div className='input-field'>
            <label htmlFor='mobile' className='input-label'>Mobile No</label>
            <input type='number' id='mobile' className='input-tag'value={mobile} onChange={(e)=>{
                setMobile(e.target.value)
            }} />
        </div>

        <div className='input-field'>
            <label htmlFor='address' className='input-label'>Address</label>
            <input type='text' id='address' className='input-tag'  value={address} onChange={(e)=>{
            setAddress(e.target.value)
            }}/>
        </div>
        <div className='input-field radio-field'>
            <label htmlFor='female'  className='input-label'>Female</label>
            <input type='radio' name='gender' id='female' className='radio-btn' checked={gender === "female"} onClick={()=>{
                setGender('female')
            }}/>

            <label htmlFor='male'  className='input-label'>Male</label>
            <input type='radio' name='gender' id='male' className='radio-btn'   checked={gender === "male"} onClick={()=>{
                setGender('male')
            }}/>
        </div>

        <Link to={'/login'} className='linktext'>already have an account?</Link>
        <button type='button' className='btn' onClick={singUpfuc}>Sinp Up</button>

    </div>
      
    </div>
  )
}

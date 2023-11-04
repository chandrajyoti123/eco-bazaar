import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useState,useEffect } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import axios from "axios"
import './Home.css'


export default function Home() {
  const checkvalidity=()=>{
    const response =JSON.parse(localStorage.getItem("user"))
    if(response==null){
        alert('you are not login yet ')
        window.location.href='/login'
      }
}

const [products,setProducts]=useState([])
const loaddata=async()=>{
  const response= await axios.get('/products')
  setProducts(response?.data?.products)
  
}
useEffect(()=>{
    checkvalidity()
    loaddata()
},[])
 

  return (
    <div>
      <Navbar/>
<div className='product-container'>
{
  products.map((product,i)=>{
    const {name,image,description,price,brand,category,_id}=product
    return   <ProductCard name={name} image={image} price={price} description={description} _id={_id}/>

  })
}
</div>
    </div>
  )
}

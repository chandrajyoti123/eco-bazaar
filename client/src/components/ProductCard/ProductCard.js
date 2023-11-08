import React from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'

export default function ProductCard({name,image,description,price,_id}) {
  return (

    <div className='productcard'>
        <img src={image} className='product-img'/>
        <div className='product-body'>
            <div className='product-name'>{name}</div>
            <div className='product-price'>Price:₹{price}</div>
            <div className='discription'>{description} </div>
            <Link to={`/placeorder/${_id}`}><button type='button' className='btn buynow-btn'>buy now</button> </Link>


        </div>
      
    </div>
  
  )
}

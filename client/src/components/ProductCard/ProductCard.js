import React from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'

export default function ProductCard({name,image,description,price,_id}) {
  return (
   <Link to={`/placeorder/${_id}`}>
    <div className='productcard'>
        <img src={image} className='product-img'/>
        <div className='product-body'>
            <div className='product-name'>{name}</div>
            <div className='price'>${price}</div>
            <div className='discription'>{description} </div>


        </div>
      
    </div>
   </Link>
  )
}

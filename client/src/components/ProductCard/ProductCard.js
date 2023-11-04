import React from 'react'
import './ProductCard.css'

export default function ProductCard({name,image,description,price}) {
  return (
    <div className='productcard'>
        <img src={image} className='product-img'/>
        <div className='product-body'>
            <div className='product-name'>{name}</div>
            <div className='price'>${price}</div>
            <div className='discription'>{description} </div>


        </div>
      
    </div>
  )
}

import React from 'react'
import './OrderCard.css'

export default function OrderCard({orderimg,ordname,quntity,price,shipping_address,delivery_charges,order_status}) {
  return (
//     <div className='ordercard'>
// <div className='orderchild1'>
// <img className='ordercardimg' src={`https://m.media-amazon.com/images/I/612ewGJTZJL._AC_SY100_.jpg`}/>
// </div>
// <div className='orderchild2'>
//     <div className='prodname'>perfumes</div>
//     <div className='qunpri'>
//         <div className='quntity'>Qyt:3</div>
//         <div className='price'> price:$234/-</div>

//     </div>
//     <div>ShippingAddress:Nagpur</div>
//     <div>delivery charges:@12</div>

// </div>
// <div className='orderchild3'>
//     <div>Pending</div>


// </div>
      
//     </div>

<div className='ordercard'>
<div className='orderchild1'>
<img className='ordercardimg' src={orderimg}/>
</div>
<div className='orderchild2'>
    <div className='prodname'>{ordname}</div>
    <div className='qunpri'>
        <div className='quntity'>Qyt:{quntity}</div>
        <div className='price'> price:{price}</div>

    </div>
    <div>ShippingAddress:{shipping_address}</div>
    <div>delivery charges:{delivery_charges}</div>

</div>
<div className='orderchild3'>
    <div>{order_status}</div>


</div>
      
    </div>
  )
}

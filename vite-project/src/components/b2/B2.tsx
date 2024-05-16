import React from 'react'
export default function B2() {
    let product=
    {
        id:1,
        name: 'Coca cola',
        price: '1000 $',
        quantity:10
    }

  return (
    <div>B2
        <p>Thông tin sản phẩm</p>
        <p>Id:{product.id}</p>
        <p>Name:{product.name}</p>
        <p>Price:{product.price}</p>
        <p>Quantity:{product.quantity}</p>
    </div>
  )
}

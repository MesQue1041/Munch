import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {

  const {cartItems,food_list,removeFromCart} = useContext(StoreContext)

  return (
    <div>
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((items,index)=>{
            if(cartItems[items._id]>0)

              return (

            <div className="cart-items-title cart-items-item">
              <p>{items.name}</p> 
            </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Cart
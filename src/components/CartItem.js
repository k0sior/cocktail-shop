// react
import React, { useState, useRef } from 'react'
import { FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa'
// conext
import { useGlobalContext } from "../context"

const CartItem = (img, name, category) => {

  const { increaseAmount, decreaseAmount, removeItem } = useGlobalContext();

  const itemAmount = useRef(0)
  
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h4>nazwa</h4>
        <h4>$</h4>
      </div>
      <div className="cart-btn-container">
        <button
          className="btn btn-primary increase-btn"
          onClick={() => increaseAmount()}
        >
          <FaPlus />
        </button>
        
        <button
          className="btn btn-primary decrease-btn"
          onClick={() => decreaseAmount()}
        >
          <FaMinus />
        </button>
        <button
          className="btn btn-danger remove-btn"
          onClick={() => removeItem()}
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  )
}

export default CartItem

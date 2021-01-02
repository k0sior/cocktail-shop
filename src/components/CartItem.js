// react
import React from 'react'
import { FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa'
// conext
import { useGlobalContext } from "../context"

const CartItem = ({ id, image, name, price, amount }) => {

  const { removeItem, increaseAmount, decreaseAmount} = useGlobalContext();

  return (
    <div className="cart-item" key={"single-cart-item"+id}>
      <div className="cart-item-info">
        <img src={image} alt="" />
        <h4 className="cart-item-name">{name}</h4>
      </div>
      <div className="cart-btn-container">
        <h4 className="cart-item-price">${price}</h4>
        <button
          className="btn btn-primary increase-btn"
          onClick={() => increaseAmount(id)}
        >
          <FaPlus />
        </button>
        <h4>{amount}</h4>
        <button
          className="btn btn-primary decrease-btn"
          onClick={() => decreaseAmount(id)}
        >
          <FaMinus />
        </button>
        <button
          className="btn btn-danger remove-btn"
          onClick={() => removeItem(id)}
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  )
}

export default CartItem

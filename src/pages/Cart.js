//react
import React from 'react'
//components
import CartItem from "../components/CartItem"
import { useGlobalContext } from '../context'

const Cart = () => {
  const { cart, total, clearCart} = useGlobalContext();

  if (cart.length === 0) {
    
    return (
      <section className="section-cart">
        <div className="cart-title">
          <h1>Twój koszyk jest pusty!</h1>
        </div>
      </section>
    )
  }
  return (
    <section className="section-cart">
      <div className="cart-title">
        <h2>Twój koszyk</h2>
      </div>
      <article className="cart-content">
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </article>
      <button className="btn btn-danger" onClick={() => clearCart()}>
        Wyczyść koszyk
      </button>
      <div className="cart-summary">
        <h4>Suma:<span>{total}</span></h4>
      </div>
    </section>
  )
}

export default Cart

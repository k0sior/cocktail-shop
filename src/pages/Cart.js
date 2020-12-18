//react
import React from 'react'
//components
import CartItem from "../components/CartItem"

const Cart = () => {
  return (
    <section className="section-cart">
      <div className="cart-title">
        <h2>Twój koszyk</h2>
      </div>
      <article className="cart-content">
        <h3>zawartosc koszyka</h3>
        <CartItem />
      </article>
    </section>
  )
}

export default Cart

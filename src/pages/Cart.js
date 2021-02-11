//react
import React from 'react';
import { Link } from 'react-router-dom';
//components
import CartItem from "../components/CartItem"
import { useGlobalContext } from '../context'

const Cart = () => {
  const { cart, total, clearCart } = useGlobalContext();
  
  // handling empty cart
  if (cart.length === 0) {
    return (
      <section className="section-cart-empty">
        <div className="cart-title">
          <h2>Twój koszyk jest pusty!</h2>
        </div>
        <Link to="/">
          <button className="btn btn-primary">Wróć do strony głównej</button>
        </Link>
      </section>
    )
  }

  return (
    <section className="section-cart">
      <fieldset className="cart-container">
        <legend className="cart-title">Twój koszyk</legend>
        <article className="cart-content">
          {cart.map((item) => {
            return <CartItem key={"cart-item-" + item.id} {...item} />
          })}
        </article>
        <div className="cart-summary">
          <h3>Suma: $<span>{total.toFixed(2)}</span></h3>
          <button
            className="btn btn-green btn-checkout"
            onClick={() => { console.log("go to checkout") }}
          >
            Przejdź do płatności
          </button>
          <p>ALBO NIE! ZMIENIAM ZDANIE!</p>
          <button
            className="btn btn-danger btn-checkout "
            onClick={() => clearCart()}
          >
            Wyczyść koszyk
          </button>
          <br />

        </div>
      </fieldset>
    </section>
  )
}

export default Cart

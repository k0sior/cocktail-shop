// React
import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { Link } from 'react-router-dom'
//context
import { useGlobalContext } from '../context';
// data 
import { logo, links,  /* social */ } from "../data"
// Components
import Modal from "./Modal"
import SearchBox from "./SearchBox"


const Header = () => {
  const { openModal, closeModal, handleModalOpen, cart } = useGlobalContext();

  const [cartAmount, setCartAmount] = useState(false)

  useEffect(() => {
    if (cart.length < 1) {
      setCartAmount(false)
    } else {
      setCartAmount(true)
    }
  }, [cart])

  return (
    <header className="nav">
      <div className="nav-top">
        <div className="nav-left" onMouseOver={closeModal}>
          <img src={logo.url} alt={logo.name} className="nav-logo" />
        </div>
        <div className="nav-center">
          <ul className="nav-links">
            {links.map((items) => {
              const { id, name, url } = items;
              // if name === category 
              if (id === 2) {
                return <li key={"category-" + id}>
                  <Link
                    to={`${url}`}
                    className="nav-link"
                    onMouseOver={openModal}
                    onClick={closeModal}
                  >
                    {name}
                  </Link>
                </li>
              }
              return <li key={"category-" + id}>
                <Link
                  to={`${url}`}
                  className="nav-link"
                  onMouseOver={closeModal}
                >
                  {name}
                </Link>
              </li>
            })}
            <Modal />
          </ul>
        </div>
        <div className="nav-right" onMouseOver={closeModal}>
          <ul className="nav-icons">
            <li className="nav-link">
              <Link to="/cart">
                <FaShoppingCart />
              </Link>
              <div className={`${cartAmount ? "cart-size" : "display-none"}`}>
                <p>{Number(cart.length)}</p>
              </div>
            </li>
            {/* 
            {social.map((icons) => {
              const { id, url, icon } = icons;
              return <li key={id} className="nav-link">
                <a href={url}>{icon}</a>
              </li>
            })}
             */}
          </ul>

        </div>
      </div>
      <div className="nav-bottom" onMouseOver={handleModalOpen}>
        <SearchBox />
      </div>
    </header>
  )
}

export default Header

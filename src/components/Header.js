// React
import React from 'react'
import { FaBars } from "react-icons/fa"
import { Link } from 'react-router-dom'
// data + functions
import { logo, links, social } from "../data"
import { useGlobalContext } from '../context';
// Components
import SearchBox from "./SearchBox"
import Modal from "./Modal"

const Header = () => {
  const { openModal, closeModal, handleModalOpen } = useGlobalContext();

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
                return <li key={id}>
                  <Link 
                    to={`${url}`}
                    className="nav-link"
                    onMouseOver={openModal}
                  >
                    {name}
                  </Link>
                </li>
              }
              return <li key={id}>
                <Link to={`${url}`} className="nav-link">{name}</Link>
              </li>
            })}
            <Modal />
          </ul>
        </div>
        <div className="nav-right" onMouseOver={closeModal}>
          <ul className="social-icons">
            {social.map((icons) => {
              const { id, url, icon } = icons;
              return <li key={id} className="nav-link">
                <a href={url}>{icon}</a>
              </li>
            })}
          </ul>
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>
      </div>
      <div className="nav-bottom" onMouseOver={handleModalOpen}>
        <SearchBox />
      </div>
    </header>
  )
}

export default Header

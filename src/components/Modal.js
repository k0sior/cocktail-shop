import React, { useState } from 'react'
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom'


const Modal = () => {
  const [currentCategory, setCurrentCategory] = useState("Ordinary Drink")
  // należy stworzyć f zmieniającą bgc na biały dla aktywnej kategorii
  const [active, setActive] = useState(false)
  const { drinks, isModalOpen, closeModal, handleModalOpen, openSubcategory } = useGlobalContext();

  const allCategories = [...new Set(drinks.map((item) => item.category))];

  return (
    <aside className={`${isModalOpen ? "modal-container show-modal" : "modal-container"}`} onMouseLeave={handleModalOpen} >
      <div className="modal-div">
        <div className="modal-categories-container">
          <ul className="modal-categories">
            <p>Wybierz kategorię:</p>
            {allCategories.map((category, i) => {
              return (
                <Link to={`/categories/${category}`}>
                  <li
                    key={i}
                    className={`${active ? "modal-links modal-active" : "modal-links"}`}
                    onMouseOver={() => setCurrentCategory(category)}
                    onClick={closeModal}
                  >
                    <span >{category}</span>
                  </li>
                </Link>
              )
            })}
          </ul>
        </div>
        <div className="subcategory-container">
          {drinks.map((item, i) => {
            const { id, name, category, image } = item;
            if (category === currentCategory) {
              return (
                <div key={i} className="subcategory-link">
                  <Link to={`/categories/${category}/${id}`}
                    onClick={closeModal}
                  >
                    <img src={image} alt={name} className="subcategory-img" />
                    <span className="subcategory-name">{name}</span>
                  </Link>
                </div>
              )
            }
          })}
        </div>
      </div>
    </aside>
  )
}

export default Modal

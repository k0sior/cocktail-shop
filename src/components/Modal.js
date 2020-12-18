// react
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// context
import { useGlobalContext } from '../context';

const Modal = () => {
  const [active, setActive] = useState(false)
  const [previewCat, setPreviewCat] = useState("Ordinary drink")

  const { drinks, isModalOpen, closeModal, handleModalOpen, setCurrentCategory } = useGlobalContext();

  const allCategories = [...new Set(drinks.map((item) => item.category))];

  const handleClick = (event) => {
    setCurrentCategory(event);
    closeModal()
  }
  
  return (
    <aside className={`${isModalOpen ? "modal-container show-modal" : "modal-container"}`} onMouseLeave={handleModalOpen} >
      <div className="modal-div">
        <div className="modal-categories-container">
          <p>Wybierz kategorię:</p>
          <ul className="modal-categories">
            {allCategories.map((category, i) => {
              return (
                <Link
                  key={i}
                  to={`/cat/${category}`}
                >
                  <li
                    className={`${active ? "modal-links modal-active" : "modal-links"}`}
                    onMouseOver={() => setPreviewCat(category)}
                    onClick={() => handleClick(category)}
                  >
                    {category}
                  </li>
                </Link>
              )
            })}
          </ul>
        </div>
        <div className="subcategory-container">
          {drinks.map((item, i) => {
            const { id, name, category, image } = item;
            if (category === previewCat) {
              return (
                <div key={i} className="subcategory-link">
                  <Link 
                    to={`/drink/${id}`}
                    onClick={closeModal}
                  >
                    <img
                      src={image}
                      alt={name} 
                      className="subcategory-img"
                    />
                    <h4 className="subcategory-name">{name}</h4>
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

// react
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
// context
import { useGlobalContext } from "../context"

const SingleCategoryItem = ({ id, image, name, glass, category }) => {

  const { setCurrentCategory, addToFavorites, favorite } = useGlobalContext();

  const [active, setActive] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    favorite.map((item) => {
      if (item.id === id) {
        setIsFavorite(true)
      }
    })
  }, [favorite])

  return (
    <div
      className="single-drink"
      onMouseOver={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="fav-star-container">
        <button className={`${active ? 'fav-star display-star' : 'no-star'} ${isFavorite ? 'favorite' : null}`} onClick={() => addToFavorites(id)}>
          <FaStar style={{
            width: 30,
            height: 30,
          }} />
        </button>
      </div>
      <Link
        to={`/drink/${id}`}
        className="single-drink-info"
      >
        <img src={image} alt="not found" />
        <h3>{name}</h3>
        <h4>{glass}</h4>
      </Link>
      <h4>${(Math.random() * 100).toFixed(2)}</h4>
      <Link
        to={`/cat/${category}`}
        onClick={() => setCurrentCategory(category)}
        className="category-link"
      >
        <p>{category}</p>
      </Link>
    </div>
  )
}

export default SingleCategoryItem

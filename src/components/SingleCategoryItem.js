import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from "../context"

const SingleCategoryItem = ({ id, image, name, glass, category }) => {
  const { setCurrentCategory } = useGlobalContext();
  return (
    <div className="single-drink">
      <Link
        to={`/drink/${id}`}
        className="single-drink-info "
      >
        <img src={image} alt="not found" />
        <h3>{name}</h3>
        <h4>{glass}</h4>
      </Link>
      <h4>${(Math.random() * 100).toFixed()},99</h4>
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

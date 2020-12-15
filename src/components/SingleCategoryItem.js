import React from 'react'
import { Link } from 'react-router-dom'

const SingleCategoryItem = ({id, image, name, glass, category}) => {
  return (
    <div className="single-drink">
      <Link to={`/drink/${id}`} >
        <img src={image} alt="not found" />
        <h3>{name}</h3>
        <h4>{glass}</h4>
      </Link>
      <Link to={`/cat/${category}`}>
        <p>{category}</p>
      </Link>
    </div>
  )
}

export default SingleCategoryItem

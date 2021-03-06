import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from "../context"
//components
import SingleCategoryItem from "../components/SingleCategoryItem"

const SingleCategory = () => {
  const { drinks, currentCategory, setCurrentCategory } = useGlobalContext();

  return (
    <section className="section-categories">
      <article className="single-category">
        <Link
          to="/cat"
          className="back-link"
          onClick={() => setCurrentCategory("all")}
        >
          Wróć
      </Link>
        <div className="drinks">
          {drinks.map((drink, i) => {
            if (drink.category === currentCategory) {
              return (
                <SingleCategoryItem key={"single-category-item-" + i} {...drink} />
              )
            }
          })}
        </div>
      </article>
    </section >
  )
}

export default SingleCategory

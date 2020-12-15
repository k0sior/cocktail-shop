import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from "../context"
//components
import SingleCategoryItem from "../components/SingleCategoryItem"

const Categories = () => {

  const { drinks, currentCategory, setCurrentCategory } = useGlobalContext();

  const allCategories = [...new Set(drinks.map((item) => item.category))];

  return (
    <section className="section-categories">
      <p>Wybierz katogrię:</p>
      <ul>
        <li>
          <Link
            to="/cat"
            onClick={() => setCurrentCategory("all")}
          >
            Wszystkie
          </Link>
        </li>
        {allCategories.map((category, i) => {
          return (
            <li key={i}>
              <Link
                to={`/cat/${category}`}
                onClick={() => setCurrentCategory(category)}
              >
                {category}
              </Link>
            </li>
          )
        })}
      </ul>
      <div className="drinks">
        {drinks.map((drink, i) => {
          if (currentCategory === drink.category) {
            return <SingleCategoryItem key={i} {...drink} />
          } if (currentCategory === "all") {
            return <SingleCategoryItem key={i} {...drink} />
          }
        })}
      </div>
    </section>

  )
}

export default Categories

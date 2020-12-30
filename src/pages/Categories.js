//react
import React from 'react'
import { Link } from 'react-router-dom';
//context
import { useGlobalContext } from "../context"
//components
import SingleCategoryItem from "../components/SingleCategoryItem"

const Categories = () => {

  const { drinks, currentCategory, setCurrentCategory } = useGlobalContext();

  const allCategories = ["Wszystkie", ...new Set(drinks.map((item) => item.category))];

  return (
    <section className="section-categories">
      <p>Wybierz katogrię:</p>
      <ul>
        {allCategories.map((category, i) => {
          let underline = false;
          if (currentCategory === category) {
            underline = true
          } else {
            underline = false;
          }
          return (
            <li key={i} className={`${underline ? "underline" : ""}`}>
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
          } if (currentCategory === "Wszystkie") {
            return <SingleCategoryItem key={i} {...drink} />
          }
        })}
      </div>
    </section>

  )
}

export default Categories

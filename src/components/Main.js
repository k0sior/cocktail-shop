//react
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
//context
import { useGlobalContext } from "../context";
//components 

const Main = () => {

  const { drinks, setCurrentCategory } = useGlobalContext();
  const [getRandomDrink, setGetRandomDrink] = useState((Math.random() * drinks.length).toFixed(0));
  const [drinkPrice, setDrinkPrice] = useState((Math.random() * 100).toFixed(2));

  return (
    <section className="section-main">
      {/* COLUMN 1 */}
      <article className="main-col-1">
        <div className="super-promo random-drink">
          <h2 style={{ marginBottom: 10, color: "hsl(360, 67%, 44%)" }}>SUPER OKAZJA!</h2>
          {drinks.slice(getRandomDrink - 1, getRandomDrink).map((drink, i) => {
            const { id, name, image, glass, category } = drink
            return <div key={"super-promo-" + i} className="single-drink">
              {/* drink link */}
              <Link
                to={`/drink/${id}`}
                className="single-drink-info "
              >
                <img src={image} alt="not found" />
                <div className="minus-fifty">
                  <img
                    src="https://i.ibb.co/XzZk6TH/okazja.png"
                    alt="not found"
                    style={{
                      width: 100,
                      height: 100,
                      marginTop: -123,
                      marginLeft: -10,
                    }}
                  />
                </div>
                <h2>{name}</h2>
                <h3>{glass}</h3>
              </Link>
              {/* drink prices */}
              <h2>${drinkPrice}</h2>
              <h3 className="old-drink-price">
                ${(drinkPrice * 2).toFixed(2)}
              </h3>
              {/* category link */}
              <Link
                to={`/cat/${category}`}
                onClick={() => setCurrentCategory(category)}
                className="category-link"
              >
                <p>{category}</p>
              </Link>
            </div>
          })}
        </div>
      </article>

      {/* COLUMN 2 */}
      <article className="main-col-2">
        <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente necessitatibus, molestiae nobis sint quibusdam veniam aspernatur in velit odio, atque perferendis ipsam numquam, quasi rem reprehenderit voluptatibus culpa aliquam praesentium!</h4>
      </article>
    </section>

  )
}

export default Main

//react
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa"
//context
import { useGlobalContext } from '../context'

import Loading from './Loading'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleDrink = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  const { setCurrentCategory } = useGlobalContext();

  const addToCart = () => {
    
  }


  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
          } = data.drinks[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
          ]
          const newCocktail = {
            name, image, info, category, glass, instructions, ingredients
          }
          setCocktail(newCocktail);
        } else {
          setCocktail(null)
        }
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    }
    getCocktail();

  }, [id])
  if (loading) {
    return <Loading />
  }
  if (!cocktail) {
    return <h2 className="section-title">cocktail doesn't exist</h2>
  }
  const { name, image, info, category, glass, instructions, ingredients } = cocktail;
  
  return (
    <section className="section cocktail-section">
      <Link
        to={`/cat/${category}`}
        onClick={() => setCurrentCategory(category)}
      >
        Wróć
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <h4>
            name: <span className="drink-data">
              {name}
            </span>
          </h4>
          <h4>
            price: <span className="drink-data">
              ${(Math.random() * 100).toFixed(2)}
              </span>
          </h4>
          <h4>
            info: <span className="drink-data">
              {info}
            </span>
          </h4>
          <h4>
            category: <span className="drink-data">
              {category}
            </span>
          </h4>
          <h4>
            glass: <span className="drink-data">
              {glass}
            </span>
          </h4>
          <h4>
            ingredients: {ingredients.map((item, i) => {
            return item ? <span key={i}>{item}, </span> : null
          })}
          </h4>
          <h4>
            instructions: <span className="drink-data">
              {instructions}
            </span>
          </h4>
          <button
            className="btn add-to-cart-btn btn-primary"
            onClick={() => console.log("dodaje do koszyka")}
          >
            dodaj do koszyka
            <FaCartPlus style={{ marginTop: 5, marginLeft: 5}}/>
          </button>
        </div>
      </div>
    </section>
  )
}

export default SingleDrink

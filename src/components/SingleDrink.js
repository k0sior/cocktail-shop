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
  const { setCurrentCategory, addToCart } = useGlobalContext();

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json();
        if (data.drinks) {
          const {
            idDrink: id,
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
            id, name, image, info, category, glass, instructions, ingredients
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
        <article className="drink-data">
          <figure className="drink-data-name">
            <p>Nazwa:</p>
            <h4>{name}</h4>
          </figure>
          <figure className="drink-data-price">
            <p>Cena:</p>
            <h4>${(Math.random() * 100).toFixed(2)}</h4>
          </figure>
          <figure className="drink-data-info">
            <p>Informacje:</p>
            <h4>{info}</h4>
          </figure>
          <figure className="drink-data-category">
            <p>Kategoria:</p>
            <h4>{category}</h4>
          </figure>
          <figure className="drink-data-glass">
            <p>Naczynie:</p>
            <h4>{glass}</h4>
          </figure>
          <figure className="drink-data-ingredients">
            <p>Potrzebne składniki:</p>
            {ingredients.map((item, i) => {
              return item ?
                <h4 key={"drink-data-ingredients"+i}>{item},</h4> : null
            })}
          </figure>
          <figure className="drink-data-intruction">
            <p>Sposób przyrządzenia:</p>
            <h4 >{instructions}</h4>
          </figure>
          <button
            className="btn add-to-cart-btn btn-primary"
            onClick={() => addToCart(id)}
          >
            dodaj do koszyka
            <FaCartPlus style={{ marginTop: 5, marginLeft: 5 }} />
          </button>
        </article>
      </div>
    </section>
  )
}

export default SingleDrink
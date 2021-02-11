//react
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaCartPlus, FaStar } from "react-icons/fa"
//context
import { useGlobalContext } from '../context'

import Loading from './Loading'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleDrink = () => {
  
  const { id } = useParams();
  const { setCurrentCategory, addToCart, addToFavorites, favorite } = useGlobalContext();
  
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false)
  
  useEffect(() => {
    favorite.map((item) => {
      if (item.id === id) {
        setIsFavorite(true)
      }
    })
  }, [favorite])

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
        {/* primary info */}
        <div className="drink-data-main">
          <div className="drink-data-name">
            <h3>Nazwa:</h3>
            <p><span>{name}</span></p>
          </div>
          <div className="drink-data-price">
            <h3>Cena:</h3>
            <p><span>${(Math.random() * 100).toFixed(2)}</span></p>
          </div>
          <div className="btn-container">
            <button
              className="btn add-to-cart-btn btn-primary"
              onClick={() => addToCart(id)}
            >
              dodaj do koszyka
            <FaCartPlus style={{ marginTop: 5, marginLeft: 5 }} />
            </button>
            <button
              className={`btn btn-fav btn-primary ${isFavorite ? 'favorite' : null}`}
              onClick={() => addToFavorites(id)}
            >
              dodaj do ulubionych <FaStar />
            </button>
          </div>
        </div>
        {/* secondary info */}
        <div className="drink-data-secondary">
          <table className="secondary-table">
            <tbody>
              <tr className="drink-data-info">
                <th>Informacje:</th>
                <td><span>{info}</span></td>
              </tr>
              <tr className="drink-data-category">
                <th>Kategoria:</th>
                <td><span>{category}</span></td>
              </tr>
              <tr className="drink-data-glass">
                <th>Naczynie:</th>
                <td><span>{glass}</span></td>
              </tr>
              <tr className="drink-data-ingredients">
                <th>Potrzebne składniki:</th>
                <td>
                  <ul>
                    {ingredients.map((item, i) => {
                      return item ? <li key={"single-drink-ingredient-" + i}>
                        <span key={"drink-data-ingredients" + i}>{item}</span>
                      </li> : null
                    })}
                  </ul>
                </td>
              </tr>
              <tr className="drink-data-intruction">
                <th>Sposób przyrządzenia:</th>
                <td><span>{instructions}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default SingleDrink
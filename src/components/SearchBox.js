import React, { useEffect, useState, useRef } from 'react'
import { Link } from "react-router-dom"

import { useGlobalContext } from '../context'

const SearchBox = () => {
  const { setSearch, search, drinks } = useGlobalContext();
  const [showSearchList, setShowSearchList] = useState(false);
  const searchValue = useRef('');

  const searchCocktail = () => {
    setSearch(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleList = () => {
    if (search.length > 1) {
      setShowSearchList(true)
    }
  }
  let searchDrink = drinks.filter((drink) => {
    return drink.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 || drink.category.toLowerCase().indexOf(search.toLowerCase()) !== -1 || drink.glass.toLowerCase().indexOf(search.toLowerCase()) !== -1
  })

  useEffect(() => {
    if (search.length >= 1) {
      setShowSearchList(true)
    } else {
      setShowSearchList(false)
    }
  }, [search])

  return (
    <div className='nav-search'>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            type="text"
            id="name"
            autoComplete="off"
            placeholder="Szukaj..."
            ref={searchValue}
            onChange={searchCocktail}
            onClick={handleList}
          />
        </div>
      </form>
      <div className={`${showSearchList ? "search-list search-list-show" : "search-list"}`} onMouseLeave={() => setShowSearchList(false)}>
        <ul>
          {searchDrink.map((drink, i) => {
            const { id, name, image, glass, category } = drink;
            return (
              <Link
                key={"search-list-item-" + i}
                to={`/drink/${id}`}
                onClick={() => setShowSearchList(false)}
              >
                <li className="search-item">
                  <img src={image} alt="" />
                  <div className="search-item-info">
                    <h4>{name}</h4>
                    <p>{category} - {glass}</p>
                  </div>
                </li>
              </Link>
            )
          })}
          <li><p style={{marginTop: 28, marginLeft:57, fontWeight: 'bold'}}>Nie znaleziono więcej przedmiotów.</p></li>
        </ul>
      </div>
    </div >
  )
}

export default SearchBox

// .filter(drink => drink.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)
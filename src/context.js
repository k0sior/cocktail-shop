//react
import React, { useState, useContext, useEffect, useCallback, useReducer } from 'react'
//reducer
import reducer from './reducer'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

let initialState = {
  drinksDB: [],
  cart: [],
  total: 0,
  amount: 0,
}

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [drinks, setDrinks] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("Wszystkie");
  const [state, dispatch] = useReducer(reducer, initialState)

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleModalOpen = (e) => {
    if (!e.target.classList.contains("nav-links")) {
      closeModal();
    }
  }

  const fetchDrinks = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const newDrinks = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
            strCategory,
            strInstructions,
          } = item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
            category: strCategory,
            instructions: strInstructions,
          }
        })
        initialState.drinksDB = newDrinks;
        setDrinks(newDrinks);
      } else {
        setDrinks([])
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchDrinks()
  }, [])
  //reducer functions
  const addToCart = (id) => {
    dispatch({ type: 'ADD_TO_CART', payload: id })
    dispatch({ type: "GET_TOTALS" })
  }
  const increaseAmount = (id) => {
    dispatch({ type: "INCREASE", payload: id })
    dispatch({ type: "GET_TOTALS" })
  }

  const decreaseAmount = (id) => {
    dispatch({ type: "DECREASE", payload: id })
    dispatch({ type: "GET_TOTALS" })
  }

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
    dispatch({ type: "GET_TOTALS" })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
    dispatch({ type: "GET_TOTALS" })
  }

  return <AppContext.Provider
    value={{
      ...state,
      loading,
      drinks,
      search,
      setSearch,
      isModalOpen,
      openModal,
      closeModal,
      handleModalOpen,
      currentCategory,
      setCurrentCategory,
      addToCart,
      increaseAmount,
      decreaseAmount,
      removeItem,
      clearCart
    }}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
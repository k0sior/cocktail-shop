//react
import React, { useState, useContext, useEffect, useCallback, useReducer } from 'react'
//reducer
import reducer from './reducer'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext();

const initialState = {
  cart: [],
  itemsTotal: 0,
  itemsAmount: 0,
}

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = (itemId) => {
    dispatch({ type: "ADD_ITEM", content: itemId })
  }

  const increaseAmount = (itemId) => {
    dispatch({ type: "INCREASE", content: itemId })
  }

  const decreaseAmount = (itemId) => {
    dispatch({ type: "DECREASE", content: itemId })
  }

  const removeCartItem = (itemId) => {
    dispatch({ type: "REMOVE_ITEM", content: itemId })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [drinks, setDrinks] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("all")

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

  return <AppContext.Provider
    value={{
      addToCart,
      increaseAmount,
      decreaseAmount,
      removeCartItem,
      clearCart,
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
    }}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
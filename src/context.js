import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
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

eEffect(() => {
    fetchDrinks()
  }, [])


  return <AppContext.Provider
    value={{
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
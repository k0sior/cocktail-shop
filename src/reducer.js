const reducer = (state, action) => {

  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] }

    case "INCREASE":
      let increaseItem = state.cart.map((cartItem) => {
        if (cartItem.id === action.content) {
          return { ...cartItem, action: cartItem.amount + 1 }
        }
        return cartItem
      })
      return { ...state, cart: increaseItem }

    case "DECREASE":
      let decreaseItem = state.cart.map((cartItem) => {
        if (cartItem.id === action.content) {
          return { ...cartItem, amount: cartItem.amount - 1 }
        }
        return cartItem
      }).filter((cartItem) => cartItem.amount !== 0)
      
      return { ...state, cart: decreaseItem }

    case 'REMOVE_ITEM':
      return {...state, cart: state.cart.filter((item) => item.id !== action.content)}


    default:
      throw new Error("nie wybrano właściwej akcji")
  }

}

export default reducer;
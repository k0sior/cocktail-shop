//drinks redcer
const reducer = (state, action) => {

  switch (action.type) {

    case 'ADD_TO_CART':
      // eslint-disable-next-line
      let newItem = state.drinksDB.find((item) => {
        if (item.id === action.payload) {
          return item
        }
      })
      newItem = { ...newItem, amount: 1, price: (Math.random() * 100).toFixed(2) }

      let newCart = [...state.cart, newItem]

      return { ...state, cart: newCart }

    case "CLEAR_CART":
      return { ...state, cart: [] }

    case "INCREASE":
      let increaseItemAmount = state.cart.map((cartItem) => {
        // eslint-disable-next-line
        if (cartItem.id == action.payload) {
          return { ...cartItem, amount: cartItem.amount + 1 }
        }
        return cartItem
      })
      return { ...state, cart: increaseItemAmount }

    case "DECREASE":
      let decreaseItemAmount = state.cart.map((cartItem) => {
        // eslint-disable-next-line
        if (cartItem.id == action.payload) {
          if (Number(cartItem.amount) > 1)
            return { ...cartItem, amount: cartItem.amount - 1 }
        }
        return cartItem
      })
      return { ...state, cart: decreaseItemAmount }

    case 'REMOVE_ITEM':
      // eslint-disable-next-line
      return { ...state, cart: state.cart.filter((item) => item.id != action.payload) }

    case "GET_TOTALS":
      let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal
      },
        {
          total: 0,
          amount: 0,
        })
      total = parseFloat(total.toFixed(2))
      return { ...state, total, amount }

    default:
      throw new Error("nie wybrano właściwej akcji")
  }
}

export default reducer;
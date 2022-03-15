import { TYPES } from '../actions/shoppingActions'
import api from '../utils/fetchData/api'
import { loadProducts } from '../utils/loadProducts'
import { loadCart } from '../utils/loadCart'

const { data: products } = await loadProducts()
const { data: cart } = await loadCart()
// estos datos debemos consumirlos desde el JSON
export const shoppingInitialState = {
  products,
  cart,
}

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      )

      let itemInCart = state.cart.find((item) => item.id === newItem.id)

      if (itemInCart) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : { item }
          ),
        }
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...newItem, quantity: 1 }],
        }
      }
      //   return itemInCart
      //     ? {
      //         ...state,
      //         cart: state.cart.map((item) =>
      //           item.id === newItem.id
      //             ? { ...item, quantity: item.quantity + 1 }
      //             : { item }
      //         ),
      //       }
      //     : {
      //         ...state,
      //         cart: [
      //           ...state.cart,
      //           api
      //             .post('cart', { ...newItem, quantity: 1 })
      //             .then(({ data }) => data),
      //         ],
      //       }
    }
    case TYPES.REMOVE_ONE_PRODUCT: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload)

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : { item }
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          }
    }
    case TYPES.REMOVE_ALL_PRODUCTS: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      }
    }
    case TYPES.CLEAR_CART: {
      return shoppingInitialState
    }
    default:
      return state
  }
}

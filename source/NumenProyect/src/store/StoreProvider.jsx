import { createContext, useReducer } from 'react'
import {
  shoppingInitialState,
  shoppingReducer,
} from '../services/reducers/shoppingReducer'

const storeContext = createContext()

const storeProvider = ({ children }) => {
  const [store, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
  return (
    <storeContext.Provider value={[store, dispatch]}>
      {children}
    </storeContext.Provider>
  )
}

export { storeContext }
export default storeProvider

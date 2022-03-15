import api from '../fetchData/api'

export const loadCart = async () => {
  const CART = await api.get('cart')
  return Promise.resolve(CART)
}

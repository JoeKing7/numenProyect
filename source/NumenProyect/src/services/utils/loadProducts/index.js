import api from '../fetchData/api'

export const loadProducts = async () => {
  const PRODUCTS = await api.get('products')
  return new Promise((res, rej) => {
    res(PRODUCTS)
  }).catch((err) => {
    rej(err)
  })
}

import api from '../fetchData/api'

export const loadOffers = async () => {
  const OFFERS = await api.get('offers')
  return Promise.resolve(OFFERS)
}

import React, { Fragment, useContext } from 'react'
import { Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import ProductCard from './ProductCard'
import { storeContext } from '../../store/StoreProvider'
import api from '../../services/utils/fetchData/api'
import { TYPES } from '../../services/actions/shoppingActions'

const LatestOffers = () => {
  const [store, dispatch] = useContext(storeContext)
  const { offers, products, cart } = store
  const OFFERS = offers || []
  const addToCart = async (id) => {
    let newItem = products.find((product) => product.id === id)
    let itemInCart = cart.find((item) => item.id === newItem.id)
    if (itemInCart) {
      await api
        .put(`cart/${itemInCart.id}`, {
          ...itemInCart,
          quantity: itemInCart.quantity + 1,
        })
        .catch((err) => console.log(err))
      dispatch({ type: TYPES.ADD_TO_CART, payload: id })
    } else {
      await api
        .post('cart', { ...newItem, quantity: 1 })
        .catch((err) => console.log(err))
      dispatch({ type: TYPES.ADD_TO_CART, payload: id })
    }
  }
  return (
    <Fragment>
      <Container
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '50px',
        }}
      >
        <Typography variant="h4">Latest Offers</Typography>
      </Container>
      <Box sx={{ marginBottom: '50px' }}>
        <Grid container spacing={2}>
          {OFFERS.map((val, ind) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={ind}>
              <ProductCard
                description={val}
                addToCart={addToCart}
              ></ProductCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Fragment>
  )
}

export default LatestOffers

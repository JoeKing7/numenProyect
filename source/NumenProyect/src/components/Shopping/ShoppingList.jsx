import { Button, Card, Container, Grid } from '@mui/material'
import React, { useContext } from 'react'
import { TYPES } from '../../services/actions/shoppingActions'
import api from '../../services/utils/fetchData/api'
import { messageError } from '../../services/utils/messages'
import { storeContext } from '../../store/StoreProvider'
import CartItem from './CartItem'

const ShoppingList = () => {
  const [store, dispatch] = useContext(storeContext)
  const { cart } = store

  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id })
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id })
    }
  }

  const clearCart = async () => {
    await api
      .patch('cart')
      .catch((err) => messageError('Error limpiando carrito', err))
    dispatch({ type: TYPES.CLEAR_CART })
  }

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8} md={8}>
            <h2>Carrito de Compras - Productos seleccionados</h2>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Button
              variant="contained"
              style={{ marginTop: '15px', right: '0px' }}
              onClick={() => clearCart()}
            >
              Limpiar Carrito
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={8}>
          {cart.map((item, index) => (
            <CartItem key={index} data={item} deleteFromCart={deleteFromCart} />
          ))}
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Card>Para algo extra (Publidad?)</Card>
        </Grid>
      </Grid>
    </>
  )
}

export default ShoppingList

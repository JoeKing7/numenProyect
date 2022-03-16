import { Button, Container } from '@mui/material'
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { TYPES } from '../services/actions/shoppingActions'
import api from '../services/utils/fetchData/api'
import { storeContext } from '../store/StoreProvider'

const ProductInfo = () => {
  const { id } = useParams()
  const [store, dispatch] = useContext(storeContext)
  const { products, cart } = store
  const productData = products[id - 1] //en el store los productos van de 0 - 19 || en la db van de 1 - 20

  const addToCart = async (id) => {
    let newItem = products.find((product) => product.id === id)
    let itemInCart = cart.find((item) => item.id === id)

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

    // console.log(state)
  }
  return (
    <Container>
      <h1> {productData.title}</h1>
      <h4>Categoría: {productData.category}</h4>
      <img src={productData.image} alt="img" width="300"></img>
      <div style={{ display: 'flex' }}>
        <h3>Rating: {productData.rating.rate}</h3>
        <Button
          sx={{
            display: 'inline-flex',
            marginLeft: '10px',
            background: '#fff',
            color: '#4ba9e9',
            fontSize: '35px',
          }}
          onClick={() => addToCart(parseInt(id))}
        >
          <i className="fas fa-cart-plus"></i>
        </Button>
      </div>
      <h2>Descripción:</h2>
      <span>{productData.description}</span>
    </Container>
  )
}

export default ProductInfo

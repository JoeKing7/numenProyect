import {
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Rating,
  Typography,
} from '@mui/material'
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { TYPES } from '../services/actions/shoppingActions'
import api from '../services/utils/fetchData/api'
import { storeContext } from '../store/StoreProvider'
import '@fontsource/roboto/300.css'
import { Box } from '@mui/system'

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
  }
  return (
    <Container sx={{ marginTop: '20px' }}>
      <Typography variant="h4" component="div" gutterBottom>
        {productData.title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        Categoría: {productData.category}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <Card sx={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={productData.image}
              alt="img"
              style={{
                width: '50%',
              }}
            ></img>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Card>
            <Typography
              variant="subtitle2"
              gutterBottom
              component="div"
              sx={{ padding: '10px 10px 0px 20px' }}
            >
              Calificación:
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              <Container>
                {productData.rating.rate}
                <Rating
                  name="rating-read"
                  defaultValue={productData.rating.rate}
                  precision={0.1}
                  readOnly
                />
              </Container>
            </Typography>
            <Container>
              <Typography variant="h5" gutterBottom component="div">
                ${productData.price}
              </Typography>
            </Container>
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
            <Container>
              <Typography variant="h5" gutterBottom component="div">
                Descripción:
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                {productData.description}
              </Typography>
            </Container>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProductInfo

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Rating,
  Typography,
} from '@mui/material'
import React, { Fragment } from 'react'
import '../../assets/styles/Products/style.css'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/system'

const ProductCard = ({ description, addToCart }) => {
  const {
    id,
    title,
    price,
    description: descrip,
    image,
    rating,
    oldPrice,
  } = description
  const navigate = useNavigate()
  return (
    <Container>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{
              position: 'relative',
              minWidth: '200px',
              height: '400px',
              background: '#fff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              zIndex: '2',
            }}
            image={image}
            alt="product image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title.length > 11 ? `${title.substr(0, 11)}...` : title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {descrip.substr(0, 80)}...
            </Typography>
            <div className="content">
              <div className="price-rating">
                {oldPrice ? (
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Typography variant="h3">
                      <sup>$</sup>
                      {price}
                    </Typography>
                    <Typography variant="h5">
                      <del>${oldPrice}</del>
                    </Typography>
                  </Box>
                ) : (
                  <Typography variant="h2">
                    <sup>$</sup>
                    {price}
                  </Typography>
                )}

                <h3>Calificación: {rating.rate}</h3>
                <Rating
                  name="rating-read"
                  defaultValue={rating.rate}
                  precision={0.1}
                  readOnly
                />
              </div>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="large"
            color="primary"
            onClick={() => navigate(`/product/${id}`)}
          >
            <i class="far fa-eye"></i>
          </Button>
          <Button size="large" color="primary" onClick={() => addToCart(id)}>
            <i className="fas fa-cart-plus"></i>
          </Button>
        </CardActions>
      </Card>
    </Container>
  )
}

export default ProductCard

/*
<div className="container">
      <div className="card">
        <div className="imgBx">
          <img src={image}></img>
        </div>
        <div className="details">
          <h3>{title}</h3>
          <p>{descrip}</p>
          <div className="group">
            <h2>
              <sup>$</sup>
              {price}
            </h2>
            <Button
              sx={{
                display: 'inline-flex',
                padding: '10px 25px',
                background: '#fff',
                textDecoration: 'none',
                textTransfor: 'uppercase',
                fontWeight: '500',
                color: '#4ba9e9',
              }}
              onClick={() => addToCart(id)}
            >
              <i className="fas fa-cart-plus"></i>
            </Button>
          </div>
          <div className="rating">
            <h3>{rating.rate}</h3>
            <Rating
              name="rating-read"
              defaultValue={rating.rate}
              precision={0.1}
              readOnly
            />
            {/* <h2>
              <i className="fas fa-boxes"></i>
              {rating.count > 0 ? rating.count : 'No stock'}
            </h2> * /}
            </div>
            </div>
          </div>
        </div>
*/

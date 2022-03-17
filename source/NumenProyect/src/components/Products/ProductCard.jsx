import { Button, Rating } from '@mui/material'
import React from 'react'
import '../../assets/styles/Products/style.css'

const ProductCard = ({ description, addToCart }) => {
  const { id, title, price, description: descrip, image, rating } = description
  return (
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
            <h2>
              <i className="fas fa-boxes"></i>
              {rating.count > 0 ? rating.count : 'No stock'}
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

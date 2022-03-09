import { Button } from '@mui/material'
import { style } from '@mui/system'
import React from 'react'
import '../../assets/styles/Products/style.css'

const ProductCard = ({ description }) => {
  const { title, price, description: descrip, image, rating } = description
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
                'text-decoration': 'none',
                'text-transfor': 'uppercase',
                'font-weight': '500',
                color: '#4ba9e9',
              }}
            >
              Comprar
            </Button>
          </div>
          <div className="rating">
            <h3>
              <i class="fas fa-star"></i>
              {rating.rate}
            </h3>
            <h2>
              <i class="fas fa-boxes"></i>
              {rating.count > 0 ? rating.count : 'No stock'}
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

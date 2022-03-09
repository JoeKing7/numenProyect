import { Grid } from '@mui/material'
import React, { Fragment, useEffect, useState } from 'react'
import ProductCard from '../components/Products/ProductCard'
import API from '../services/utils/fetchData/api'

const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(async () => {
    const PRODUCTS = await API.get('products')
    setProducts(PRODUCTS)
  }, [])
  const DATA = products.data || []
  return (
    <Fragment>
      <h1>Products {DATA.lenght}</h1>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {DATA.map((val, ind) => (
          <Grid item sm={12} xs={12} md={6} key={ind}>
            <ProductCard description={val}></ProductCard>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  )
}

export default Products

import React, { Fragment, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
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
      <NavLink to="/">Volver</NavLink>
      <h1>Products {DATA.lenght}</h1>
      {DATA.map((val, ind) => (
        <ProductCard description={val} key={ind}></ProductCard>
      ))}
    </Fragment>
  )
}

export default Products

import React from 'react'
import { CssBaseline } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import NotFound from '../views/NotFound'
import Products from '../views/Products'
import Anuncio from '../components/Anuncio/Anuncio'
import Head from '../layouts/Header/Head'
import StoreProvider from '../store/StoreProvider'
import ShoppingCartPage from '../views/ShoppingCartPage'
import ProductInfo from '../views/ProductInfo'
import About from '../views/About'
import Instagram from '../components/Instagram/Instagram'
import Footer from '../layouts/Footer/Footer'

const index = () => {
  return (
    <React.StrictMode>
      <StoreProvider>
        <BrowserRouter>
          <CssBaseline />
          <Anuncio></Anuncio>
          <Head></Head>
          <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/product/:id" element={<ProductInfo />}></Route>
            <Route path="/shoppingCart" element={<ShoppingCartPage />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/instagram" element={<Instagram />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </StoreProvider>
    </React.StrictMode>
  )
}

export default index

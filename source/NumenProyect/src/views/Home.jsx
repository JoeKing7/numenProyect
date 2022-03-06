import React, { Fragment } from 'react'
import Anuncio from '../components/Anuncio/Anuncio'
import Footer from '../layouts/Footer/Footer'
import Head from '../layouts/Header/Head'
import Main from '../layouts/Main/Main'

const Home = () => {
  return (
    <Fragment>
      <Anuncio></Anuncio>
      <Head></Head>
      <Main></Main>
      <Footer></Footer>
    </Fragment>
  )
}

export default Home

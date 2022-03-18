import React, { Fragment } from 'react'
import Banner from '../../components/Banner/Banner'
import LatestOffers from '../../components/Products/LatestOffers'

const Main = () => {
  return (
    <Fragment>
      <Banner></Banner>
      <LatestOffers></LatestOffers>
      <Footer></Footer>
    </Fragment>
  )
}

export default Main

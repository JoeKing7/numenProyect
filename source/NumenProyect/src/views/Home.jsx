import React, { Fragment } from 'react'
import OurPartner from '../components/Anuncio/OurPartner'
import SurpriseSomeone from '../components/Anuncio/SurpriseSomeone'
import WhoMakes from '../components/Anuncio/WhoMakes'
import WhyChoose from '../components/Anuncio/WhyChoose'
import Banner from '../components/Banner/Banner'
import Instagram from '../components/Instagram/Instagram'
import TellAFriend from '../components/Instagram/TellAFriend'
import LatestOffers from '../components/Products/LatestOffers'

const Home = () => {
  return (
    <Fragment>
      <Banner></Banner>
      <LatestOffers></LatestOffers>
      <WhyChoose></WhyChoose>
      <WhoMakes></WhoMakes>
      <OurPartner></OurPartner>
      <SurpriseSomeone></SurpriseSomeone>
      <Instagram></Instagram>
      <TellAFriend></TellAFriend>
    </Fragment>
  )
}

export default Home

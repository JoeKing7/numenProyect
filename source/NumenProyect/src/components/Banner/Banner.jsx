import React from 'react'
import { Box } from '@mui/system'
import { Slider } from '../Anuncio/ad-components/Slider'

const fotosMarcas = [
  {
    name: '',
    photo: '../../src/assets/images/banner1.jpg',
    path: '/',
    style: { width: '100%', height: '500px' },
  },
  {
    name: '',
    photo: '../../src/assets/images/banner2.jpg',
    path: '/',
    style: { width: '100%', height: '500px' },
  },
  {
    name: '',
    photo: '../../src/assets/images/banner3.jpg',
    path: '/',
    style: { width: '100%', height: '500px' },
  },
]

const Banner = () => {
  return (
    <Box sx={{ marginTop: '0px', top: '0px' }}>
      <Slider fotos={fotosMarcas}></Slider>
    </Box>
  )
}

export default Banner

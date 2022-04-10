import React, { Fragment } from 'react'
import { Box } from '@mui/material'
import { Slider } from './ad-components/Slider'

const fotosMarcas = [
  {
    name: 'Purina',
    photo: '/src/assets/images/slider-purina.jpg',
    path: '/',
    style: {},
  },
  {
    name: 'Eukanuba',
    photo: '/src/assets/images/slider-eukanuba.jpg',
    path: '/',
    style: {},
  },
  {
    name: 'Maintenance Criadores',
    photo: '/src/assets/images/slider-maintenance.jpg',
    path: '/',
    style: {},
  },
  {
    name: 'Pedigree',
    photo: '/src/assets/images/slider-pedigree.jpg',
    path: '/',
    style: {},
  },
  {
    name: 'Royal Canin',
    photo: '/src/assets/images/slider-royalcanin.jpg',
    path: '/',
    style: {},
  },
  {
    name: 'Whiskas',
    photo: '/src/assets/images/slider-whiskas.jpg',
    path: '/',
    style: {},
  },
]
const OurPartner = () => {
  return (
    <div>
      <Fragment>
        <Box
          sx={{
            width: '100%',
            height: '450px',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '100px',
            marginBottom: '100px',
          }}
        >
          <Slider fotos={fotosMarcas} />
        </Box>
      </Fragment>
    </div>
  )
}

export default OurPartner

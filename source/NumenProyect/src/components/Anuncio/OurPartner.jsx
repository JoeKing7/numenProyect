import React, { Fragment } from 'react'
import { Box } from '@mui/material'
import { Slider } from './ad-components/Slider'

const fotosMarcas = [
  {
    name: 'Dogui',
    photo: '/src/assets/images/bolsas_home_ar.png',
    path: '/',
    style: {},
  },
  {
    name: 'Insignia',
    photo: '/src/assets/images/logo-insignia1_.jpg',
    path: '/',
    style: {},
  },
  {
    name: 'Whiskas',
    photo: '/src/assets/images/whiskas2.jpg',
    path: '/',
    style: {},
  },
  {
    name: 'Vital Crops',
    photo: '/src/assets/images/dog pro.jpg',
    path: '/',
    style: {},
  },
  {
    name: 'Vagoneta',
    photo: '/src/assets/images/vagoneta 2.jpg',
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
            height: '500px',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
            marginBottom: '50px',
          }}
        >
          <Slider fotos={fotosMarcas} />
        </Box>
      </Fragment>
    </div>
  )
}

export default OurPartner

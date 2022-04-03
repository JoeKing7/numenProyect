import React, { Fragment } from 'react'
import { Box } from '@mui/material'
import { Slider } from './ad-components/Slider'

const fotosMarcas = [
  {
    name: 'Dogui',
    photo: '../../src/assets/images/dogui.jpg',
    path: '/',
    style: {},
  },
  {
    name: 'Insignia',
    photo: '../../src/assets/images/estampa-insignia.jpg',
    path: '/',
    style: {},
  },
  {
    name: 'Excellent',
    photo: '../../src/assets/images/purina-excellent.jpg',
    path: '/',
    style: {},
  },
  {
    name: 'Royal Canin',
    photo: '../../src/assets/images/royal-canin.jpg',
    path: '/',
    style: {},
  },
  {
    name: 'Vagoneta',
    photo: '../../src/assets/images/vagoneta.jpg',
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
            height: '300px',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <Slider fotos={fotosMarcas} />
        </Box>
      </Fragment>
    </div>
  )
}

export default OurPartner

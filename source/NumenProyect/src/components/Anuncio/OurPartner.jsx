import React, { Fragment } from 'react';
import { Box } from '@mui/material';
import { Slider } from './ad-components/Slider'

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
        }}
      >
      <Slider />
      </Box>
    </Fragment>
    </div>
  )
}

export default OurPartner

import React, { Fragment } from 'react'
import { Box } from '@mui/system'

const Banner = () => {
  return (
    <Fragment>
      <Box
        sx={{
          width: '100%',
          height: '200px',
          color: 'black',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        Banner
      </Box>
    </Fragment>
  )
}

export default Banner

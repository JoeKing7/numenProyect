import { Box } from '@mui/material'
import React, { Fragment } from 'react'

const Main = () => {
  return (
    <Fragment>
      <Box
        sx={{
          width: '100%',
          height: '200px',
          backgroundColor: 'info.light',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        Banner
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '300px',
          backgroundColor: 'info.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        Productos
      </Box>
    </Fragment>
  )
}

export default Main

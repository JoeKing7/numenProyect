import React, { Fragment } from 'react'
import { Box, Typography } from '@mui/material'

const WhyChoose = () => {
  return (
    <Fragment>
      <Box
        sx={{
          width: '100%',
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography style={{fontSize:"2rem"}}>
          Porqué Elegirnos?
        </Typography>
        
      </Box>
    </Fragment>
    
  )
}

export default WhyChoose

import React, { useState } from 'react'
import { Alert, Box, Collapse, Container } from '@mui/material'
import '../../assets/styles/Anuncio/style.css'

const Anuncio = () => {
  const [open, setOpen] = useState(true)
  return (
    <Box>
      <Collapse in={open}>
        <Alert
          icon={false}
          sx={{
            justifyContent: 'center',
            fontSize: '18px',
          }}
          className="bg-anuncio"
          variant="filled"
          severity="warning"
          onClose={() => {
            setOpen(false)
          }}
        >
          <i className="fas fa-car-alt"></i>
          Domicilio gratis por compras mayores a 20 Pesos
        </Alert>
      </Collapse>
      {/* <i className="fas fa-car-alt"></i> */}
    </Box>
  )
}

export default Anuncio

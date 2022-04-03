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
          <i className="fas fa-car-alt" style={{ marginRight: '10px' }}></i>
          Domicilio gratis por compras mayores a 2000 Pesos
        </Alert>
      </Collapse>
      {/* <i className="fas fa-car-alt"></i> */}
    </Box>
  )
}

export default Anuncio

import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'

const Footer = () => {
  return (
    <AppBar position="fixed" color="info" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        Footer
        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  )
}

export default Footer

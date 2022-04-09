import React, { Fragment } from 'react'
import { Box } from '@mui/material'
import { Typography, Button } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
const TellAFriend = () => {
  return (
    <Box sx={{ marginTop: '30px' }}>
      <Box
        sx={{
          width: '100%',
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '100px',
        }}
      >
        <Typography variant="h3">Contacto</Typography>
      </Box>
      <Box
        sx={{
          margin: '5px',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Button
          href="https://www.facebook.com"
          color="primary"
          style={{ padding: '2rem', borderRadius: '50%' }}
        >
          <Box>
            <FacebookIcon fontSize="large" />
          </Box>
        </Button>
        <Button
          href="https://www.instagram.com/mundoanimaloliva/"
          color="secondary"
          style={{ padding: '2rem', borderRadius: '50%' }}
        >
          <Box>
            <InstagramIcon fontSize="large" />
          </Box>
        </Button>
        <Button
          href="https://twitter.com/home"
          color="info"
          style={{ padding: '2rem', borderRadius: '50%' }}
        >
          <Box>
            <TwitterIcon fontSize="large" />
          </Box>
        </Button>
        <Button
          href="https://api.whatsapp.com/send?phone=543532402451&text=Ho%E1%A5%A3%E1%A5%B2%20!%20Somos%20M%E1%A5%99%E1%A5%92do%20A%E1%A5%92%CE%B9m%E1%A5%B2%E1%A5%A3%20%F0%9F%90%BE%0ANos%20d%E1%A5%B2%20g%E1%A5%99sto%20q%E1%A5%99%E1%A5%B1%20t%E1%A5%B1%E1%A5%92%E1%A5%B1rt%E1%A5%B1%20%CF%81or%20%E1%A5%B2%E1%A5%B4%E1%A5%B2%CC%81...%20%0AD%E1%A5%B1%CC%81j%E1%A5%B2%E1%A5%92os%20t%E1%A5%99%20%E1%A5%B4o%E1%A5%92s%E1%A5%99%E1%A5%A3t%E1%A5%B2%20%E1%83%A7%20r%E1%A5%B1s%CF%81o%E1%A5%92d%E1%A5%B1r%E1%A5%B1mos%20%E1%A5%B2%20%E1%A5%A3%E1%A5%B2%20br%E1%A5%B1v%E1%A5%B1d%E1%A5%B2d%20%F0%9F%90%BE"
          color="success"
          style={{ padding: '2rem', borderRadius: '50%' }}
        >
          <Box>
            <WhatsAppIcon fontSize="large" />
          </Box>
        </Button>
      </Box>
    </Box>
  )
}

export default TellAFriend

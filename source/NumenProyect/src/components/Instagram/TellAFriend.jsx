import React, { Fragment } from 'react'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import { Grid } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
const TellAFriend = () => {
  
  return (

    <Fragment>
      <Box
        sx={{
          width: '100%',
          height: '300px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography style={{fontSize:"2rem",}}>
          Contacto
        </Typography>
        <div>
        </div>
      </Box>

      <Box
          sx={{
          margin:'10px',
          display: 'flex',
          justifyContent: 'space-around',
          }}
      >

          <Button
          href="https://www.facebook.com"
          color="primary" 
          variant="contained"
          style={{padding: "2rem",}}>
          <Box>
            <FacebookIcon fontSize='large'/>
          </Box> 
          
          </Button>
          <Button
          href="https://www.instagram.com/?hl=es-la"  
          color="secondary" 
           variant="contained"
           style={{padding: "2rem",}}>
            <Box>
              <InstagramIcon fontSize='large'/>
           </Box> 
          
          </Button>
          <Button
           href="https://twitter.com/home" 
           color="info"
           variant="contained"
           style={{padding: "2rem",}}>
             <Box>
               <TwitterIcon fontSize='large'/>
             </Box> 
          
                  
          </Button>
          <Button
           href="#" 
           color="success"
           variant="contained"
           style={{padding: "2rem"}}>
             <Box>
               <WhatsAppIcon fontSize='large'/>
             </Box> 
          
           </Button>
      </Box>
    </Fragment>
  )
}

export default TellAFriend

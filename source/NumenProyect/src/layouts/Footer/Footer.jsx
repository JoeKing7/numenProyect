import React from 'react'
import { Box } from '@mui/system'
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook'
import PetsIcon from '@mui/icons-material/Pets'
import InstagramIcon from '@mui/icons-material/Instagram'
import { Button } from '@mui/material'
import logo from '../../assets/images/logo.png'
import EmailIcon from '@mui/icons-material/Email';
import AddLocationIcon from '@mui/icons-material/AddLocation';

import '../../assets/styles/Footer/style.css'
const Footer = () => {
  const navigate = useNavigate()
  
  return (
    <Box className="bg-color footer">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              <img src={logo} style={{ width: '40%', padding: '10px' }}></img>
            </Link>
          </Grid>
          

          <Grid item xs={12} sm={4} md={4} lg={4}>
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => navigate('/products')}
                  sx={{ color: 'white' }}
                >
                  <PetsIcon style={{marginRight: '10px'}} />
                  Productos
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => navigate('/about')}
                  sx={{ color: 'white' }}
                >
                  <i
                    className="fas fa-store-alt"
                    style={{ marginRight: '10px' }}
                  ></i>
                  Nosotros
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => navigate('/shoppingCart')}
                  sx={{ color: 'white' }}
                >
                  <i
                    className="fas fa-shopping-cart"
                    style={{ marginRight: '10px' }}
                  ></i>
                  Carrito
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>
          
          
          
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <List sx={{marginTop:'7px'}}>
              <ListItemIcon
               sx={{ color: 'white'}}
              >
                <EmailIcon style={{marginRight:'10px'}}/> mundoanimaloliva@gmail.com
              </ListItemIcon>
              
             
            </List>
            <List>
              <ListItemIcon
               sx={{ color: 'white'}}
              >
                <AddLocationIcon style={{marginRight:'10px'}}/> Monseñor gallardo 148 local 2. Oliva - Cordoba
              </ListItemIcon>
              
             
            </List>
          </Grid>

         
        
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer

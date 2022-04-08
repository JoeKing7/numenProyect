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

import '../../assets/styles/Footer/style.css'
const Footer = () => {
  const navigate = useNavigate()
  const menuItems = [
    {
      text: 'Facebook',
      icon: <FacebookIcon color="primary" />,
      Link: '/',
    },
    {
      text: 'Instagram',
      icon: <InstagramIcon color="secondary" />,
      Link: 'https://www.instagram.com',
    },
  ]

  return (
    <Box className="bg-color footer">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              <img src={logo} style={{ width: '30%', padding: '10px' }}></img>
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4}>
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => navigate('/products')}
                  sx={{ color: 'white' }}
                >
                  <PetsIcon />
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
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <List>
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
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <List>
              <ListItem disablePadding>
                <Button href="https://www.facebook.com" sx={{ color: 'white' }}>
                  <ListItemIcon>
                    <FacebookIcon sx={{ color: 'white' }} />
                  </ListItemIcon>
                  Facebook
                </Button>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <List>
              <ListItem disablePadding>
                <Button
                  href="https://www.instagram.com/?hl=es-la"
                  sx={{ color: 'white' }}
                >
                  <ListItemIcon>
                    <InstagramIcon sx={{ color: 'white' }} />
                  </ListItemIcon>
                  Instagram
                </Button>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer

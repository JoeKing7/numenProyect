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
import '../../assets/styles/Footer/style.css'
const Footer = () => {
  const navigate = useNavigate()
  return (
    <Box className="bg-color footer">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              <i
                className="fas fa-store"
                style={{ fontSize: '70px', padding: '10px' }}
              ></i>
              Name
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => navigate('/products')}
                  sx={{ color: 'white' }}
                >
                  <i
                    className="fas fa-cubes"
                    style={{ marginRight: '10px' }}
                  ></i>
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
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer

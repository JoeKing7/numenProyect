import React, { Fragment } from 'react'
import { Box, Card, Container, Grid, Typography, Button, } from '@mui/material'
import { border } from '@mui/system'

const SurpriseSomeone = () => {
  return (
    <Fragment>
      <Grid container spacing={10} className='container-surprise' >

            <Grid item
              xs={12}
              sm={5}
              md={5}
              lg={5}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <img className='foto-surprise' src='https://res.cloudinary.com/hernangbv91/image/upload/v1649096731/istockphoto-1248454290-612x612_ktp6s9.jpg'
              ></img>

            </Grid>

            <Grid item 
              xs={12} 
              sm={7} 
              md={7} 
              lg={7}
              >

              <Typography variant="h3" gutterBottom 
                style={{
                  padding: '20px',
                }}>
                Sorprende a alguien!
              </Typography>

              <Typography variant="subtitle 1" gutterBottom 
                style={{
                  padding: '20px',
                }}>
                Contamos con box sorpresas para regalar! En diferentes variedades a elegir mascotas pequeñas o grandes, adultos o puppies.
                Podrás elegir entre tratamientos de belleza integrales, alimentación saludable, juguetes para pileta o entrenamiento. 
                Sin dudar... entre los más distinguidos detalles... SORPRENDE A ALGUIEN!
              </Typography>          

              <Typography
              style={{
                padding: '20px',
              }}>
                <Button variant="contained" href='http://localhost:3000/products' size='large'>VER PRODUCTOS</Button>
              </Typography>

            </Grid>

      </Grid>
    </Fragment>
  )
}

export default SurpriseSomeone

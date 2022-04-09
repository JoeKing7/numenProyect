import React, { Fragment } from 'react'
import { Box, Card, Container, Grid, Typography, Button, } from '@mui/material'
import { border } from '@mui/system'
import {useNavigate } from 'react-router-dom'
const SurpriseSomeone = () => {
  const navigate = useNavigate()
  return (
    <Fragment>
     <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginTop:'100px'
        }}
        >
        
      <Grid container spacing={2} >
            

            <Grid item xs={12} sm={6} md={6} lg={6} >
              <Typography variant="h3" gutterBottom >
                Sorprende a alguien!
              </Typography>

              <Typography variant="subtitle 1" gutterBottom style={{textAlign:'justify'}}>
                Contamos con box sorpresas para regalar! En diferentes variedades a elegir mascotas pequeñas o grandes, adultos o puppies.
                Podrás elegir entre tratamientos de belleza integrales, alimentación saludable, juguetes para pileta o entrenamiento. 
                Sin dudar... entre los más distinguidos detalles... SORPRENDE A ALGUIEN!
              </Typography>          

              <Typography>
                <Button 
                onClick={() => navigate('/products')}
                variant="contained" 
                size='large'
                style={{marginTop:'10px'}}>
                VER PRODUCTOS
                 </Button>
              </Typography>

            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <div style={{width:'95%', maxWidth:'300px',height:'95%',maxHeight:'300px'}}>

              <img src='https://res.cloudinary.com/hernangbv91/image/upload/v1649096731/istockphoto-1248454290-612x612_ktp6s9.jpg' style={{width:'90%',height:'100%',marginLeft:'25px'}}
              ></img>
              </div>
            </Grid>

      </Grid>
    </Box>
    </Fragment>
  )
}

export default SurpriseSomeone

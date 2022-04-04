import React, { Fragment } from 'react'
import { Box, Container, Grid, Card, CardContent, Typography } from '@mui/material'

const WhyChoose = () => {
  return (
    <Fragment>
      <Box
        sx={{
          width: '100%',
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography style={{fontSize:"2rem"}}>
          Por qué Elegirnos?
        </Typography>
        
      </Box >
      <Container
       sx= {{
        display:"flex",
        justifyContent:'space-between'
      }}
      >
        <Grid container spacing={10}>
          <Grid item xs={12} sm={6} md={2.3}>
            <Card style={{height: 400,width:210}}>
              <CardContent >
                <img src='https://res.cloudinary.com/jimefioni/image/upload/v1649021210/images%20Numen/imagenes/icons/girl_iso_color_icon_64_f2eehi.png'></img>
                <Typography style={{fontSize:"1rem"}}><b>Personal capacitado</b></Typography>
                <Typography variant='body1'>
                  Cada uno de nosotros estamos capacitados para resolver todas tus dudas sobre tu alimento. Brindando herramientas para mejorar la calidad de vida de tu mascota.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
            <br></br>
          <Grid item xs={12} sm={6} md={2.3}>
            <Card style={{height: 400,width:210}}>
              <CardContent>
                <img src='https://res.cloudinary.com/jimefioni/image/upload/v1649021210/images%20Numen/imagenes/icons/card_iso_color_icon_64_gnky7o.png'></img>
                <Typography style={{fontSize:"1rem"}}><b>Pagos digitales</b></Typography>
                <Typography variant='body1'>
                  Aceptamos todas las tarjetas de crédito en tres pagos sin interés, débito y transferencias.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
            <br></br>
          <Grid item xs={12} sm={6} md={2.3}>
            <Card style={{height: 400,width:210}}>
              <CardContent>
                <img src='https://res.cloudinary.com/jimefioni/image/upload/v1649021210/images%20Numen/imagenes/icons/map_pin_iso_color_icon_64_d9qdup.png'></img>
                <Typography style={{fontSize:"1rem"}}><b>Envíos a domicilio</b></Typography>
                <Typography variant='body1'>
                  Los envíos a domicilio a partir de los $2000, para que nunca le falte nada a tu mascota.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
            <br></br>
          <Grid item xs={12} sm={6} md={2.3}>
            <Card style={{height: 400,width:210}}>
              <CardContent>
                <img src='https://res.cloudinary.com/jimefioni/image/upload/v1649021210/images%20Numen/imagenes/icons/sheild_iso_color_icon_64_ywm0ir.png'></img>
                <Typography style={{fontSize:"1rem"}}><b>Calidad garantizada</b></Typography>
                <Typography variant='body1'>
                  Nuestros productos tienen garantía de calidad asegurada. Permitiendo la devolución dentro de los 5 días de realizada la compra.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
            <br></br>
          <Grid item xs={12} sm={6} md={2.3}>
            <Card style={{height: 400,width:210}}>
              <CardContent style={{ alignItems: 'center'}}>
                <img src='https://res.cloudinary.com/jimefioni/image/upload/v1649021210/images%20Numen/imagenes/icons/notify_heart_iso_color_icon_64_iqfwbc.png'></img>
                <Typography style={{fontSize:"1rem"}}><b>Nos interesa tu mascota</b></Typography>
                <Typography variant='body1'>
                  Podemos asesorarte sobre todo lo necesario para el bienestar de tu mascota. Tenemos atención directa con los centros de salud veterinarios de la zona.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
    
  )
}

export default WhyChoose

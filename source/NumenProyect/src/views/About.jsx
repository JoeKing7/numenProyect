import { Box, Card, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <Box sx={{ height: '56.8vh' }}>
      <Container
        sx={{
          paddingTop: '20px',
        }}
      >
        <Card>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={5}
              md={5}
              lg={5}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <img
                //className="fas fa-store"
                src="https://res.cloudinary.com/jimefioni/image/upload/v1648253242/images%20Numen/imagenes/0BD9DF75-EAC0-437A-95CE-AD874416B74E_foxdry.jpg"
                style={{
                  padding: '10px',
                }}
                width="75%"
              ></img>
            </Grid>
            <Grid item xs={12} sm={7} md={7} lg={7}>
              <Typography variant="h4">Mundo Animal</Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  paddingRight: '10px',
                  textAlign: 'justify',
                  whiteSpace: 'pre-wrap',
                }}
              >
                Somos una tienda para mascotas, creada en Octubre de 2020, con
                el propósito de ser un lugar ameno y donde se pueda encontrar
                todo tipo de alimento balanceado para perros y gatos. Accesorios
                de todo tipo, incluyendo: ropa, collares, correas,
                cuchas,transportadores, etc. La predisposición es uno de los
                pilares fundamentales en nuestra gente, la dedicación especial a
                cada cliente, proponiendo así el logro de una mejora calidad de
                vida de cada mascota que llega.{' '}
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  )
}

export default About

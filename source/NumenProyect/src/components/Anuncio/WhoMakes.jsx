import React, { Fragment } from 'react'
import { Box, Card, Container, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';

const itemValores = [
{
 text: 'Responsabilidad: obramos con seriedad, acorde con nuestra propuesta de valor.',
 icon: <PetsIcon color="orange" />,
 path: '/'
},
{
  text: 'Honestidad: realizamos todas las operaciones con transparencia y rectitud, ofreciendo productos de calidad garantizada.',
  icon: <PetsIcon color="orange" />,
  path: '/'
},
{
  text: 'Lealtad: somos fieles a las necesidades de nuestros clientes y buscamos el mejoramiento de la calidad de vida de su mascota.',
  icon: <PetsIcon color="orange" />,
  path: '/'
},
{
  text: 'Respeto: Escuchamos, entendemos y valoramos al otro, buscando armonía en las relaciones  interpersonales, laborales y comerciales.',
  icon: <PetsIcon color="orange" />,
  path: '/'
},
{
  text: 'Mística: Realizamos nuestro trabajo bien desde el principio, con la convicción de entregar lo mejor.',
  icon: <PetsIcon color="orange" />,
  path: '/'
},
{
  text: 'Confianza: Cumplimos con lo prometido al ofrecer los mejores productos y servicios a un precio justo y razonable',
  icon: <PetsIcon color="orange" />,
  path: '/'
}
]

const WhoMakes = () => {
  return (
    <Fragment>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={7} md={7} lg={7}>
                <Typography variant="h3" gutterBottom 
                style={{
                  padding: '10px',
                }}>
                  Nuestro compromiso</Typography>
                <Typography variant="body1" gutterBottom 
                style={{
                  padding: '10px',
                }}>
                  Con el objetivo de brindar el mayor bienestar posible para sus mascotas, ponemos al servicio de sus propietarios un equipo multidiciplinario de profesionales que brinda asesoría personalizada, rigiéndonos por los siguientes valores:</Typography>
                <List>
                  {itemValores.map(item => (
                    <ListItem
                      key={item.text} 
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItem>
                  ))}
                </List>           
            </Grid>
            <Grid
              item
              xs={12}
              sm={5}
              md={5}
              lg={5}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <img className='foto-whomakes' src='https://res.cloudinary.com/hernangbv91/image/upload/v1648737112/57af44af3d5806d5b7d9e5f10a21520b_tqv5t4.jpg'
              ></img>
            </Grid>
          </Grid>
    </Fragment>
  )
}

export default WhoMakes

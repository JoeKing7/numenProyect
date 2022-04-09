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
       <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginTop:'100px'
        }}
      >
     
         <Typography style={{fontSize:"2rem"}}>
           Nuestro compromiso
         </Typography>    
     </Box>


         <Box
         sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginTop:'100px'
        }}
      >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={4} lg={4} >
                <Typography variant="body1" gutterBottom 
                style={{
                  padding: '10px',
                }}>
                  Con el objetivo de brindar el mayor bienestar posible para sus mascotas, ponemos al servicio de sus propietarios un equipo multidiciplinario de profesionales que brinda asesoría personalizada, rigiéndonos por los siguientes valores:</Typography>
                <List >
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
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <div style={{width:'95%', maxWidth:'1200px',height:'95%',maxHeight:'1100px'}}>

              <img  src='https://res.cloudinary.com/hernangbv91/image/upload/v1648737112/57af44af3d5806d5b7d9e5f10a21520b_tqv5t4.jpg' style={{width:'90%',height:'100%',marginTop:'10px',marginLeft:'25px'}}></img>
              </div>
            </Grid>
           
          </Grid>
  </Box>
    </Fragment>
  )
}

export default WhoMakes

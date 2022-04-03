import { Navigation, Pagination,} from 'swiper';
import { Box, CardActionArea, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Postuno from '../Instagram/images/Post1.jpg';
import PostDos from '../Instagram/images/Post2.jpg';
import PostTres from '../Instagram/images/Post3.jpg';
import PostCuatro from '../Instagram/images/Post4.jpg';
import PostCinco from '../Instagram/images/Post5.jpg';
import PostSeis from '../Instagram/images/Post6.jpg';
import PostSiete from '../Instagram/images/Post7.jpg';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';
const Rojo = red[500];
// Import Swiper styles

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./stylesCarr.css";


const Instagram = () => {
  return (
 <Fragment>

  <Box
    sx={{
        width: '100%',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
    }}>
      <Typography style={{fontSize:"2rem"}} >
          Visitanos en nuestro Instragram
        </Typography>
  </Box>
   <Box
        sx={{
          width: '100%',
          height: '500px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Swiper
        navigation={true}
        pagination={{
        clickable: true,
        }}
        slidesPerView={2}
        spaceBetween={30}
        modules={[ Navigation, Pagination]}
        className="swiper-container"
      > 
      <SwiperSlide>  
       <Card  sx={{ maxWidth: 370,flexGrow: 1  }}>
         <CardActionArea  
         href="https://www.instagram.com/mundoanimaloliva/">
           <CardMedia
            component="img"
            height="400"
            image= {Postuno}
            alt="Imagen instagram"
            />
            <CardContent>
                <Typography>
                <FavoriteIcon sx={{ color:Rojo ,}}/>
                   #MundoAnimalOliva
                </Typography>
             </CardContent>
         </CardActionArea>
       </Card>
      </SwiperSlide>

      <SwiperSlide>  
       <Card  sx={{maxWidth: 370 }}>
         <CardActionArea
         href="https://www.instagram.com/mundoanimaloliva/">
           <CardMedia
            component="img"
            height="400"
            image= {PostDos}
            alt="Imagen instagram"
           
            />
            <CardContent>
                <Typography>
                <FavoriteIcon sx={{ color:Rojo ,}}/>
                   #MundoAnimalOliva
                </Typography>
             </CardContent>
         </CardActionArea>
       </Card>
      </SwiperSlide>

      <SwiperSlide>  
       <Card  sx={{ maxWidth: 370 }}>
         <CardActionArea
         href="https://www.instagram.com/mundoanimaloliva/">
           <CardMedia
            component="img"
            height="400"
            image= {PostTres}
            alt="Imagen instagram"
            />
            <CardContent>
                <Typography>
                <FavoriteIcon sx={{ color:Rojo ,}}/>
                   #MundoAnimalOliva
                </Typography>
             </CardContent>
         </CardActionArea>
       </Card>
      </SwiperSlide>
      
      <SwiperSlide>  
       <Card  sx={{ maxWidth: 370  }}>
         <CardActionArea
         href="https://www.instagram.com/mundoanimaloliva/">
           <CardMedia
            component="img"
            height="400"
            image= {PostCuatro}
            alt="Imagen instagram"
            />
            <CardContent>
                <Typography>
                <FavoriteIcon sx={{ color:Rojo ,}}/>
                   #MundoAnimalOliva
                </Typography>
             </CardContent>
         </CardActionArea>
       </Card>
      </SwiperSlide>

      <SwiperSlide>  
       <Card  sx={{ maxWidth: 370 }}>
         <CardActionArea
         href="https://www.instagram.com/mundoanimaloliva/">
           <CardMedia
            component="img"
            height="400"
            image= {PostCinco}
            alt="Imagen instagram"
            />
            <CardContent>
                <Typography>
                <FavoriteIcon sx={{ color:Rojo ,}}/>
                   #MundoAnimalOliva
                </Typography>
             </CardContent>
         </CardActionArea>
       </Card>
      </SwiperSlide>

      <SwiperSlide>  
       <Card  sx={{ maxWidth: 370  }}>
         <CardActionArea
         href="https://www.instagram.com/mundoanimaloliva/" >
           <CardMedia
            component="img"
            height="400"
            image= {PostSeis}
            alt="Imagen instagram"
            />
            <CardContent>
                <Typography>
                <FavoriteIcon sx={{ color:Rojo ,}}/>
                   #MundoAnimalOliva
                </Typography>
             </CardContent>
         </CardActionArea>
       </Card>
      </SwiperSlide>

      <SwiperSlide>  
       <Card  sx={{ maxWidth: 370 }}>
         <CardActionArea
         href="https://www.instagram.com/mundoanimaloliva/" >
           <CardMedia
            component="img"
            height="400"
            image= {PostSiete}
            alt="Imagen instagram"
            />
            <CardContent>
                <Typography>
                <FavoriteIcon sx={{ color:Rojo ,}}/>
                   #MundoAnimalOliva
                </Typography>
             </CardContent>
         </CardActionArea>
       </Card>
      </SwiperSlide>
    </Swiper>
  </Box>
</Fragment>
  )
}

export default Instagram

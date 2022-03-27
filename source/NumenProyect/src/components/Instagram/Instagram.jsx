import { Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectFlip } from 'swiper';
import { Box } from '@mui/material'
import React, { Fragment } from 'react'
      
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';


const data =[
  {
    id:1,
    nombre:'dogui',
    palabre:'rodrigo',
    
  },
  {
    id:2,
    nombre:'dogui',
    palabre:'juan',
    

  },
  {
    id:3,
    nombre:'dogui',
    palabre:'juan',
    
  },
  {
    id:4,
    nombre:'dogui',
    palabre:'juan',
    
  },
  {
    id:5,
    nombre:'dogui',
    palabre:'juan',
  
  }
  
]

const Instagram = () => {
  return (
    <Fragment>
      <Box
        sx={{
          width: '100%',
          height: '300px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,EffectFlip]}
      effect='flip'
      grabCursor={true}
      pagination={true}
      navigation={true}
      spaceBetween={50}
      slidesPerView={1}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
     {data.map(nombre =>(
       <SwiperSlide key ={nombre.id} className="slider">
         <div className='slider-content' >
           <div className='user-image'>
           </div>
            
           
           <p>{nombre.palabre}</p>
         </div>
       </SwiperSlide>
     ))}
    </Swiper>
       

      </Box>
    </Fragment>
  )
}

export default Instagram

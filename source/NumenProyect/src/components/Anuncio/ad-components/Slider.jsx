import React, { Component } from 'react'
import {
  Box,
  Card,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export const Slider = ({ fotos }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        1500: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      {fotos.map((item, ind) => (
        <SwiperSlide key={ind}>
          <div>
            {item.name ? (
              <Typography variant="h5" className="slider-marca">
                {item.name}
              </Typography>
            ) : (
              ''
            )}
            <div>
              <img
                className="slider-photo"
                src={item.photo}
                alt={item.name}
                style={item.style}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

import React, { Component } from 'react'

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
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      {fotos.map((item, ind) => (
        <SwiperSlide key={ind}>
          <div>
            {item.name ? <p className="slider-marca">{item.name}</p> : ''}
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

import React, { Component } from 'react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const fotosMarcas = [
  {
    name: 'Dogui',
    photo: '../../src/assets/images/dogui.jpg',
    path: '/'
  },
  {
    name: 'Insignia',
    photo: '../../src/assets/images/estampa-insignia.jpg',
    path: '/'
  },
  {
    name: 'Excellent',
    photo: '../../src/assets/images/purina-excellent.jpg',
    path: '/'
  },
  {
    name: 'Royal Canin',
    photo: '../../src/assets/images/royal-canin.jpg',
    path: '/'
  },
  {
    name: 'Vagoneta',
    photo: '../../src/assets/images/vagoneta.jpg',
    path: '/'
  }
]

export const Slider = () => {

  return (
    
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={100}
    slidesPerView={2}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >
    {fotosMarcas.map(item => (
      <SwiperSlide key={item.name}>
        <div>
          <p className='slider-marca'>{item.name}</p>
          <div>
            <img className='slider-photo' src={item.photo} alt={item.name} />
          </div>
        </div>
      </SwiperSlide>

    ))}
     
      </Swiper>
    );
  };
  

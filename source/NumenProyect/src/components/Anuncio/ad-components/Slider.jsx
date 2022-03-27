// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export const Slider = () => {
  // llamado al back 
      return (
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
        {json.map( marcas => (
          <SwiperSlide key={marcas.id}>
            <div className="slide-content">
              <h5>{marcas.marca}</h5>
              <div className="marca-image">
                <img src={marcas.fotomarca} alt="" className="marca-foto"></img>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };


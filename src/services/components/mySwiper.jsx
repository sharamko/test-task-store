import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MySwiper = ({ product, colors }) => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="my-swiper"
      >
        {product.colors[colors - 1].images.map((el) => {
          return (
            <SwiperSlide key={el}>
              <img className="swiper-slide-img" src={el} alt="SwiperSlide" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MySwiper;

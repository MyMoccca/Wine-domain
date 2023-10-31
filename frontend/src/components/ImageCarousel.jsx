/* eslint-disable import/no-unresolved */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFlip } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import slide1 from "../assets/slide1.jpg";
import slide4 from "../assets/slide4.jpg";

function ImageCarousel() {
  return (
    <div className="Image-carousel">
      <Swiper
        className="Wine-Swiper"
        spaceBetween={150}
        slidesPerView={1}
        effect="effect-fade"
        grabCursor
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation
        modules={[Pagination, Navigation, Autoplay, EffectFlip]}
      >
        <SwiperSlide key="slide-images">
          <img src={slide1} alt={slide1} />
        </SwiperSlide>
        <SwiperSlide key="slide-images">
          <img src={slide4} alt={slide4} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ImageCarousel;

/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFlip } from "swiper/modules";
import connexion from "../services/connexion";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

function WineCarousel() {
  const [wine, setWine] = useState([]);

  const getWine = async () => {
    try {
      const winesData = await connexion.get("/vins");
      setWine(winesData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getWine();
  }, []);

  return (
    <div className="caroulsel-container">
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
        {wine.slice(0, 3).map((Wine) => (
          <SwiperSlide key={Wine.id}>
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
                Wine.src
              }`}
              alt={Wine.alt}
              className="w-100 rounded-1"
            />
            <h2 className="text-center">{Wine.winename}</h2>
            <h3 className="text-center">{Wine.year}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default WineCarousel;

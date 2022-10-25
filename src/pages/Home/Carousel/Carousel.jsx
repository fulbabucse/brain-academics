import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Slider1 from "../../../assets/1.jpg";
import Slider2 from "../../../assets/2.jpg";
import Slider3 from "../../../assets/3.jpg";
import Slider4 from "../../../assets/4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../../assets/style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="home-carousel" src={Slider1} alt="Carousel" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="home-carousel" src={Slider2} alt="Carousel" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="home-carousel" src={Slider3} alt="Carousel" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="home-carousel" src={Slider4} alt="Carousel" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;

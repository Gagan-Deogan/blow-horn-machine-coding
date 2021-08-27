import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper } from "swiper/react";
const breakpoints = {
  "640": {
    spaceBetween: 20,
  },
  "1000": {
    spaceBetween: 25,
  },
};

export const SwiperCustome = ({ children }) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      loop={true}
      spaceBetween={15}
      breakpoints={breakpoints}
      className="mySwiper">
      {children}
    </Swiper>
  );
};

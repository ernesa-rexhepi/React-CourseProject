import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from "../../style/homepage.module.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Slider = ({ images }) => {
  //   console.log(images);
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination, Navigation, Autoplay]}
        className={style.homepageSlider}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
      >
        {images ? (
          images.map((image, i) => {
            return (
              <SwiperSlide
                style={{ backgroundImage: `url(${image})` }}
                className={style.sliderImage}
                key={`${i}+${image}`}
              ></SwiperSlide>
            );
          })
        ) : (
          <>Loading....</>
        )}
      </Swiper>
    </>
  );
};

export default Slider;

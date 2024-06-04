import React, { useState } from "react";
import StarIcon from "../icons/star";
import SlideItem from "./slideItem";
import slides from "../../data";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import ArrowLeftIcon from "../icons/ArrowLeft";
import ArrowRightIcon from "../icons/ArrowRight";

const Slide = () => {
  return (
    <div className="h-[500px] w-[98%]">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        // loop={true}

        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 110,
          depth: 80,
          modifier: 4,
        }}
        // pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="relative pb-10"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={s.id}>
            <SlideItem data={s} />
          </SwiperSlide>
        ))}
        <div className="relative mt-16">
          <div className="swiper-button-prev bg-red left-1/2 h-12 w-12 -translate-x-14 rounded-full bg-white after:content-['']">
            <div className="h-4 w-4">
              <ArrowLeftIcon />
            </div>
          </div>
          <div className="swiper-button-next bg-red right-1/2 h-12 w-12 translate-x-14 rounded-full bg-white after:content-['']">
            <div className="h-4 w-4">
              <ArrowRightIcon />
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Slide;

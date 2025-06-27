"use client";
import React from "react";
import "@/scss/sections/herocarosoul.scss";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

function HeroCarosoul() {
  const gallery = [
    "/images/careers/g (1).jpg",
    "/images/careers/g (2).jpg",
    "/images/careers/g (3).jpg",
    "/images/careers/g (4).jpg",
    "/images/careers/g (5).jpg",
    "/images/careers/g (6).jpg",
    "/images/careers/g (7).jpg",
    "/images/careers/g (8).jpg",
  ];
  return (
    <>
      <section className="HeroCarosoul">
        <div className="carousel-nav-wrapper">
          <button className="carousel-nav-arrow carousel-nav-prev ">
            <ArrowLeft />
          </button>
          <button className="carousel-nav-arrow carousel-nav-next">
            <ArrowRight />
          </button>
        </div>
        <Swiper
          modules={[Autoplay, Navigation]}
          pagination={{ clickable: true }}
          //   autoplay={{
          //     delay: 3000, // 1 second
          //     disableOnInteraction: false,
          //   }}
          navigation={{
            nextEl: ".carousel-nav-next",
            prevEl: ".carousel-nav-prev",
          }}
          autoHeight={false}
          spaceBetween={0}
          slidesPerView={1}
          // className="pb-5"
          loop={true}
          className="h-100"
        >
          {gallery.map((src, i) => {
            return (
              <SwiperSlide key={i}>
                <img src={src} alt="" className="w-100" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}

export default HeroCarosoul;

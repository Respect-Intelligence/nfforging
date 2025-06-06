"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const RecentPost = () => {
  const slides = [
    {
      img: "/images/banner3.jpg",
      date: "Jan 20, 2020",
      title: "New Additions to our great Metro trucks Fleet",
    },
    {
      img: "/images/banner4.jpg",
      date: "Jan 23, 2020",
      title: "Cargo flow through better supply chain visibility, control.",
    },
  ];

  return (
    <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      loop={true}
      className="mySwiper recent-post-swiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="widget-post-item">
            <div className="widget__post-img">
              <a href="#">
                <img src={slide.img} alt="thumb" />
              </a>
            </div>
            <div className="widget__post-content">
              <span className="widget__post-date">{slide.date}</span>
              <h6 className="widget__post-title">
                <a href="#">{slide.title}</a>
              </h6>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default RecentPost;

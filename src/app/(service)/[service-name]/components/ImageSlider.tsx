"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

const slides = [
  "/images/portfolio/slider/1.jpg",
  "/images/portfolio/slider/2.jpg",
  "/images/portfolio/slider/3.jpg",
  "/images/portfolio/slider/2.jpg",
  "/images/portfolio/slider/3.jpg",
  "/images/portfolio/slider/2.jpg",
  "/images/portfolio/slider/3.jpg",
  "/images/portfolio/slider/2.jpg",
  "/images/portfolio/slider/3.jpg",
];

export default function ImageSlider() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="portfolio-slider carousel-arrows-light slick-carousel mb-60 ImageSingleSlider">
            <Swiper
              modules={[Navigation, Pagination]}
              loop={true}
              // loopedSlides={1000}
              centeredSlides={true}
              centeredSlidesBounds={true}
              spaceBetween={30}
              slidesPerView={1.5}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 1.5 },
                992: { slidesPerView: 2.5 },
                1200: { slidesPerView: 2 },
              }}
              className="pb-5"
            >
              {slides.map((src, index) => (
                <SwiperSlide key={index}>
                  <Link href="#">
                    {/* <img
                      src={src}
                      alt={`slider-${index + 1}`}

                      //   layout="responsive"
                    /> */}
                    <Image
                      src={src}
                      alt={`slider-${index + 1}`}
                      width={1000}
                      height={600}
                      className="img-fluid swiper-slide-img"
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

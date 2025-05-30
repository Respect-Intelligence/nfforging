"use client";

import "@/scss/sections/service.scss";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect } from "react";
import { serviceArray } from "@/assets/static/data";

export default function ServiceSection() {
  const adjustSlideHeights = (swiper: SwiperClass) => {
    if (!swiper?.slides?.length) return;

    let maxHeight = 0;

    swiper.slides.forEach((slideEl) => {
      const el = slideEl as HTMLElement;
      el.style.height = "auto"; // reset
      const height = el.offsetHeight;
      if (height > maxHeight) maxHeight = height;
    });

    swiper.slides.forEach((slideEl) => {
      const el = slideEl as HTMLElement;
      el.style.height = `${maxHeight}px`;
    });

    swiper.update();
  };

  return (
    <>
      <section className="wpo-service-section section-padding ">
        <div className="service-wrap">
          <div className="heading-layout2">
            <p className="heading__subtitle">What We Offer</p>
            <h2 className="heading__title">Our Services</h2>
            {/* <h2>What We Offer</h2>
            <h3>Our Services</h3> */}
          </div>
          <div className="service-slider">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000, // 1 second
                disableOnInteraction: false,
              }}
              autoHeight={false}
              spaceBetween={20}
              // className="pb-5"
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                481: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
                },
                993: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 3.5,
                },
                // 1400: {
                //   slidesPerView: 4.5,
                // },
              }}
              onSwiper={(swiper) => adjustSlideHeights(swiper)}
              onResize={(swiper) => adjustSlideHeights(swiper)}
            >
              {serviceArray.map(({ imgSrc, title, description }, index) => {
                let iconNo = (index + 1) % 4 == 0 ? 4 : (index + 1) % 4;

                return (
                  <SwiperSlide key={index}>
                    <div className="item h-100">
                      <span className="count">0{index + 1}</span>
                      <div className="image">
                        <img src={`https://nfforging.com/${imgSrc}`} alt="" />
                        {/* <span className="">0{index + 1}</span> */}
                        <div className="line-one"></div>
                        <div className="line-two"></div>
                      </div>
                      <div className="content">
                        <div className="icon">
                          <img
                            src={`/images/service/icon-${iconNo}.svg`}
                            alt=""
                          />
                        </div>
                        <h2>
                          <a href="service-single.html">{title}</a>
                        </h2>
                        <p>{description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

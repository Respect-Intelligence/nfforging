"use client";

import "@/scss/sections/service.scss";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect } from "react";
import { serviceArray } from "@/assets/static/data";

export default function ServiceSection() {
  // const adjustSlideHeights = (swiper: SwiperClass) => {
  //   if (!swiper?.slides?.length) return;

  //   let maxHeight = 0;

  //   swiper.slides.forEach((slideEl) => {
  //     const el = slideEl as HTMLElement;
  //     el.style.height = "auto"; // reset
  //     const height = el.offsetHeight;
  //     if (height > maxHeight) maxHeight = height;
  //   });

  //   swiper.slides.forEach((slideEl) => {
  //     const el = slideEl as HTMLElement;
  //     el.style.height = `${maxHeight}px`;
  //   });

  //   swiper.update();
  // };

  return (
    <>
      <section className="wpo-service-section section-padding ">
        <div className="container">
          <div className="service-wrap">
            <div className="heading-layout2">
              <p className="heading__subtitle">What We Offer</p>
              <h2 className="heading__title">Our Products</h2>
              {/* <h2>What We Offer</h2>
            <h3>Our Services</h3> */}
            </div>
            <div className="service-slider">
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                // autoplay={{
                //   delay: 3000, // 1 second
                //   disableOnInteraction: false,
                // }}
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
                // onSwiper={(swiper) => adjustSlideHeights(swiper)}
                // onResize={(swiper) => adjustSlideHeights(swiper)}
              >
                {serviceArray.map(({ imgSrc, title, description }, index) => {
                  let iconNo = (index + 1) % 4 == 0 ? 4 : (index + 1) % 4;

                  return (
                    <SwiperSlide key={index}>
                      <div className="item">
                        {/* <span className="count">0{index + 1}</span> */}
                        <div className="image">
                          <img src={`https://nfforging.com/${imgSrc}`} alt="" />
                          {/* <span className="">0{index + 1}</span> */}
                          {/* <div className="line-one"></div>
                          <div className="line-two"></div> */}
                        </div>
                        <div className="d-flex justify-content-end">
                          <div className="icon">
                            <img
                              src={`/images/service/icon-${iconNo}.svg`}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="content-wraper">
                          <div className="content">
                            <div className="top">
                              <h2>
                                <a href="service-single.html">
                                  {index + 1}. {title}
                                </a>
                              </h2>
                              <div className="arrowIcon">
                                <svg
                                  width="37"
                                  height="36"
                                  viewBox="0 0 37 36"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10.8378 27C10.3878 27 10.0878 26.85 9.78777 26.55C9.18777 25.95 9.18777 25.05 9.78777 24.45L24.7878 9.45C25.3878 8.85 26.2878 8.85 26.8878 9.45C27.4878 10.05 27.4878 10.95 26.8878 11.55L11.8878 26.55C11.5878 26.85 11.2878 27 10.8378 27Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M25.8378 25.5C24.9378 25.5 24.3378 24.9 24.3378 24V12H12.3378C11.4378 12 10.8378 11.4 10.8378 10.5C10.8378 9.6 11.4378 9 12.3378 9H25.8378C26.7378 9 27.3378 9.6 27.3378 10.5V24C27.3378 24.9 26.7378 25.5 25.8378 25.5Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <p>{description}</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

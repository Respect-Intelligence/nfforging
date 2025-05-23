"use client";

import "@/scss/sections/service.scss";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect } from "react";

export default function ServiceSection() {
  const serviceArray = [
    {
      title: "Sheet Piles",
      imgSrc: "images/ov-1.jpg",
      description:
        "Cold formed steel sheet piles are time-tested solution for all types of earth retention requirements.",
    },
    {
      title: "Solar Module Mounting Solutions",
      imgSrc: "images/ov-2.jpg",
      description:
        "N F FORGING'S Solar Module Mounting system includes everything you need for a simple and efficient PV installation.",
    },
    {
      title: "Wagon & Coaches",
      imgSrc: "images/ov-3.jpg",
      description:
        "Our quality manufacturing has enabled us to effectively meet the desired standards our customers.",
    },
    {
      title: "Pre Engineered Building",
      imgSrc: "images/ov-4.jpg",
      description:
        "Cold formed members can be efficient on a weight basis relative to mill rolled sections for secondary member applications.",
    },
    {
      title: "Crash Barriers",
      imgSrc: "images/ov-5.jpg",
      description:
        "Metal Crash Barriers are an effective road safety measure to protect a vehicle and its occupants in case of an accident.",
    },
    {
      title: "Products",
      imgSrc: "images/foundry-pro-img.jpg",
      description:
        "We offer various range of products to our prospective buyers",
    },
    {
      title: "Infrastructure",
      imgSrc: "images/infra-img.jpg",
      description:
        "An automated High Pressure Molding Line with multi-piston fast loop facility",
    },
    {
      title: "Quality Assurance",
      imgSrc: "images/quality-img.jpg",
      description:
        "We shall strive for a continual quality improvement and comply with",
    },
  ];
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
      <section className="wpo-service-section section-padding mb-50">
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
              className="pb-5"
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
                  slidesPerView: 4,
                },
              }}
              onSwiper={(swiper) => adjustSlideHeights(swiper)}
              onResize={(swiper) => adjustSlideHeights(swiper)}
            >
              {serviceArray.map(({ imgSrc, title, description }, index) => {
                let iconNo = (index + 1) % 4 == 0 ? 4 : (index + 1) % 4;

                return (
                  <SwiperSlide key={index}>
                    <div className="item h-100">
                      <div className="image">
                        <img src={`https://nfforging.com/${imgSrc}`} alt="" />
                        <span>0{index + 1}</span>
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

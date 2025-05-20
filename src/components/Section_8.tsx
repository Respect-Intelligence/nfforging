"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Check } from "lucide-react";

const sliderItems = [
  {
    icon: "icon-wrench5",
    title:
      "Utilising latest processing solutions, and decades of work experience.",
  },
  {
    icon: "icon-wheelbarrow",
    title:
      "Designing, construction, planning & infrastructures management such.",
  },
];

const Section_8 = () => {
  return (
    // <section className="banner-layout2 bg-overlay bg-parallax">
    <section className="banner-layout2 bg-overlay bg-parallax bg-img cirtification-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="heading-layout2 heading-light mb-50">
              <span className="heading__subtitle">
                Leading The Way In Building And Civil Construction
              </span>
              <h2 className="heading__title">
                Ready to Bring Bigger, Better, Faster And Stronger Projects Than
                Ever Before!!
              </h2>
            </div>
            <ul className="list-items list-items-white list-unstyled mb-40">
              <li>
                <span className="checkIcon">
                  <Check />
                </span>{" "}
                <div>
                  <b>ISO Certification</b> <br />
                  International standards compliance ensuring excellence in
                  quality management systems and operational efficiency.
                </div>
              </li>
              <li>
                <span className="checkIcon">
                  <Check />
                </span>
                <div>
                  <b> RDSO Certification</b> <br />
                  Approved by the Research Designs and Standards Organisation
                  for meeting stringent railway infrastructure standards.
                </div>
              </li>
              <li>
                <span className="checkIcon">
                  <Check />
                </span>
                <div>
                  <b>Bureau of Indian Standards (BIS)</b> <br />
                  Certified for adherence to national safety, quality, and
                  performance benchmarks across all manufacturing processes.
                </div>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="info-slider-wrapper d-flex justify-content-end">
              <div className="info__slider">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={0}
                  pagination={{ clickable: true }}
                >
                  {sliderItems.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="info__slider-item">
                        <div className="info__slider-icon">
                          <i className={item.icon}></i>
                        </div>
                        <h5 className="info__slider-title">{item.title}</h5>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_8;

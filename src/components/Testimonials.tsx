"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const testimonials = [
  {
    name: "John Peter",
    company: "7oroof Inc",
    image: "/assets/images/testimonials/thumbs/1.jpg",
    message:
      "They are the best and expertly trained team members who take the extra step and go the extra mile, all to fulfill our promise to deliver innovative and dynamic solutions to our customers to fit the needs of a rapidly changing global environment.",
  },
  {
    name: "Sami Wade",
    company: "Trustry",
    image: "/assets/images/testimonials/thumbs/2.jpg",
    message:
      "All to fulfill our promise to deliver innovative and dynamic solutions to our customers to fit the needs of a rapidly changing global environment. They are the best and expertly trained team members who take the extra step and go the extra mile.",
  },
  {
    name: "Sami Wade",
    company: "Trustry",
    image: "/assets/images/testimonials/thumbs/3.jpg",
    message:
      "They are the best and expertly trained team members who take the extra step and go the extra mile, all to fulfill our promise to deliver innovative and dynamic solutions to our customers to fit the needs of a rapidly changing global environment.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials testimonials-layout1">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="heading">
              <h2 className="heading__title color-theme">
                What Our Clients Say!
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="testimonials-wrapper">
              <div className="slider-nav">
                {testimonials.map((item, index) => (
                  <div className="slick__nav-item" key={index}>
                    <span className="testimonial__thumb">
                      <img src={item.image} alt="author thumb" />
                    </span>
                    <span className="testimonial__meta">
                      <span className="testimonial__meta-title">
                        {item.name}
                      </span>
                      <span className="testimonial__meta-desc">
                        {item.company}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
              <Swiper slidesPerView={1} className="slider-with-navs">
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-item">
                      <div className="testimonial__content">
                        <p className="testimonial__desc">{item.message}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

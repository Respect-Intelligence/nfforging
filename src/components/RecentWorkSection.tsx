"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const RecentWorkSection = () => {
  let objArr = [
    {
      image: "/images/portfolio/grid/1.jpg",
      title: "The Fallingwater House",
      categories: ["Building", "Interior"],
      desc: "We understand that data is greatest asset when it comes to analyzing and optimizing your supply chain performance.",
      link: "/projects-single-project.html",
    },
    {
      image: "/images/portfolio/grid/2.jpg",
      title: "The Guggenheim Museum",
      categories: ["Construction", "Engineering"],
      desc: "Cost savings is crucial, innovative technology minimizes your overall spend by utilizing an extensive consolidation.",
      link: "/projects-single-project.html",
    },
    {
      image: "/images/portfolio/grid/3.jpg",
      title: "Neue National Galerie",
      categories: ["Renovation", "Architecture"],
      desc: "Our Group has been building relationships and projects last. Serving an impressive list of long-term clients with experience.",
      link: "/projects-single-project.html",
    },
    {
      image: "/images/portfolio/grid/4.jpg",
      title: "Sagrada Familia",
      categories: ["Construstion", "Cuilding"],
      desc: "Cost savings is crucial, innovative technology minimizes your overall spend by utilizing an extensive consolidation.",
      link: "/projects-single-project.html",
    },
    {
      image: "/images/portfolio/grid/5.jpg",
      title: "Heydar Aliyev Center",
      categories: ["Engineering", "Renovation"],
      desc: "Our Group has been building relationships and projects last. Serving an impressive list of long-term clients with experience.",
      link: "/projects-single-project.html",
    },
    {
      image: "/images/portfolio/grid/6.jpg",
      title: "Cathedral of Brasilia",
      categories: ["Building", "Modern"],
      desc: "We understand that data is greatest asset when it comes to analyzing and optimizing your supply chain performance.",
      link: "/projects-single-project.html",
    },
  ];
  return (
    <section className="portfolio-standard portfolio-standard-carousel">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div className="heading text-center mb-50">
              <span className="heading__subtitle">Featured Projects</span>
              <h2 className="heading__title">Our Recent Works</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              breakpoints={{
                992: { slidesPerView: 3 },
                767: { slidesPerView: 2 },
                480: { slidesPerView: 1 },
              }}
            >
              {objArr.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="portfolio-item">
                    <div className="portfolio__img">
                      <img src={item.image} alt="portfolio img" />
                    </div>
                    <div className="portfolio__content">
                      <h4 className="portfolio__title">
                        <a href="#">{item.title}</a>
                      </h4>
                      <div className="portfolio__cat">
                        {item.categories.map((cat, i) => (
                          <a href="#" key={i}>
                            {cat}
                          </a>
                        ))}
                      </div>
                      <p className="portfolio__desc">{item.desc}</p>
                      <a href={item.link} className="btn btn__loadMore">
                        <span>Explore More</span>
                        <i className="icon-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWorkSection;

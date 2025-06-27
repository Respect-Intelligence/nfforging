"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const RecentWorkSection = () => {
  let objArr = [
    {
      image: "/images/service/ser1.jpg",
      title: "Cold Rolled Formed Sections",
      categories: ["Building", "Interior"],
      desc: "CRF division which has capabilities to Cold Roll Form profiles and sections ranging from 1 kilogram per square meter to 125 kilograms per square meter in thicknesses ranging from 0.8mm to 10mm",
      link: "/crf",
    },
    {
      image: "/images/service/ser2.jpg",
      title: "Foundry",
      categories: ["Construction", "Engineering"],
      desc: "Foundry division which has been classified as Class 'A' by RDSO (Research and Development Services Organisation). Details may please be seen in the relevant section of this website.",
      link: "/foundry",
    },
    {
      image: "/images/service/ser3.jpg",
      title: "Fabrication",
      categories: ["Renovation", "Architecture"],
      desc: "abrication division which is at ease with most demanding and challenging assignments for wagons for railways (Indian and overseas both), passenger coaches, ISO Shipping Containers and engineering assignments for refineries and other industries.",
      link: "/fabrication",
    },
  ];
  return (
    <section className="portfolio-standard portfolio-standard-carousel">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div className="heading text-center mb-50" data-aos="fade-down">
              <span className="heading__subtitle">Infra Capability</span>
              <h2 className="heading__title">
                Built to deliver precision and performance.
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12" data-aos="fade-left">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              autoHeight={true}
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
                      <div>
                        <h4 className="portfolio__title">
                          <Link href={item.link}>{item.title}</Link>
                        </h4>
                        <div className="portfolio__cat">
                          {item.categories.map((cat, i) => (
                            <Link href={item.link} key={i}>
                              {cat}
                            </Link>
                          ))}
                        </div>
                        <p className="portfolio__desc">{item.desc}</p>
                      </div>
                      <Link href={item.link} className="btn btn__loadMore">
                        <span>Explore More</span>
                        <ArrowRight height={18} />
                      </Link>
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

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowRight } from "lucide-react";
import "@/scss/sections/serviceOverview.scss";
import { Drill, HandPlatter } from "lucide-react";

function FirstSection() {
  let objArr = [
    {
      image: "/images/service/ser1.jpg",
      title: "Cold Rolled Formed Sections",
      categories: ["Building", "Interior"],
      desc: "CRF division which has capabilities to Cold Roll Form profiles and sections ranging from 1 kilogram per square meter to 125 kilograms per square meter in thicknesses ranging from 0.8mm to 10mm",
      link: "/projects-single-project.html",
    },
    {
      image: "/images/service/ser2.jpg",
      title: "Foundry",
      categories: ["Construction", "Engineering"],
      desc: "Foundry division which has been classified as Class 'A' by RDSO (Research and Development Services Organisation). Details may please be seen in the relevant section of this website.",
      link: "/projects-single-project.html",
    },
    {
      image: "/images/service/ser3.jpg",
      title: "Fabrication",
      categories: ["Renovation", "Architecture"],
      desc: "abrication division which is at ease with most demanding and challenging assignments for wagons for railways (Indian and overseas both), passenger coaches, ISO Shipping Containers and engineering assignments for refineries and other industries.",
      link: "/projects-single-project.html",
    },
  ];
  const fancyboxItems = [
    {
      icon: "icon-welding",
      title: "Powerfull Product<br> Strategy",
      desc: "Our facilities meet high security requirements and are certified to the highest local standards.",
    },
    {
      icon: "icon-checklist",
      title: "Award Winning <br>Projects",
      desc: "The world of international supply chains involves of unknown risks and challenging regulations.",
    },
    {
      icon: "icon-wrench5",
      title: "100% Satisfaction <br> Guarantee",
      desc: "Building relationships and projects that last. Serving an impressive clients.",
    },
  ];

  const galleryImages = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className="portfolio-single"></div>
      <section className="portfolio-item-service-details pt-0 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="portfolio-item">
                <div className="portfolio__img">
                  <img
                    src="/images/portfolio/single/1.jpg"
                    alt="portfolio"
                    className="img-fluid"
                  />
                </div>
                <div className="portfolio__icon">
                  <span>
                    <HandPlatter />
                  </span>
                </div>
                <div className="portfolio__content text-center ">
                  <h2 className="portfolio__title">Sagrada Familia</h2>
                  <div className="portfolio__cat">
                    <a href="#">Building</a>
                    <a href="#">Interior</a>
                  </div>
                  <p className="portfolio__desc">
                    A leading developer of A grade commercial, industrial and
                    residential projects in USA. Since foundation we doubled
                    turnover year on year, with its staff numbers swelling
                    accordingly.
                  </p>
                </div>
              </div>

              <div className="fancybox-layout2 mb-60">
                <div className="row">
                  {fancyboxItems.map((item, index) => (
                    <div className="col-sm-12 col-md-12 col-lg-4" key={index}>
                      <div className="fancybox-item">
                        <div className="fancybox__icon">
                          {/* <i className={item.icon}></i> */}

                          <Drill />
                        </div>
                        <div className="fancybox__content">
                          <h4
                            className="fancybox__title"
                            dangerouslySetInnerHTML={{ __html: item.title }}
                          />
                          <p className="fancybox__desc">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio-standard portfolio-standard-carousel pt-0">
        <div className="container">
          <div className="row">
            {objArr.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="portfolio-item">
                  <div className="portfolio__img">
                    <img src={item.image} alt="portfolio img" />
                  </div>
                  <div className="portfolio__content">
                    <div>
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
                    </div>
                    <a href={item.link} className="btn btn__loadMore">
                      <span>Explore More</span>
                      <ArrowRight height={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default FirstSection;

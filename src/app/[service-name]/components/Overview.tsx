"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowRight, Check } from "lucide-react";
import "@/scss/sections/serviceOverview.scss";
import { Drill, HandPlatter } from "lucide-react";
import Link from "next/link";
import { fancyboxItems, services_data } from "@/assets/static/data";

function Overview({
  topImage = false,
  serviceName,
  productname,
}: {
  serviceName: "crf" | "foundry";
  topImage?: boolean;

  productname?: string;
}) {
  let serviceData = services_data[serviceName];

  return (
    <>
      <section className="portfolio-item-service-details pt-0 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="portfolio-item">
                <div className="portfolio__content text-center pt-50">
                  <h2 className="portfolio__title ">{serviceData.title}</h2>
                  <div className="portfolio__cat">
                    <a href="#">Building</a>
                    <a href="#">Interior</a>
                  </div>
                  <p className="portfolio__desc">{serviceData.oneLiner}</p>
                </div>
              </div>

              <div className="fancybox-layout2 ">
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
          <div className="row ">
            <div className="col-sm-12 col-md-12 col-lg-9 offset-lg-2">
              <div className="text__block text__block-layout2 mb-70">
                <h5 className="text__block-title">Overview</h5>
                <div className="text__block-content">
                  <p className="text__block-desc">{serviceData.overview1}</p>
                  <p className="text__block-desc">{serviceData.overview2}</p>
                  {/* <ul className="portfolio__meta-list list-unstyled mt-30 mb-40">
                    <li>
                      <strong>Client:</strong>
                      <span>7oroof Network</span>
                    </li>
                    <li>
                      <strong>Location:</strong>
                      <span>Tanta, Algharbia, Egypt</span>
                    </li>
                    <li>
                      <strong>Services:</strong>
                      <span>
                        Construction, Architecture, Building, Renovations
                      </span>
                    </li>
                  </ul> */}

                  <ul className="list-items list-items-layout2 list-unstyled mb-30 mt-20">
                    {serviceData.keyPoints.map(
                      (point: string, index: number) => {
                        return (
                          <li key={index}>
                            <span className="checkIcon">
                              <Check />
                            </span>
                            {point}
                          </li>
                        );
                      }
                    )}
                  </ul>
                  <Link
                    href="/contact-us"
                    className="btn btn__primary btn__icon btn__lg"
                  >
                    <span>Have A Project, Request A Quote</span>
                    <ArrowRight />
                  </Link>
                </div>
              </div>

              {/* <div className="text__block text__block-layout2 mb-50">
                <h5 className="text__block-title">Challenge</h5>
                <div className="text__block-content">
                  <p className="text__block-desc">
                    However, the scope of Dow’s needs had only been accomplished
                    on an inter-regional scale. What Dow wanted now was seamless
                    information management and transportation logistics. That’s
                    why we strive to find the air freight solution that best
                    suits your needs. We’ll ask you when the freight is
                    available, what the required delivery date is, and if
                    there’s potential to save on time or cost.
                  </p>
                  <p className="text__block-desc">
                    During that time, we’ve become expert in freight
                    transportation by air and all its related services. We work
                    closely with all major airlines around the world.
                  </p>
                  <ul className="list-items list-items-layout2 list-unstyled mb-30">
                    <li>Design, bid, build contracts</li>
                    <li>Construction manager</li>
                    <li>Computer architecture</li>
                    <li>Contract administrator</li>
                    <li>Design-build contracts</li>
                    <li>Consulting engineer</li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
          <div className="row">
            {serviceData?.productsArr &&
              serviceData?.productsArr?.map((item, index) => (
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

export default Overview;

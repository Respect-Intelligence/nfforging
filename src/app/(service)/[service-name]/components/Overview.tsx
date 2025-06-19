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
import { ServiceName } from "@/assets/static/types";

function Overview({
  topImage = false,
  serviceName,
  productname,
}: {
  serviceName: ServiceName;
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
                  {serviceData?.highlights?.map(
                    (
                      item: {
                        Icon: React.ReactNode;
                        title: string;
                        para: string;
                      },
                      index: number
                    ) => (
                      <div className="col-sm-12 col-md-12 col-lg-4" key={index}>
                        <div className="fancybox-item">
                          <div className="fancybox__icon">
                            {/* <i className={item.icon}></i> */}

                            {item.Icon}
                          </div>
                          <div className="fancybox__content">
                            <h4
                              className="fancybox__title"
                              dangerouslySetInnerHTML={{ __html: item.title }}
                            />
                            <p className="fancybox__desc">{item.para}</p>
                          </div>
                        </div>
                      </div>
                    )
                  )}
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
              <div className="text__block text__block-layout2 ">
                <h5 className="text__block-title">Overview</h5>
                <div className="text__block-content">
                  <p className="text__block-desc">{serviceData?.overview1}</p>
                  <p className="text__block-desc">{serviceData?.overview2}</p>
                  {serviceData?.keyPoints && (
                    <ul className="list-items list-items-layout2 list-unstyled mb-30 mt-20">
                      {serviceData?.keyPoints?.map(
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
                  )}
                </div>
              </div>
            </div>
            {serviceData?.sections?.map((section, sectionIndex) => (
              <div
                className="col-sm-12 col-md-12 col-lg-9 offset-lg-2"
                key={sectionIndex}
              >
                <div className="text__block text__block-layout2 ">
                  <h5 className="text__block-title fs-5">{section.title}</h5>
                  <div className="text__block-content">
                    <p className="text__block-desc">{section?.para}</p>
                    {/* <div key={sectionIndex} className="mb-30 mt-20"> */}
                    {/* <h6 className="fw-semibold mb-3">{section.title}</h6> */}
                    <ul className="list-items list-items-layout2 list-unstyled">
                      {section.content.list.map((item, index) => (
                        <li
                          key={index}
                          className="d-flex align-items-start gap-3 mb-2"
                        >
                          <span className="color-theme mt-1">{item.Icon}</span>
                          <div>
                            <p className="mb-1 fw-bold">{item.title}</p>
                            {item.para && <p className="mb-0">{item.para}</p>}
                            {item.list && (
                              <ul className="list-unstyled ps-3 mt-2">
                                {item.list.map((subItem, subIndex) => (
                                  <li key={subIndex} className="mb-1">
                                    <p className="mb-0">
                                      <strong>{subItem.title}</strong>
                                      {subItem.para ? `: ${subItem.para}` : ""}
                                    </p>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-sm-12 col-md-12 col-lg-9 offset-lg-2">
              <div className="text__block text__block-layout2 ">
                <div className="text__block-content">
                  <Link
                    href="/contact-us"
                    className="btn btn__primary btn__icon btn__lg"
                  >
                    <span>Have A Project, Request A Quote</span>
                    <ArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {serviceData?.productsArr && (
            <div className="row">
              <div className="product-section-heading">
                <p>{serviceData?.productsSectionHeading?.heading}</p>
                <h2>{serviceData?.productsSectionHeading?.subHeading}</h2>
              </div>
              {serviceData?.productsArr?.map((item: any, index: number) => (
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
                        {/* <div className="portfolio__cat">
                          {item.categories.map((cat, i) => (
                            <a href="#" key={i}>
                              {cat}
                            </a>
                          ))}
                        </div> */}
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
          )}
        </div>
      </section>
    </>
  );
}

export default Overview;

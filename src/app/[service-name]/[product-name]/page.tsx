"use client";

import BasicTopBanner from "@/components/BasicTopBanner";
import { notFound, useParams } from "next/navigation";
import React from "react";
import "@/scss/sections/serviceOverview.scss";
import { ArrowRight, Check, Drill, HandPlatter } from "lucide-react";
import Link from "next/link";
import { fancyboxItems, sheetPiles_data } from "@/assets/static/data";

type validSlugs = "crf" | "foundry" | "fabrication" | "services";

interface PageProps {
  params: {
    "product-name": string;
    "service-name": string;
  };
}
function page({ params }: PageProps) {
  // const params = useParams();
  let productname = params["product-name"];
  let serviceName = params["service-name"];

  if (!productname) {
    notFound(); // 🚨 This triggers the built-in 404 page
  }

  let data = sheetPiles_data;

  return (
    <>
      <BasicTopBanner title={"Product & Services"} />
      <section className="portfolio-item-service-details pt-0 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="portfolio-item">
                <div className="row justify-content-center top-image">
                  <div className="col-lg-8">
                    <div className="portfolio__img h-auto mt-50 ">
                      <img
                        src={data.image}
                        alt="portfolio"
                        className="img-fluid"
                      />
                    </div>
                    <div className="portfolio__icon">
                      <span>
                        <HandPlatter />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="portfolio__content text-center pt-50">
                  <h2 className="portfolio__title ">{data.title}</h2>
                  <div className="portfolio__cat">
                    <a href="#">Building</a>
                    <a href="#">Interior</a>
                  </div>
                  <p className="portfolio__desc">{data.oneLiner}</p>
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
                  <p className="text__block-desc">{data.para}</p>
                  <p className="text__block-desc">{data.para2}</p>

                  <ul className="list-items list-items-layout2 list-unstyled mb-30 mt-20">
                    {data.section.points.map((point: string, index: number) => {
                      return (
                        <li key={index}>
                          <span className="checkIcon">
                            <Check />
                          </span>
                          {point}
                        </li>
                      );
                    })}
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
            </div>
          </div>
          <div className="row">
            {data?.typesOfProduct &&
              data?.typesOfProduct?.map((item, index) => (
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

                        <p className="portfolio__desc">{item.para}</p>
                      </div>
                      {/* <a href={item.link} className="btn btn__loadMore">
                                  <span>Explore More</span>
                                  <ArrowRight height={18} />
                                </a> */}
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

export default page;

"use client";

import BasicTopBanner from "@/components/BasicTopBanner";
import { notFound, useParams } from "next/navigation";
import React, { use } from "react";
import "@/scss/sections/serviceOverview.scss";
import { ArrowRight, Check, Drill, HandPlatter } from "lucide-react";
import Link from "next/link";
import { fancyboxItems, sheetPiles_data } from "@/assets/static/data";
import { promises } from "dns";
import ImageSlider from "../components/ImageSlider";

type validSlugs = "crf" | "foundry" | "fabrication" | "services";

interface PageProps {
  params: Promise<{
    "product-name": string;
    "service-name": string;
  }>;
}
function page({ params }: PageProps) {
  // const params = useParams();
  const { "service-name": serviceName, "product-name": productname } =
    use(params);
  // let productname = params["product-name"];
  // let serviceName = params["service-name"];

  if (!productname) {
    notFound(); // 🚨 This triggers the built-in 404 page
  }

  let data = sheetPiles_data;
  const counters = [
    { count: "6,154", label: "Projects Completed" },
    { count: "2,512", label: "Qualified Workers" },
    { count: "1,784", label: "Satisfied Clients" },
  ];

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
                    <div
                      className="portfolio__img p-4"
                      style={{
                        height: "150px",
                      }}
                    >
                      <img
                        src={item.image}
                        alt="portfolio img"
                        className="object-fit-contain"
                      />
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

          <ImageSlider />
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-9 offset-lg-2">
              <div className="text__block text__block-layout2 mb-70">
                <h5 className="text__block-title">
                  Solution & <br /> Results
                </h5>

                <div className="text__block-content">
                  <p className="text__block-desc">
                    That’s why we strive to find the air freight solution that
                    best suits your needs. We’ll ask you when the freight is
                    available, what the required delivery date is, and if
                    there’s potential to save on time or cost. Your answers to
                    these and other questions help us decide if you should book
                    the air freight as direct.
                  </p>
                  <p className="text__block-desc">
                    During that time, we’ve become expert in freight
                    transportation by air and all its related services. We work
                    closely with all major airlines around the world.
                  </p>

                  <div className="counters-layout2">
                    <div className="row">
                      {counters.map((item, index) => (
                        <div className="col-4" key={index}>
                          <div className="counter-item">
                            <h4 className="counter">{item.count}</h4>
                            <p className="counter__desc">{item.label}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;

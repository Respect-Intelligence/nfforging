"use client";

import BasicTopBanner from "@/components/BasicTopBanner";
import { notFound, useParams } from "next/navigation";
import React, { use } from "react";
import "@/scss/sections/serviceOverview.scss";
import { ArrowRight, Check, Cog, Drill, HandPlatter } from "lucide-react";
import Link from "next/link";
import { fancyboxItems, sheetPiles_data } from "@/assets/static/data";
import { promises } from "dns";
import ImageSlider from "../components/ImageSlider";
import { getStaticData } from "@/utils/CommonFuntion";
import { ProductPageData } from "@/assets/static/types";

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

  // if (!isValidProductName({ serviceName, productname })) {
  //   console.log("redirecting from service page 404");

  //   notFound();
  // }

  let data = getStaticData(productname) as ProductPageData;
  if (!productname || data == null) {
    notFound(); // 🚨 This triggers the built-in 404 page
  }

  const counters = [
    { count: "6,154", label: "Projects Completed" },
    { count: "2,512", label: "Qualified Workers" },
    { count: "1,784", label: "Satisfied Clients" },
  ];

  return (
    <>
      <BasicTopBanner bannerImgSrc={data.image} title={"Product & Services"} />
      <section className="portfolio-item-service-details pt-0 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="portfolio-item">
                {/* <div className="row justify-content-center top-image">
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
                </div> */}
                <div
                  className="portfolio__content text-center pt-50"
                  data-aos="fade-down"
                >
                  <h2 className="portfolio__title ">{data.title}</h2>
                  {/* <div className="portfolio__cat">
                    <a href="#">Building</a>
                    <a href="#">Interior</a>
                  </div> */}
                  <p className="portfolio__desc">{data.oneLiner}</p>
                </div>
              </div>
              {/* highlights */}
              <div className="fancybox-layout2 ">
                <div className="row">
                  {data?.highlights?.map(({ Icon, title, para }, index) => (
                    <div
                      className="col-sm-12 col-md-12 col-lg-4"
                      key={index}
                      data-aos="fade-right"
                      data-aos-delay={index * 150}
                    >
                      <div className="fancybox-item">
                        <div className="fancybox__icon">{Icon}</div>
                        <div className="fancybox__content">
                          <h4 className="fancybox__title">{title}</h4>
                          <p className="fancybox__desc">{para}</p>
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
                <h5 className="text__block-title" data-aos="fade-down">
                  Overview
                </h5>
                <div className="text__block-content" data-aos="fade-left">
                  <p className="text__block-desc">{data.para}</p>
                  <p className="text__block-desc">{data.para2}</p>

                  <ul className="list-items list-items-layout2 list-unstyled mb-30 mt-20">
                    {data.section?.points.map((item, index: number) => {
                      if (typeof item == "string") {
                        return (
                          <li
                            key={index}
                            data-aos="fade-right"
                            data-aos-delay={index * 100}
                          >
                            <span className="checkIcon">
                              <Check />
                            </span>
                            {item}
                          </li>
                        );
                      } else {
                        return (
                          <li
                            key={index}
                            className=" align-items-start"
                            data-aos="fade-right"
                            data-aos-delay={index * 100}
                          >
                            <div className="left pt-1">
                              <span className="checkIcon">
                                <Check />
                              </span>
                            </div>
                            <div className="">
                              <p className=" mb-0 fw-bold">{item?.title}</p>
                              {item?.para}
                            </div>
                          </li>
                        );
                      }
                    })}
                  </ul>
                </div>
              </div>
            </div>

            {data?.sections?.map((section, sectionIndex) => (
              <div
                className="col-sm-12 col-md-12 col-lg-9 offset-lg-2"
                key={sectionIndex}
              >
                <div className="text__block text__block-layout2 ">
                  <h5 className="text__block-title fs-5" data-aos="fade-down">
                    {section.title}
                  </h5>
                  <div className="text__block-content" data-aos="fade-right">
                    <p className="text__block-desc">{section?.para}</p>
                    {/* <div key={sectionIndex} className="mb-30 mt-20"> */}
                    {/* <h6 className="fw-semibold mb-3">{section.title}</h6> */}
                    <ul className="list-items list-items-layout2 list-unstyled">
                      {section.content?.list?.map((item, index) => (
                        <li
                          key={index}
                          className="d-flex align-items-start gap-3 mb-2"
                          data-aos="fade-right"
                          data-aos-delay={index * 100}
                        >
                          <span className="color-theme mt-1">{item.Icon}</span>
                          <div>
                            <p className="mb-1 fw-bold">{item.title}</p>
                            {item?.para && <p className="mb-0">{item.para}</p>}
                            {item?.list && (
                              <ul className="list-unstyled ps-3 mt-2">
                                {item?.list?.map((subItem, subIndex) => (
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
                <div className="text__block-content" data-aos="fade-right">
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

          {/* types of product if abhilable */}
          {data?.typesOfProduct && (
            <div className="row pb-5">
              <div className="product-section-heading" data-aos="fade-down">
                <p>{data?.typesOfProductHeading?.heading}</p>
                <h2>{data?.typesOfProductHeading?.subHeading}</h2>
              </div>
              {data?.typesOfProduct &&
                data?.typesOfProduct?.map((item, index) => (
                  <div
                    className="col-md-3"
                    key={index}
                    data-aos="fade-right"
                    data-aos-delay={index * 150}
                  >
                    <div className="portfolio-item">
                      <div
                        className="portfolio__img pt-4 px-4"
                        style={{
                          height: "auto",
                        }}
                      >
                        <img
                          src={item.image}
                          alt="portfolio img"
                          className="object-fit-contain"
                          style={{
                            maxHeight: "unset",
                            height: "auto",
                          }}
                        />
                      </div>
                      <div className="portfolio__content pb-3">
                        <div>
                          <h4 className="portfolio__title">
                            <a href="#">{item.title}</a>
                          </h4>

                          <p className="portfolio__desc mb-2">{item.para}</p>
                          {item?.details?.map(({ Icon, label, value }, key) => (
                            <div className="detail-item " key={key}>
                              <div className="detail-label">
                                {" "}
                                {Icon}
                                {label}
                              </div>
                              <div className="detail-value product-value">
                                <span>{value}</span>
                              </div>
                            </div>
                          ))}
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
          )}

          {/* <ImageSlider />*/}

          {data?.counterSection && (
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-9 offset-lg-2">
                <div className="text__block text__block-layout2 mb-70">
                  <h5 className="text__block-title" data-aos="fade-right">
                    {data?.counterSection?.title}
                  </h5>

                  <div className="text__block-content">
                    <p className="text__block-desc" data-aos="fade-right">
                      {data?.counterSection?.para}
                    </p>

                    <div className="counters-layout2">
                      <div className="row">
                        {data?.counterSection?.counter.map((item, index) => (
                          <div
                            className="col-4"
                            key={index}
                            data-aos="fade-down"
                            data-aos-delay={index * 100}
                          >
                            <div className="counter-item">
                              <p className="counter__desc mb-1 text-start">
                                {item.label}
                              </p>
                              <h4 className="counter text-start fs-4">
                                {item.count}
                              </h4>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default page;

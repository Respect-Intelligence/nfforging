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

const data = {
  crf: {
    title: "CRF",
    oneLiner:
      "The Cold Rolled Formed (CRF) section produces high-precision steel profiles using advanced roll forming technology. It serves key industries like railways, solar, and infrastructure with sections up to 12 mm thick.",
    overview1:
      "We are the leading manufacturer of Cold Rolled Formed Sections & Steel Structures to cater the need of the major industries mainly Indian Railways for Coaches and Wagons, Sheet Pilings and Solar Projects.",
    overview2:
      "Cold Rolled Forming is a progressive motion process of gradually forming a flat strip of metal sheet through pairs of rolls to the desired profile without changing the thickness, at ambient temperatures. Cold-Rolled Forming can produce different cold formed steel sections like Z, C, Channels, Angles, Hat sections etc. The plant can produce sections from 1.2 mm - 10 mm in Stainless Steel and up to 12 mm in Mild Steel.",

    productsArr: [
      {
        title: "Sheet Piles",
        categories: ["metel", "container"],
        image: "https://nfforging.com/images/ov-1.jpg",
        desc: "Cold formed steel sheet piles are time-tested solution for all types of earth retention requirements.",
        link: "/crf/sheet-piles",
      },
      {
        title: "Solar Module Mounting Solutions",
        categories: ["metel", "container"],
        image: "https://nfforging.com/images/ov-2.jpg",
        desc: "N F FORGING'S Solar Module Mounting system includes everything you need for a simple and efficient PV installation.",
        link: "solar-module.html",
      },
      {
        title: "Wagon & Coaches",
        categories: ["metel", "container"],
        image: "https://nfforging.com/images/ov-3.jpg",
        desc: "Our quality manufacturing has enabled us to effectively meet the desired standards our customers.",
        link: "wagon-coaches.html",
      },
      {
        title: "Pre Engineered Building",
        categories: ["metel", "container"],
        image: "https://nfforging.com/images/ov-4.jpg",
        desc: "Cold formed members can be efficient on a weight basis relative to mill rolled sections for secondary member applications.",
        link: "pre-engineered-building.html",
      },
      {
        title: "Crash Barriers",
        categories: ["metel", "container"],
        image: "https://nfforging.com/images/ov-5.jpg",
        desc: "Metal Crash Barriers are an effective road safety measure to protect a vehicle and its occupants in case of an accident.",
        link: "crash-barriers.html",
      },
    ],
    keyPoints: [
      "High-strength, precision-engineered steel sections.",
      "Produces Z, C, Channel, Angle, and Hat profiles.",
      "Supports 1.2–10 mm SS and up to 12 mm MS thickness.",
      "Used in railways, solar, piling, and infrastructure.",
      "Custom profiles for structural and industrial needs.",
    ],
  },
  foundry: {
    title: "Foundry",
    oneLiner:
      "Our state-of-the-art foundry produces high-quality castings with precision, supporting critical industrial applications through robust infrastructure and stringent quality control.",
    overview1:
      "The foundry at N F Forgings is a recent addition to the Eastern India based Lalbaba group which has been active for the last six decades in the field of Steel, Forgings, Seamless Tubes & Pipes, FRP – Fiber Reinforced Plastic and Transmission Components.",
    overview2:
      "Our A-Class foundry is equipped with advanced technologies and a production capacity of 300 MTs/month. We deliver castings with exceptional dimensional accuracy and surface finish, and are approved by RDSO – Indian Railways, BHEL, BEML, NTPC, and other PSUs.",

    productsArr: [
      {
        title: "Products",
        categories: ["casting", "industrial"],
        image: "https://nfforging.com/images/foundry-pro-img.jpg",
        desc: "We offer varius range of products to our prospective buyers",
        link: "foundry-products.html",
      },
      {
        title: "Infrastructure",
        categories: ["infrastructure", "automation"],
        image: "https://nfforging.com/images/infra-img.jpg",
        desc: "An automated High Pressure Molding Line with multi-piston fast loop facility",
        link: "infrastructure.html",
      },
      {
        title: "Quality Assurance",
        categories: ["quality", "standards"],
        image: "https://nfforging.com/images/quality-img.jpg",
        desc: "We shall strive for a continual quality improvement and comply with",
        link: "foundry-quality.html",
      },
    ],
    keyPoints: [
      "300 MT/month casting capacity with A-Class certification.",
      "Approved by RDSO, BHEL, BEML, NTPC and other PSUs.",
      "Equipped with advanced high-pressure molding technology.",
      "Expert team including metallurgists and engineers.",
      "High dimensional accuracy and superior surface finish.",
    ],
  },
};

function FirstSection({
  topImage = false,
  serviceName,
}: {
  serviceName: "crf" | "foundry";
  topImage?: boolean;
}) {
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

  let serviceData = data[serviceName];

  return (
    <>
      <section className="portfolio-item-service-details pt-0 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="portfolio-item">
                {topImage && (
                  <>
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
                  </>
                )}
                <div className="portfolio__content text-center pt-50">
                  <h2 className="portfolio__title text-uppercase">
                    {serviceName}
                  </h2>
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

export default FirstSection;

"use client";

import "@/scss/sections/ourClients.scss";
import "@/scss/sections/section5.scss";
import React, { useState } from "react";
export default function OurClientsSection() {
  let section5Arr = [
    {
      imgSrc: "/images/home3/sec5_1.png",
      title: "CRF Division",
      para: "CRF division which has capabilities to Cold Roll Form profiles and sections ranging from 1 kilogram per square meter to 125 kilograms per square meter in thicknesses ranging from 0.8mm to 10mm",
    },
    {
      imgSrc: "/images/home3/sec5_2.png",
      title: "Foundry",
      para: "Foundry division which has been classified as Class 'A' by RDSO (Research and Development Services Organisation). Details may please be seen in the relevant section of this website.",
    },
    {
      imgSrc: "/images/home3/sec5_3.png",
      title: "Fabrication",
      para: "Fabrication division which is at ease with most demanding and challenging assignments for wagons for railways (Indian and overseas both), passenger coaches, ISO Shipping Containers and engineering assignments for refineries and other industries",
    },
    {
      imgSrc: "/images/home3/sec5_4.png",
      title: "Services",
      para: "We provide reliable engineering and manufacturing services across sectors like infrastructure, transportation, and renewable energy. With a focus on quality, precision, and timely delivery, we ensure every project meets the highest standards.",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
  return (
    <>
      <section className="portfolio-standard portfolio-standard-carousel  clients-section pb-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
              <div className="heading text-center mb-50">
                <span className="heading__subtitle">NF Forgings</span>
                <h2 className="heading__title">Our Clients?</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="clients-carosoul-wrpper mb-4 justify-content-center ">
            <ClientsCarosoul className=" flex-wrap w-100  justify-content-center" />
            {/* <ClientsCarosoul className="swipe1" /> */}
          </div>
          {/* <div className="clients-carosoul-wrpper justify-content-end mb-4 pb-1">
            <ClientsCarosoul className="" />
            <ClientsCarosoul className="swipe2" />
          </div> */}
        </div>
      </section>

      <section className="section5 section pb-0">
        <div
          className="items-wrapper"
          style={
            {
              // Example: change a background color variable or anything else
              "--item-hight": hoveredIndex !== null ? "20%" : "25%",
            } as React.CSSProperties
          }
          onMouseLeave={() => setHoveredIndex(0)}
        >
          {section5Arr.map(({ imgSrc, title, para }, index) => (
            <div
              className="item"
              key={index}
              style={
                {
                  backgroundImage: `url(${imgSrc})`,
                  "--item-hight":
                    hoveredIndex === index
                      ? "40%"
                      : hoveredIndex !== null
                      ? "20%"
                      : "25%",
                } as React.CSSProperties
              }
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <div className="content">
                <h3>
                  <a href="project-single.html">{title}</a>
                </h3>
                <p className="text-justify">{para}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function ClientsCarosoul({
  className,
}: {
  className: string;
}): React.ReactNode {
  return (
    <div className={`clients-carosoul  ${className}`}>
      <div className="client-logo-box">
        <img src="/images/clients/20.png" alt="Client Logo 20" />
      </div>
      <div className="client-logo-box">
        <img src="/images/clients/22.png" alt="Client Logo 22" />
      </div>
      <div className="client-logo-box">
        <img src="/images/clients/24.png" alt="Client Logo 24" />
      </div>
      <div className="client-logo-box">
        <img src="/images/clients/25.png" alt="Client Logo 25" />
      </div>
      {/*<div className="client-logo-box">
        <img src="/images/clients/26.png" alt="Client Logo 26" />
      </div>
      <div className="client-logo-box">
        <img src="/images/clients/27.png" alt="Client Logo 27" />
      </div>
      <div className="client-logo-box">
        <img src="/images/clients/28.png" alt="Client Logo 28" />
      </div>
      <div className="client-logo-box">
        <img src="/images/clients/29.png" alt="Client Logo 29" />
      </div>
      <div className="client-logo-box">
        <img src="/images/clients/30.png" alt="Client Logo 30" />
      </div>
      <div className="client-logo-box">
        <img src="/images/clients/31.jpg" alt="Client Logo 31" />
      </div>
      <div className="client-logo-box">
        <img src="/images/clients/32.png" alt="Client Logo 32" />
      </div>
      <div className="client-logo-box">
        <img src="/images/clients/33.png" alt="Client Logo 33" />
      </div>
      <div className="client-logo-box">
        <img src="/images/clients/34.png" alt="Client Logo 34" />
      </div>
      <div className="client-logo-box">
        <img src="/images/clients/35.png" alt="Client Logo 35" />
      </div>
      <div className="client-logo-box">
        <img src="/images/clients/36.png" alt="Client Logo 36" />
      </div>
      <div className="client-logo-box">
        <img src="/images/clients/37.png" alt="Client Logo 37" />
      </div>
      <div className="client-logo-box">
        <img src="/images/clients/38.png" alt="Client Logo 38" />
      </div>
      <div className="client-logo-box">
        <img src="/images/clients/39.png" alt="Client Logo 39" />
      </div>
      <div className="client-logo-box">
        <img src="/images/clients/40.png" alt="Client Logo 40" />
      </div>
      <div className="client-logo-box">
        <img src="/images/clients/41.png" alt="Client Logo 41" />
      </div>
      <div className="client-logo-box">
        <img src="/images/clients/42.png" alt="Client Logo 42" />
      </div>
      <div className="client-logo-box">
        <img src="/images/clients/43.png" alt="Client Logo 43" />
      </div>
      <div className="client-logo-box">
        <img src="/images/clients/44.jpg" alt="Client Logo 44" />
      </div>
      <div className="client-logo-box">
        <img src="/images/clients/45.png" alt="Client Logo 45" />
      </div>
      <div className="client-logo-box">
        <img src="/images/clients/46.png" alt="Client Logo 46" />
      </div>
      <div className="client-logo-box">
        <img src="/images/clients/47.jpg" alt="Client Logo 47" />
      </div>
      <div className="client-logo-box">
        <img src="/images/clients/48.jpg" alt="Client Logo 48" />
      </div>
      <div className="client-logo-box">
        <img src="/images/clients/49.png" alt="Client Logo 49" />
      </div>
      <div className="client-logo-box">
        <img src="/images/clients/50.png" alt="Client Logo 50" />
      </div>
      <div className="client-logo-box">
        <img src="/images/clients/51.png" alt="Client Logo 51" />
      </div> */}
    </div>
  );
}

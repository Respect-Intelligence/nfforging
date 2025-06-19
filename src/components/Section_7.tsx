"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ClockPlus, TrendingUp } from "lucide-react";

function Section_7() {
  return (
    <>
      <section className="banner-layout1 p-0">
        <div className="container-fluid col-padding-0 bg-theme">
          <div className="row">
            <div
              className="col-sm-12 position-relative col-md-12 col-lg-6 background-banner"
              style={{
                backgroundImage: "url(/images/about/vision_perpose.jpg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="cta__banner bg-white">
                <h5 className="cta__title">Forging Excellence Since 1997</h5>
                <p className="cta__desc text-justify">
                  For over 25 years, NF Forgings Pvt. Ltd. has been a leader in
                  Foundry, Forming, and Fabrication. Our commitment to quality,
                  innovation, and skilled craftsmanship has solidified our
                  position in the steel engineering industry.
                </p>
                <Link href="/contact-us" className="btn btn__primary btn__link">
                  <span>Contact Us</span>{" "}
                  <span className="">
                    <ArrowRight height={18} />
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="inner-padding">
                <div className="heading-layout2 heading-light mb-40">
                  <h2 className="heading__title">
                    Driven by Vision, Powered by Purpose
                  </h2>
                  <p className="heading__desc text-justify">
                    At NF Forgings, our vision is to lead the steel engineering
                    industry through innovation and quality. Our mission is to
                    deliver reliable, high-performance solutions by combining
                    technology, expertise, and experience.
                  </p>
                </div>
                <div className="row fancybox-light">
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="fancybox-item">
                      <div className="fancybox__icon">
                        <ClockPlus width={"60px"} height={"auto"} />
                      </div>
                      <div className="fancybox__content">
                        <h4 className="fancybox__title">OUR VISION</h4>
                        <p className="fancybox__desc text-justify">
                          We have the vision to become the pioneers in the steel
                          engineering industry. We are relentlessly working to
                          achieve the numerouno status in the industry. We have
                          to achieve higher production levels.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="fancybox-item">
                      <div className="fancybox__icon">
                        <TrendingUp width={"60px"} height={"auto"} />
                      </div>
                      <div className="fancybox__content">
                        <h4 className="fancybox__title">OUR MISSION</h4>
                        <p className="fancybox__desc text-justify">
                          We aim to leverage our existing facilities and
                          technologies as well as our technical expertise so
                          that we can evolve as a team to do better. Our
                          experience coupled with quality service will ensure
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn__white btn__bordered btn__icon box-shadow-none"
                  onClick={() => {
                    let btn = document.querySelector(
                      ".get-aquoteBtn"
                    ) as HTMLElement;
                    if (btn) {
                      btn.click();
                    }
                  }}
                >
                  <span>Request A Quote</span>
                  <ArrowRight height={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section_7;

"use client";

import React from "react";
import "@/scss/sections/AboutWithHighlight.scss";
import { aboutHighlights } from "@/assets/static/data";
import { Indent } from "lucide-react";
import Popup from "../Popup";

function AboutWithHighlight() {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  return (
    <>
      <section className="AboutWithHighlight ">
        <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/eDVSNnDEXK8?si=x1nhnw2h5Gszr4mk"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Popup>
        {/* <div className="container-fluid"> */}
        <div className=" d-flex flex-col flex-md-row">
          <div className="col-md-6">
            <div className="about-video">
              <div className="heading-layout2">
                <p className="heading__subtitle">
                  Providing Robust Engineering Solutions
                </p>
                <h2 className="heading__title">NF Forgings Private Limited</h2>
              </div>
              <p className="desc">
                A quarter century ago, our founding father Mr. Murari Lal
                Dhanuka had sown a small seed which, over the years, has grown
                into a behemoth known as the LAL BABA group of companies. NF
                Forgings Private Limited is a flagship of Lal Baba group
                commanding market leadership in Foundry, Forming and
                Fabrication. Money can buy machines but at NF, we have always
                believed that the men behind the machine are more important.
                Apart from machines, over the past few decades, we have heavily
                invested into and nurtured an able, experienced and qualified
                team to help us achieve the highest levels of excellence.
              </p>

              <div className="row g-3 ">
                {aboutHighlights.map(
                  ({ icon, title, description, IconSvg }, index) => {
                    return (
                      <div className="col-md-6" key={index}>
                        <div className="highlight">
                          <div className="top">
                            <span className="icon">{IconSvg}</span>
                            <h3>{title}</h3>
                          </div>
                          <p>{description}</p>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="video-div-wraper">
              <button
                onClick={() => {
                  setIsPopupOpen(true);
                }}
                type="button"
                className="playBtn"
              >
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.04993 4.52661L24.3833 15.0266L8.04993 25.5266V4.52661Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <img src="/images/home3/Background (1).png" alt="" />
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
}

export default AboutWithHighlight;

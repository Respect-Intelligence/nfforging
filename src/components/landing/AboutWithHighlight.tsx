import React from "react";
import "@/scss/sections/AboutWithHighlight.scss";
import { aboutHighlights } from "@/assets/static/data";
import { Indent } from "lucide-react";

function AboutWithHighlight() {
  return (
    <>
      <section className="AboutWithHighlight">
        <div className="d-flex ">
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

              <div className="row g-3">
                {aboutHighlights.map(
                  ({ icon, title, description, IconSvg }, index) => {
                    return (
                      <div className="col-6" key={index}>
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
          <div className="col-md-6">
            <div className="video-div-wraper">
              <div className="playBtn">
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
              </div>
              <img src="/images/home3/Background (1).png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutWithHighlight;

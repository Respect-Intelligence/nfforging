import React from "react";
import backImg from "@/assets/images/page-titles/8.jpg";

function TopBanner() {
  return (
    <section className="page-title page-title-layout1 bg-overlay bg-overlay-2 bg-parallax">
      <div className="bg-img">
        <img src="/images/page-titles/1.jpg" alt="background" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <span className="pagetitle__subheading">
              World's Leading Industry Corporation!
            </span>
            <h1 className="pagetitle__heading">
              Best A Grade Commercial & Residential Services
            </h1>
            <a
              href="projects-grid.html"
              className="btn btn__white btn__bordered btn__icon"
            >
              <span>Latest Projects</span>
              <i className="icon-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopBanner;

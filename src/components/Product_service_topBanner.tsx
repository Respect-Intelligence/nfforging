import { ArrowRight } from "lucide-react";
import React from "react";

function Product_service_topBanner() {
  return (
    <>
      <section
        className="page-title page-title-layout5 bg-overlay bg-overlay-2 bg-parallax bg-img"
        style={{
          backgroundImage: 'url("/images/page-titles/7.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <h1 className="pagetitle__heading">
                Engineered Precision. Delivered with Excellence.
              </h1>
              <p className="pagetitle__desc">
                NF Forgings offers a wide range of high-quality solutions in CRF
                Sections, Foundry components, and Heavy Fabrication. Backed by
                decades of experience and cutting-edge technology, we deliver
                reliable, industry-grade products tailored to your needs.
              </p>
              <a
                href="projects-standard.html"
                className="btn btn__primary btn__icon"
              >
                <span>Latest Projects</span>
                <ArrowRight height={18} />
              </a>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 cta__banner-wrapper d-flex justify-content-end">
              <div
                className="cta__banner bg-img"
                style={{
                  backgroundImage: 'url("/images/backgrounds/1.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              >
                <h5 className="cta__title">
                  A Leading Developer Of First Grade Commercial &amp; Projects!
                </h5>
                <p className="cta__desc">
                  Today Promin has over 4,000 professionals on its payroll All
                  Over The World.
                </p>
                <a href="#" className="btn btn__primary btn__link">
                  <span>Learn More</span> <ArrowRight height={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product_service_topBanner;

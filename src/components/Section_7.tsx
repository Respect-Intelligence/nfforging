import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function Section_7() {
  return (
    <>
      <section className="banner-layout1 p-0">
        <div className="container-fluid col-padding-0 bg-theme">
          <div className="row">
            <div
              className="col-sm-12 col-md-12 col-lg-6 background-banner"
              style={{
                backgroundImage: "url(/images/page-titles/1.jpg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="cta__banner bg-white">
                <h5 className="cta__title">
                  A Leading Developer Of First Grade Commercial & Projects!
                </h5>
                <p className="cta__desc">
                  Today Promin has over 4,000 professionals on its payroll All
                  Over The World.
                </p>
                <Link href="#" className="btn btn__primary btn__link">
                  <span>Learn More</span>{" "}
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
                    Best A Gra de Commercial & Residential Services
                  </h2>
                  <p className="heading__desc">
                    Building bigger, better, faster & stronger products than
                    ever before. We can help you build on your past and prepare
                    for future.
                  </p>
                </div>
                <div className="row fancybox-light">
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="fancybox-item">
                      <div className="fancybox__icon">
                        <i className="icon-welding"></i>
                      </div>
                      <div className="fancybox__content">
                        <h4 className="fancybox__title">
                          Powerfull Product
                          <br /> Strategy
                        </h4>
                        <p className="fancybox__desc">
                          Our facilities meet high security requirements and are
                          certified to the highest local standards.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="fancybox-item">
                      <div className="fancybox__icon">
                        <i className="icon-checklist"></i>
                      </div>
                      <div className="fancybox__content">
                        <h4 className="fancybox__title">
                          Award Winning <br />
                          Projects
                        </h4>
                        <p className="fancybox__desc">
                          Our facilities meet high security requirements and are
                          certified to the highest local standards.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  href="request-quote.html"
                  className="btn btn__white btn__bordered btn__icon box-shadow-none"
                >
                  <span>Request A Quote</span>
                  <ArrowRight height={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section_7;

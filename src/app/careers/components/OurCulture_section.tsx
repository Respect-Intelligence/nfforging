"use client";

import Image from "next/image";
import { LucideArrowRight } from "lucide-react";

export default function OurCulture_section() {
  return (
    <section
      className="about-layout1 py-0 bg-img"
      style={{
        backgroundImage: 'url("/images/backgrounds/2.png")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 offset-xl-1">
            <div className="inner-wrapper">
              <div className="heading-layout2 mb-30">
                <span className="heading__subtitle">
                  Leading The Way In Building And Civil Construction
                </span>
                <h2 className="heading__title">
                  Ready to Bring Bigger, Better, Faster And Stronger Projects
                  Than Ever Before!!
                </h2>
                <p className="heading__desc mb-30 mt-40">
                  Yet those that embrace change are thriving, building bigger,
                  better, faster, and stronger products than ever before. You
                  are helping to lead the charge; we can help you build on your
                  past and prepare future.
                </p>
                <p className="heading__desc">
                  The world is changing faster than ever before, Promina
                  industries are threatened as technology disrupts and software.
                </p>
              </div>

              <a
                href="projects-standard.html"
                className="btn btn__secondary btn__icon mt-20 mb-20"
              >
                <span>Latest Projects</span>
                <LucideArrowRight size={16} className="ms-1" />
              </a>
            </div>
          </div>

          <div className="col-sm-12 col-md-10 col-lg-8 col-xl-5">
            <div className="about__img position-relative">
              <Image
                src="/images/about/4.jpg"
                alt="about"
                width={600}
                height={500}
                className="img-fluid"
              />
              <div className="cta__banner">
                <h5 className="cta__title color-white">
                  A Leading Developer Of First Grade Commercial &amp; Projects!
                </h5>
                <a href="#" className="btn btn__primary btn__link color-white">
                  <span>Learn More</span>
                  <span className="circleIcon ms-2 ">
                    <LucideArrowRight size={16} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

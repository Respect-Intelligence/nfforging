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
              <div className="heading-layout2 mb-30" data-aos="fade-right">
                <span className="heading__subtitle">
                  A Culture Built on Integrity, Innovation, and Inclusivity
                </span>
                <h2 className="heading__title">
                  Empowering Excellence Together
                </h2>
                <p className="heading__desc mb-30 mt-40">
                  At NF Forgings Pvt. Ltd., we believe that our people are the
                  cornerstone of our success. Our leadership style emphasizes
                  ethical behavior, critical thinking, and adherence to
                  organizational standards. We foster an environment where
                  employees are empowered to make decisions, take calculated
                  risks, and are supported to nurture success.
                </p>
                <p className="heading__desc">
                  Our HR philosophy is deeply rooted in our corporate culture
                  and values. We provide information and resources to support
                  managers in making the right decisions at the right time, and
                  we assist employees in reaching their goals. We continually
                  seek to improve our services and processes, ensuring that our
                  team knows exactly what is expected of them.
                </p>
              </div>

              <a
                href="#applyForm"
                className="btn btn__secondary btn__icon mt-20 mb-20"
                data-aos="fade-down"
              >
                <span>Apply Now</span>
                <LucideArrowRight size={16} className="ms-1" />
              </a>
            </div>
          </div>

          <div className="col-sm-12 col-md-10 col-lg-8 col-xl-5">
            <div
              className="about__img position-relative"
              data-aos="zoom-in-left"
            >
              <Image
                src="/images/careers/culture.jpg"
                alt="about"
                width={600}
                height={500}
                className="img-fluid"
              />
              <div className="cta__banner">
                <h5 className="cta__title color-white">
                  Forging a Future Together
                </h5>
                <a
                  href="#JobsSection"
                  className="btn btn__primary btn__link color-white"
                >
                  <span>Explore Jobs</span>
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

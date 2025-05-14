import { ArrowRight } from "lucide-react";

export default function HighlightSection_2() {
  const companyStats = [
    {
      title: "25+ Years of Experience",
      bgIconSrc: "/images/highlight_2/review.svg",
      description:
        "With over a quarter century of industry expertise, NF Forgings has continually set benchmarks in engineering excellence through consistent innovation and a dedicated team.",
    },
    {
      title: "68+ Projects Per Year",
      bgIconSrc: "/images/highlight_2/project.svg",
      description:
        "Handling more than 68 projects annually, we bring precision, efficiency, and commitment to every client, ensuring timely and high-quality delivery across all sectors.",
    },
    {
      title: "500+ Happy Clients",
      bgIconSrc: "/images/highlight_2/clients.svg",
      description:
        "Our success is measured by our clients’ satisfaction. Over 500 businesses trust us for reliable, high-performance engineering solutions tailored to their needs.",
    },
  ];

  return (
    <>
      <section className="contact-info-layout2 pt-60 pb-0">
        <div className="container">
          <div className="row ">
            {/* <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="contact-info-box d-flex align-items-center">
                <div className="contact__info-box-icon">
                  <i className="icon-envelope"></i>
                </div>
                <div className="contact__info-box-content">
                  <h4 className="contact__info-box-title">Quick Contact</h4>
                  <ul className="contact__info-list list-unstyled">
                    <li>
                      Email:{" "}
                      <a href="mailto:Promina@7oroof.com">Promina@7oroof.com</a>
                    </li>
                    <li>
                      Phone: <a href="tel:5565454117">55 654 541 17</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="contact-info-box d-flex align-items-center">
                <div className="contact__info-box-icon">
                  <i className="icon-location"></i>
                </div>
                <div className="contact__info-box-content">
                  <h4 className="contact__info-box-title">Our Location</h4>
                  <ul className="contact__info-list list-unstyled">
                    <li>2307 Beverley Rd Brooklyn, New York 11226 US.</li>
                  </ul>
                </div>
              </div>
            </div> */}

            {companyStats.map(({ title, description, bgIconSrc }, index) => {
              return (
                <div className="col-sm-12 col-md-4 col-lg-4" key={index}>
                  <div className="cta__banner">
                    <img
                      src={bgIconSrc}
                      alt="Decorative Icon"
                      className="bg-icon"
                    />
                    <h5 className="cta__title color-white">{title}</h5>
                    <p className="cta__desc color-gray">{description}</p>
                    <a
                      href="services.html"
                      className="btn btn__primary btn__link color-white"
                    >
                      <span>Learn More</span>
                      <span className="right_arrow_btn_svg">
                        <ArrowRight />
                      </span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

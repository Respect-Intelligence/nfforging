import { Check } from "lucide-react";

export default function SecondUnitAboutSection({
  className,
}: {
  className?: string;
}) {
  return (
    <>
      <section
        className={`banner-layout2 bg-overlay bg-parallax bg-img cirtification-section ${
          className || ""
        }  `}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="row">
                <div className="col-lg-6">
                  <div
                    className="heading-layout2 heading-light mb-50"
                    data-aos="fade-right"
                  >
                    <span className="heading__subtitle">
                      Our second unit at Tulsiberia (Unit-II)
                    </span>
                    <h2 className="heading__title">
                      which is on the verge of getting commissioned will be
                      dedicated to manufacture ISO Shipping Containers and
                      critical engineering assignments.
                    </h2>
                  </div>
                </div>
                <div className="col-lg-6">
                  <ul
                    className="list-items list-items-white list-unstyled mb-40"
                    data-aos="fade-down"
                  >
                    <li>
                      <div>
                        <b>Unit-II will be equipped with:</b> <br />
                      </div>
                    </li>
                    <li>
                      <span className="checkIcon">
                        <Check />
                      </span>{" "}
                      <div>
                        CNC machines for steel cutting, drilling / punching,
                        welding with CNC and robotic controls etc.
                      </div>
                    </li>
                    <li>
                      <span className="checkIcon">
                        <Check />
                      </span>
                      <div>
                        Most modern fixtures and manipulators for avoiding
                        vertical and overhead welding.
                      </div>
                    </li>
                    <li>
                      <span className="checkIcon">
                        <Check />
                      </span>
                      <div>
                        Appropriate systems for surface preparation and painting
                        which will ensure compliance with the most stringent
                        performance requirements from segments like Indian navy
                        and other defence establishments, merchant navy and
                        other marine applications like Shipping Containers,
                        bullet trains etc etc
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="info-slider-wrapper d-flex justify-content-end">
                <div className="info__slider">
                  <img src="/images/cirtificates.png" alt="" srcset="" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

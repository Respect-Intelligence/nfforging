import { Check } from "lucide-react";

export default function CirtificationSection(params: type) {
  return (
    <>
      <section
        className="banner-layout2 bg-overlay bg-parallax bg-img cirtification-section"
        // style={{
        //   backgroundImage: 'url("images/banner4.jpg")',
        //   backgroundSize: "cover",
        //   backgroundPosition: "center center",
        // }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="row">
                <div className="col-lg-6">
                  <div className="heading-layout2 heading-light mb-50">
                    <span className="heading__subtitle">
                      Our Recognized Certifications
                    </span>
                    <h2 className="heading__title">
                      Endorsed by Industry Authorities for Quality, Safety,
                      andCompliance
                    </h2>
                  </div>
                </div>
                <div className="col-lg-6">
                  <ul className="list-items list-items-white list-unstyled mb-40">
                    <li>
                      <span className="checkIcon">
                        <Check />
                      </span>{" "}
                      <div>
                        <b>ISO Certification</b> <br />
                        International standards compliance ensuring excellence
                        in quality management systems and operational
                        efficiency.
                      </div>
                    </li>
                    <li>
                      <span className="checkIcon">
                        <Check />
                      </span>
                      <div>
                        <b> RDSO Certification</b> <br />
                        Approved by the Research Designs and Standards
                        Organisation for meeting stringent railway
                        infrastructure standards.
                      </div>
                    </li>
                    <li>
                      <span className="checkIcon">
                        <Check />
                      </span>
                      <div>
                        <b>Bureau of Indian Standards (BIS)</b> <br />
                        Certified for adherence to national safety, quality, and
                        performance benchmarks across all manufacturing
                        processes.
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

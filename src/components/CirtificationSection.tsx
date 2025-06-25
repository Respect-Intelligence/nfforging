import { Check } from "lucide-react";

export default function CirtificationSection({
  className,
}: {
  className?: string;
}) {
  const certifications = [
    {
      image: "/images/cirtificates/iso.png",
      title: "ISO Certification",
      description:
        "International standards compliance ensuring excellence in quality management systems and operational efficiency.",
    },
    {
      image: "/images/cirtificates/rdso.png",
      title: "RDSO Certification",
      description:
        "Approved by the Research Designs and Standards Organisation for meeting stringent railway infrastructure standards.",
    },
    {
      image: "/images/cirtificates/bis.png",
      title: "Bureau of Indian Standards (BIS)",
      description:
        "Certified for adherence to national safety, quality, and performance benchmarks across all manufacturing processes.",
    },
  ];

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
                    data-aos="fade-down"
                    data-aos-duration="300"
                  >
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
                    {certifications.map((cert, index) => (
                      <li
                        key={index}
                        data-aos-delay={(index + 1) * 300}
                        data-aos="fade-left"
                        data-aos-duration="300"
                      >
                        <div className="cirtification-logo">
                          <img src={cert.image} alt={cert.title} />
                        </div>
                        <div>
                          <b>{cert.title}</b> <br />
                          {cert.description}
                        </div>
                      </li>
                    ))}
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

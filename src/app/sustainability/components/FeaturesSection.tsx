// components/FeaturesSection.tsx

import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    image: "/images/features/1.jpg",
    title: "Architecture <br> & Building",
    description:
      "Architecture is both the process and the product of planning, and constructing buildings or any other structures.",
    items: [
      "Cognitive architecture",
      "Computer architecture",
      "Enterprise architecture",
    ],
    link: "/services-single-service",
  },
  {
    image: "/images/features/2.jpg",
    title: "Construction <br> Consultants",
    description:
      "Given the increasing complexity of many construction projects it is becoming more common that a consultant.",
    items: [
      "Construction manager",
      "Contract administrator",
      "Consulting engineer",
    ],
    link: "/services-single-service",
  },
  {
    image: "/images/features/3.jpg",
    title: "Construction <br> Management",
    description:
      "Professional service uses specialized, project management techniques to oversee the planning, design.",
    items: [
      "Design, bid, build contracts",
      "Planning and scheduling",
      "Design-build contracts",
    ],
    link: "/services-single-service",
  },
];

export default function FeaturesSection() {
  return (
    <section className="features-layout1 pb-0">
      <div className="container col-padding-0">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div className="heading text-center mb-50">
              <span className="heading__subtitle">
                The Best A Grade Commercial &amp; Residential Services
              </span>
              <h2 className="heading__title">
                High Quality Construction Solutions For Residentials &amp;
                Industries!
              </h2>
            </div>
          </div>
        </div>

        <div className="row features-wrapper">
          {features.map((feature, index) => (
            <div className="col-sm-12 col-md-4 col-lg-4" key={index}>
              <div className="feature-item">
                <div className="feature__img">
                  <Image
                    src={feature.image}
                    alt="portfolio img"
                    width={600}
                    height={400}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="feature__content">
                  <h4
                    className="feature__title"
                    dangerouslySetInnerHTML={{ __html: feature.title }}
                  />
                  <p className="feature__desc">{feature.description}</p>
                  <ul className="list-items list-items-layout2 list-unstyled mb-30">
                    {feature.items.map((item, i) => (
                      <li key={i}>
                        {" "}
                        <Check size={14} strokeWidth={3} /> {item}
                      </li>
                    ))}
                  </ul>
                  <Link href={feature.link} className="btn btn__secondary">
                    <span>Read More</span>
                    <ArrowRight size={16} className="ms-2" />
                    {/* <span className="circleIcon">
                    </span> */}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

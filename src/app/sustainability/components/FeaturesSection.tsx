// components/FeaturesSection.tsx

import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Cold Roll Forming (CRF)",
    description:
      "Precision-engineered profiles and sections ranging from 0.8mm to 10mm in thickness, tailored for various industrial applications.",
    Points: [
      "Sheet Piles",
      "Solar Module Mounting Solutions",
      "Wagon & Coaches",
      "Pre-Engineered Buildings",
      "Crash Barriers",
    ],
    link: "/crf",
  },
  {
    title: "Foundry Division",
    description:
      "Class 'A' RDSO-certified foundry delivering high-quality castings with advanced molding and melting technologies.",
    Points: [
      "Electric Arc & Induction Furnaces",
      "High-Pressure Molding Line",
      "Automated Sand Plant",
      "Core Shop for CBC Bogie Components",
      "In-house Fettling & Finishing",
    ],
    link: "/foundry",
  },
  {
    title: "Fabrication Services",
    description:
      "Comprehensive fabrication solutions for complex engineering projects, including wagons, coaches, and ISO containers.",
    Points: [
      "Railway Wagons & Coaches",
      "ISO Shipping Containers",
      "Refinery Equipment",
      "Structural Fabrication",
      "Custom Engineering Assignments",
    ],
    link: "/fabrication",
  },
];
export default function FeaturesSection() {
  return (
    <section className="features-layout1 pb-0">
      <div className="container col-padding-0">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div className="heading text-center mb-50">
              <span className="heading__subtitle">Our Core Capabilities</span>
              <h2 className="heading__title">
                Delivering Excellence Across Diverse Engineering Solutions
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
                    {feature.Points.map((item, i) => (
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

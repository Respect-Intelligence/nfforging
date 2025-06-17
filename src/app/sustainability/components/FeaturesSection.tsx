// components/FeaturesSection.tsx

import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// const features = [
//   {
//     title: "Cold Roll Forming (CRF)",
//     image: "/images/sustainability/2 (2).jpg",
//     description:
//       "Precision-engineered profiles and sections ranging from 0.8mm to 10mm in thickness, tailored for various industrial applications.",
//     Points: [
//       "Sheet Piles",
//       "Solar Module Mounting Solutions",
//       "Wagon & Coaches",
//       "Pre-Engineered Buildings",
//       "Crash Barriers",
//     ],
//     link: "/crf",
//   },
//   {
//     title: "Foundry Division",
//     image: "/images/sustainability/2 (3).jpg",
//     description:
//       "Class 'A' RDSO-certified foundry delivering high-quality castings with advanced molding and melting technologies.",
//     Points: [
//       "Electric Arc & Induction Furnaces",
//       "High-Pressure Molding Line",
//       "Automated Sand Plant",
//       "Core Shop for CBC Bogie Components",
//       "In-house Fettling & Finishing",
//     ],
//     link: "/foundry",
//   },
//   {
//     title: "Fabrication Services",
//     image: "/images/sustainability/2 (1).jpg",
//     description:
//       "Comprehensive fabrication solutions for complex engineering projects, including wagons, coaches, and ISO containers.",
//     Points: [
//       "Railway Wagons & Coaches",
//       "ISO Shipping Containers",
//       "Refinery Equipment",
//       "Structural Fabrication",
//       "Custom Engineering Assignments",
//     ],
//     link: "/fabrication",
//   },
// ];

const SustainabilityPillars = [
  {
    title: "Environment",
    image: "/images/sustainability/Environment.jpg",
    description:
      "Focused on minimizing ecological impact through responsible resource management, climate action, and waste reduction strategies.",
    Points: [
      "Materials management",
      "Energy and climate change management",
      "Water and effluent management",
      "Emission and chemical management",
      "Waste and circular economy",
      "Biodiversity management",
      "Sustainable packaging",
    ],
    link: "/sustainability/environment",
  },
  {
    title: "Social",
    image: "/images/sustainability/Social.jpg",
    description:
      "Dedicated to building a diverse, inclusive, and safe work environment while actively contributing to community and employee well-being.",
    Points: [
      "Diversity and inclusion",
      "Talent management",
      "Occupational health and safety",
      "Corporate citizenship",
      "Human rights",
    ],
    link: "/sustainability/social",
  },
  {
    title: "Governance",
    image: "/images/sustainability/Governance.jpg",
    description:
      "Ensuring transparency, ethical operations, and risk management through strong corporate governance and data security practices.",
    Points: [
      "Corporate governance",
      "Ethics, transparency and accountability",
      "Data privacy and security",
      "Policy advocacy",
      "Risk management",
      "Responsible sourcing",
      "Customer relationships management",
      "Product health and safety",
      "Innovation management",
    ],
    link: "/sustainability/governance",
  },
];

export default function FeaturesSection() {
  return (
    <section className="features-layout1 pb-0">
      <div className="container col-padding-0">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-3">
            <div className="heading text-center mb-50">
              <span className="heading__subtitle">
                NF’s Pillars of Sustainability
              </span>
              <h2 className="heading__title">
                A Strategic Framework Driving Environmental Stewardship, Social
                Responsibility, and Ethical Governance
              </h2>
            </div>
          </div>
        </div>

        <div className="row features-wrapper">
          {SustainabilityPillars?.map((feature, index) => (
            <div className="col-sm-12 col-md-4 col-lg-4" key={index}>
              <div className="feature-item">
                <div className="feature__img">
                  <Image
                    src={feature.image}
                    alt="portfolio img"
                    width={600}
                    height={400}
                    // style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="feature__content">
                  <div className="top">
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
                  </div>
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

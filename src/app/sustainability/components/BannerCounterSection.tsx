import { ChartNoAxesCombined, Earth, Users } from "lucide-react";
import React from "react";

const tripleBottomLine = [
  {
    Icon: <Users />,
    title: "PEOPLE",
    subtext: "We support employee well-being and inclusive growth.",
    image: "/images/triple-bottom-line/people.png",
  },
  {
    Icon: <Earth />,
    title: "PLANET",
    subtext: "Committed to sustainable practices and climate care.",
    image: "/images/triple-bottom-line/planet.png",
  },
  {
    Icon: <ChartNoAxesCombined />,
    title: "PROFIT",
    subtext: "Fostering ethical and long-term business value.",
    image: "/images/triple-bottom-line/profit.png",
  },
];

export default function BannerCounterSection() {
  return (
    <section
      className="banner-layout3 bg-overlay bg-parallax mt--130 bg-img pb-5"
      style={{
        backgroundImage: "url(/images/banner5.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="heading-layout2 heading-light mb-50">
              <span className="heading__subtitle">Our Triple Bottom Line</span>
              <h2 className="heading__title">Forging a Greener Future</h2>
            </div>
          </div>
        </div>

        <div className="row counter-light justify-content-center">
          {tripleBottomLine.map(({ title, subtext, image, Icon }, index) => (
            <div className=" col-md-4" key={index}>
              <div className="counter-item d-flex flex-column align-items-center">
                <h4 className="counter d-flex align-items-center gap-3 justify-content-center">
                  {" "}
                  {Icon} {title}
                </h4>
                <p className="counter__desc pe-0 w-10/12">{subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

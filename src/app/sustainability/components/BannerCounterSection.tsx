import React from "react";

const counters = [
  {
    count: "15,000+",
    description: "Trees Planted Around Our Facilities",
  },
  {
    count: "300 MT",
    description: "Monthly Casting Capacity with Eco-Friendly Processes",
  },
  {
    count: "100%",
    description: "In-House Finishing Using Energy-Efficient Equipment",
  },
  {
    count: "3",
    description: "Major Divisions Implementing Sustainable Practices",
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
              <span className="heading__subtitle">
                Sustainability at NF Forgings
              </span>
              <h2 className="heading__title">Forging a Greener Future</h2>
            </div>
          </div>
        </div>

        <div className="row counter-light">
          {counters.map((counter, index) => (
            <div className="col-6 col-sm-3" key={index}>
              <div className="counter-item">
                <h4 className="counter">{counter.count}</h4>
                <p className="counter__desc">{counter.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

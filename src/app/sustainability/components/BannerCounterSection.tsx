import React from "react";

const counters = [
  {
    count: "6,154",
    description: "Projects And Residentials Completed in 2020",
  },
  {
    count: "2,512",
    description: "Qualified Employees And Workers With Us",
  },
  {
    count: "1,784",
    description: "Satisfied Clients We Have Served Globally",
  },
  {
    count: "46",
    description: "Years Of Experience In The Construction Industry",
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
                Numbers Speak For Themselves.
              </span>
              <h2 className="heading__title">
                Building Relationships With Clients All Over The World!
              </h2>
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

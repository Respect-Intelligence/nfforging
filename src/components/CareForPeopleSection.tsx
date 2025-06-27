import React from "react";
import "@/scss/sections/CareForPeopleSection.scss";
import { CareForPeople_stand, opotunityList } from "@/assets/static/data";

function CareForPeopleSection() {
  return (
    <section className="CareForPeopleSection ">
      <div className="container">
        <div className="heading-layout2 mb-30" data-aos="fade-down">
          <span className="heading__subtitle">Care for our People</span>
          <h2 className="heading__title">
            Adhering to the highest labour standards
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="row">
              {CareForPeople_stand?.map(({ iconSrc, title, para }, key) => (
                <div
                  className="col-md-6 "
                  key={key}
                  data-aos="fade-right"
                  data-aos-delay={key * 150}
                >
                  <div className="standard-card">
                    <div className="top">
                      <div className="logo">
                        <img src={iconSrc} alt="" />
                      </div>
                      <div className="card-no">{key + 1}</div>
                    </div>
                    <div className="content">
                      <h4>{title}</h4>
                      <p>{para}</p>
                    </div>
                  </div>
                </div>
              ))}
              <h5 data-aos="fade-down">
                Creating fulfilling career opportunities
              </h5>

              <ul className="opotunityList">
                {opotunityList?.map(({ iconSrc, para }, key) => (
                  <li
                    key={key}
                    data-aos="fade-right"
                    data-aos-delay={key * 150}
                  >
                    <div className="logo">
                      <img src={iconSrc} alt="" />
                    </div>
                    <p>{para}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-5 ">
            <img
              src="/images/careers/Picture4.png"
              alt=""
              data-aos="zoom-in-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareForPeopleSection;

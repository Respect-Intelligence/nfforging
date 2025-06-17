import { teamMembers } from "@/assets/static/data";
import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

function OurTeams_section() {
  return (
    <section className="team-layout2 text-center pb-30 ">
      <div className="container">
        <div className="row">
          <div className="heading-layout2">
            <p className="heading__subtitle">Our Teams</p>
            <h2 className="heading__title">
              Meet the Experts Behind Our Success
            </h2>
          </div>
          {teamMembers.map((member, index) => (
            <div key={index} className="col-sm-6 col-md-6 col-lg-3">
              <div className="member">
                <div className="member__img">
                  <img src={member.image} alt="member img" />
                  <div className="member__hover">
                    <div className="member__content-inner">
                      <ul className="social__icons justify-content-center list-unstyled mb-0">
                        <li>
                          <a href="#">
                            <Facebook />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Instagram />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Twitter />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="member__info">
                  <h5 className="member__name">{member.name}</h5>
                  <p className="member__desc">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeams_section;

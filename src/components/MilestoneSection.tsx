import { milestones } from "@/assets/static/data";
import React from "react";
import "@/scss/sections/milestoneSection.scss";

const MilestoneSection: React.FC = () => {
  return (
    <>
      <section className="milestone-section">
        <div className="container">
          {/* Header */}
          <div className="row">
            <div className="col-12">
              <div className="heading text-center mb-50">
                <span className="heading__subtitle">Our Milestones</span>
                <h2 className="heading__title">
                  Long legacy of delivering excellence <br />
                  AS GOOD AS IT GETS OUR BIGGEST MILESTONES
                </h2>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="row">
            <div className="col-12">
              <div className="timeline-container">
                {/* Milestone Items */}
                <div className="milestones-wrapper">
                  {milestones.map((milestone, index) => (
                    <div
                      key={index}
                      className={`milestone-item ${
                        milestone.isLeft ? "milestone-left" : "milestone-right"
                      }`}
                    >
                      {/* Milestone Card */}
                      <div className="milestone-card">
                        {/* Year Badge */}
                        <div className="year-badge">{milestone.year}</div>

                        {/* Content */}
                        <div className="milestone-content">
                          <h3 className="milestone-card-title">
                            {milestone.title}
                          </h3>
                          <p className="milestone-description">
                            {milestone.description}
                          </p>
                        </div>

                        {/* Arrow pointing to road */}
                        <div className="milestone-arrow"></div>
                        {/* red dot */}
                      </div>
                      <div className="red-dot"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MilestoneSection;

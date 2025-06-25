// components/JobDetailsSection.tsx
import React from "react";
import "@/scss/sections/JobDetailsSection.scss";
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  Calendar,
  Briefcase,
  GraduationCap,
  Star,
  CheckCircle,
  Award,
  Sparkles,
  Hourglass,
} from "lucide-react";
import { JobDetailsProps } from "@/assets/static/types";

const JobDetailsSection: React.FC<JobDetailsProps> = ({
  jobTitle,
  company,
  description,
  responsibilities,
  //   preferredSkills,
  //   requiredSkills,
  experience,
  location,
  jobType,
  salary,
  postedDate,
  applicationDeadline,
  preferedCadidate,
}) => {
  return (
    <div className="job-details-section">
      <div className="container">
        {/* Job Header */}
        <div className="job-header">
          <div className="job-title-area">
            <h1 className="job-title">{jobTitle}</h1>
            <p className="company-name">{company}</p>
          </div>

          <div className="job-meta">
            <div className="meta-item">
              <MapPin className="meta-icon" />
              <span>{location}</span>
            </div>
            <div className="meta-item">
              <Clock className="meta-icon" />
              <span>{jobType}</span>
            </div>
            <div className="meta-item">
              <Briefcase className="meta-icon" />
              <span>{experience}</span>
            </div>
            {salary && (
              <div className="meta-item">
                <DollarSign className="meta-icon" />
                <span>{salary}</span>
              </div>
            )}
          </div>
        </div>

        {/* Job Content */}
        <div className="job-content">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8 col-md-12">
              {/* Job Description */}
              <div className="content-section">
                <h2 className="section-title">Job Description</h2>
                <p className="description-text">{description}</p>
              </div>

              {/* Responsibilities */}
              <div className="content-section">
                <h2 className="section-title">Key Responsibilities</h2>
                <ul className="responsibilities-list">
                  {responsibilities.map((responsibility, index) => (
                    <li key={index} className="responsibility-item">
                      <CheckCircle className="list-icon" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Required Skills */}
              {/* <div className="content-section">
                <h2 className="section-title">
                  <Star className="section-icon" />
                  Required Skills
                </h2>
                <div className="skills-grid">
                  {requiredSkills.map((skill, index) => (
                    <div key={index} className="skill-tag required-skill">
                      <i className="bi bi-check-circle-fill skill-check"></i>
                      {skill}
                    </div>
                  ))}
                </div>
              </div> */}

              {/* Preferred Skills */}
              {/* <div className="content-section">
                <h2 className="section-title">
                  <Award className="section-icon" />
                  Preferred Skills
                </h2>
                <div className="skills-grid">
                  {preferredSkills.map((skill, index) => (
                    <div key={index} className="skill-tag preferred-skill">
                      <i className="bi bi-plus-circle skill-plus"></i>
                      {skill}
                    </div>
                  ))}
                </div>
              </div> */}

              {/* Benefits */}
              {preferedCadidate && preferedCadidate.length > 0 && (
                <div className="content-section">
                  <h2 className="section-title">Preferred Candidates</h2>
                  <div className="benefits-grid">
                    {preferedCadidate.map((text, index) => (
                      <div key={index} className="benefit-item">
                        <Sparkles className="flex-shrink-0 benefit-icon" />
                        <span>{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 col-md-12">
              <div className="job-sidebar">
                {/* Quick Info */}
                <div className="sidebar-card">
                  <h3 className="sidebar-title">Job Information</h3>
                  <div className="info-list">
                    <div className="info-item">
                      <GraduationCap className="info-icon" />
                      <div className="info-content">
                        <span className="info-label">Experience Level</span>
                        <span className="info-value">{experience}</span>
                      </div>
                    </div>
                    <div className="info-item">
                      <Users className="info-icon" />
                      <div className="info-content">
                        <span className="info-label">Job Type</span>
                        <span className="info-value">{jobType}</span>
                      </div>
                    </div>
                    <div className="info-item">
                      <Calendar className="info-icon" />
                      <div className="info-content">
                        <span className="info-label">Posted Date</span>
                        <span className="info-value">{postedDate}</span>
                      </div>
                    </div>
                    {applicationDeadline && (
                      <div className="info-item">
                        <Hourglass className="info-icon" />
                        <div className="info-content">
                          <span className="info-label">
                            Application Deadline
                          </span>
                          <span className="info-value">
                            {applicationDeadline}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Apply Button */}
                {/* <div className="sidebar-card">
                  <button className="apply-btn">
                    <i className="bi bi-send-fill"></i>
                    Apply Now
                  </button>
                  <button className="save-btn">
                    <i className="bi bi-bookmark"></i>
                    Save Job
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsSection;

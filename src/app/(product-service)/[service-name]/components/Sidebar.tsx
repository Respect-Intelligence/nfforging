import Link from "next/link";
import React from "react";

function Sidebar() {
  const services = [
    "Architecture & building",
    "Construction Consultants",
    "Construction Management",
    "Tiling And Painting",
    "Planning And Scheduling",
    "Design Build Contracts",
  ];
  return (
    <>
      <aside className="sidebar mb-30">
        <div className="widget widget-categories">
          <h5 className="widget__title">Services</h5>
          <div className="widget-content">
            <ul className="list-unstyled">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={`/service/${encodeURIComponent(
                      service.toLowerCase().replace(/\s+/g, "-")
                    )}`}
                    className={index === 0 ? "active" : ""}
                  >
                    <span>{service}</span>
                    <i className="icon-arrow-right"></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="widget widget-help bg-theme">
          <div className="widget__content">
            <h5>Dedicated Customer Teams &amp; Agile Services</h5>
            <p>
              Today Promin has over 4,000 professionals on its payroll All Over
              The World.
            </p>
            <Link
              href="/request-quote.html"
              className="btn btn__white btn__link"
            >
              <span className="color-white">Get A Quote</span>{" "}
              <i className="icon-arrow-right"></i>
            </Link>
          </div>
        </div>

        <div className="widget widget-download">
          <h5 className="widget__title">Download</h5>
          <div className="widget__content">
            <a href="#" className="btn btn__primary btn__block mb-20">
              <span>Company Report 2020</span>
              <img src="assets/images/icons/pdf.png" alt="pdf" />
            </a>
            <a href="#" className="btn btn__secondary btn__block btn__hover3">
              <span>Company Brochure</span>
              <img src="assets/images/icons/pdf.png" alt="pdf" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;

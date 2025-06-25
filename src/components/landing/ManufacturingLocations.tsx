import React from "react";
import "@/scss/sections/manufacturingLocations.scss";
import { Cog, Map, MapPin } from "lucide-react";
import { manufacturingLocationsArr } from "@/assets/static/data";

function ManufacturingLocations() {
  return (
    <>
      <section className="manufacturingLocations">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-7"
              data-aos="fade-right"
              data-aos-duration="300"
            >
              <div className="d-flex flex-col h-100">
                <div className="heading-layout2">
                  <p className="heading__subtitle">
                    Manufacturing in West Bengal
                  </p>
                  <h2 className="heading__title">
                    Our key production sites across the state.
                  </h2>
                </div>
                <div className="row mt-5 g-3">
                  {manufacturingLocationsArr?.map(
                    (
                      { companyName, establishedYear, location, products },
                      key
                    ) => (
                      <div
                        className=" col-lg-6"
                        key={key}
                        data-aos="fade-down"
                        data-aos-duration="300"
                        data-aos-delay={(key + 1) * 300}
                      >
                        <div className="location-card">
                          <div className="card-header">
                            <div className="card-number">{key + 1}</div>
                            <h2 className="company-name">{companyName}</h2>
                          </div>

                          <div className="card-body">
                            <div className="detail-section">
                              <div className="detail-item d-flex align-items-start">
                                <div className="detail-label">
                                  <Cog />
                                  Product:
                                </div>
                                <div className="detail-value product-value">
                                  {products?.map((item, i) => (
                                    <span key={i}>{item}</span>
                                  ))}
                                </div>
                              </div>

                              <div className="detail-item d-flex">
                                <div className="detail-label mb-0">
                                  <Map />
                                  Location:
                                </div>
                                <div className="detail-value  location-value">
                                  {/* <MapPin /> */}
                                  {location}
                                </div>
                              </div>

                              {/* <div className="detail-item">
                          <div className="detail-label">
                            <i className="fas fa-calendar-alt"></i>
                            Established
                          </div>
                          <div className="detail-value">
                            <div className="year-badge">
                              <i className="fas fa-star"></i>
                              1967
                            </div>
                          </div>
                        </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="mapImg-wraper flex-grow-1">
                <img src="/images/home3/Map.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ManufacturingLocations;

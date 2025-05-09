export default function Section_2() {
  return (
    <>
      <section className="services-layout2 pt-120 bg-gray">
        <div
          className="services-bg bg-img"
          // style="background-image: url(&quot;assets/images/backgrounds/map.png&quot;); background-size: cover; background-position: center center;"
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
              <div className="heading text-center mb-40">
                <span className="heading__subtitle">
                  The Best A Grade Commercial &amp; Residential Services
                </span>
                <h2 className="heading__title">
                  High Quality Construction Solutions For Residentials &amp;
                  Industries!
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="service-item">
                <div className="service__content">
                  <div className="service__icon">
                    <i className="icon-brick-wall"></i>
                  </div>
                  <h4 className="service__title">
                    Architecture <br /> &amp; Building
                  </h4>
                  <p className="service__desc">
                    Architecture is both the process and the product of
                    planning, and constructing buildings or any other
                    structures.
                  </p>
                  <a
                    href="services-single-service.html"
                    className="btn btn__secondary btn__link"
                  >
                    <span>Read More</span>
                    <i className="icon-arrow-right"></i>
                  </a>
                </div>
                <div
                  className="service__overlay bg-overlay bg-overlay-theme bg-img"
                  // style="background-image: url(&quot;assets/images/services/service-overlay.png&quot;); background-size: cover; background-position: center center;"
                ></div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="service-item">
                <div className="service__content">
                  <div className="service__icon">
                    <i className="icon-engineer3"></i>
                  </div>
                  <h4 className="service__title">
                    Construction <br /> Consultants
                  </h4>
                  <p className="service__desc">
                    Given the increasing complexity of many construction
                    projects it is becoming more common that a consultant.
                  </p>
                  <a
                    href="services-single-service.html"
                    className="btn btn__secondary btn__link"
                  >
                    <span>Read More</span>
                    <i className="icon-arrow-right"></i>
                  </a>
                </div>
                <div
                  className="service__overlay bg-overlay bg-overlay-theme bg-img"
                  // style="background-image: url(&quot;assets/images/services/service-overlay.png&quot;); background-size: cover; background-position: center center;"
                ></div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="service-item">
                <div className="service__content">
                  <div className="service__icon">
                    <i className="icon-building"></i>
                  </div>
                  <h4 className="service__title">
                    Construction
                    <br /> Management
                  </h4>
                  <p className="service__desc">
                    Professional service uses specialized, project management
                    techniques to oversee the planning, design.
                  </p>
                  <a
                    href="services-single-service.html"
                    className="btn btn__secondary btn__link"
                  >
                    <span>Read More</span>
                    <i className="icon-arrow-right"></i>
                  </a>
                </div>
                <div
                  className="service__overlay bg-overlay bg-overlay-theme bg-img"
                  // style="background-image: url(&quot;assets/images/services/service-overlay.png&quot;); background-size: cover; background-position: center center;"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 text-center">
            <p className="text__link">
              Offering high quality construction solutions.{" "}
              <a href="contacs.html">Build Your Dream Now!</a>
            </p>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
}

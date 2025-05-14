export default function TestimonialSection() {
  return (
    <>
      <section className="testimonials testimonials-layout1 extra-padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="heading">
                <h2 className="heading__title color-theme">
                  What Our Clients Say!
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="testimonials-wrapper">
                <div className="slider-nav slick-initialized slick-slider">
                  <div
                    className="slick-list draggable"
                    style={{ padding: "0px 50px" }}
                  >
                    <div
                      className="slick-track"
                      style={{
                        opacity: 1,
                        width: "720px",
                        transform: "translate3d(-160px, 0px, 0px)",
                      }}
                    >
                      <div
                        className="slick__nav-item slick-slide slick-cloned"
                        data-slick-index="-3"
                        style={{ width: "80px" }}
                      >
                        <span className="testimonial__thumb">
                          <img
                            src="/assets/images/testimonials/thumbs/1.jpg"
                            alt="author thumb"
                          />
                        </span>
                        <span className="testimonial__meta">
                          <span className="testimonial__meta-title">
                            John Peter
                          </span>
                          <span className="testimonial__meta-desc">
                            7oroof Inc
                          </span>
                        </span>
                      </div>
                      <div
                        className="slick__nav-item slick-slide slick-cloned"
                        data-slick-index="-2"
                        style={{ width: "80px" }}
                      >
                        <span className="testimonial__thumb">
                          <img
                            src="/assets/images/testimonials/thumbs/2.jpg"
                            alt="author thumb"
                          />
                        </span>
                        <span className="testimonial__meta">
                          <span className="testimonial__meta-title">
                            Sami Wade
                          </span>
                          <span className="testimonial__meta-desc">
                            Trustry
                          </span>
                        </span>
                      </div>
                      <div
                        className="slick__nav-item slick-slide slick-cloned"
                        data-slick-index="-1"
                        style={{ width: "80px" }}
                      >
                        <span className="testimonial__thumb">
                          <img
                            src="/assets/images/testimonials/thumbs/3.jpg"
                            alt="author thumb"
                          />
                        </span>
                        <span className="testimonial__meta">
                          <span className="testimonial__meta-title">
                            Sami Wade
                          </span>
                          <span className="testimonial__meta-desc">
                            Trustry
                          </span>
                        </span>
                      </div>
                      <div
                        className="slick__nav-item slick-slide slick-current slick-active slick-center"
                        data-slick-index="0"
                        style={{ width: "80px" }}
                      >
                        <span className="testimonial__thumb">
                          <img
                            src="/assets/images/testimonials/thumbs/1.jpg"
                            alt="author thumb"
                          />
                        </span>
                        <span className="testimonial__meta">
                          <span className="testimonial__meta-title">
                            John Peter
                          </span>
                          <span className="testimonial__meta-desc">
                            7oroof Inc
                          </span>
                        </span>
                      </div>
                      <div
                        className="slick__nav-item slick-slide slick-active"
                        data-slick-index="1"
                        style={{ width: "80px" }}
                      >
                        <span className="testimonial__thumb">
                          <img
                            src="/assets/images/testimonials/thumbs/2.jpg"
                            alt="author thumb"
                          />
                        </span>
                        <span className="testimonial__meta">
                          <span className="testimonial__meta-title">
                            Sami Wade
                          </span>
                          <span className="testimonial__meta-desc">
                            Trustry
                          </span>
                        </span>
                      </div>
                      <div
                        className="slick__nav-item slick-slide"
                        data-slick-index="2"
                        style={{ width: "80px" }}
                      >
                        <span className="testimonial__thumb">
                          <img
                            src="/assets/images/testimonials/thumbs/3.jpg"
                            alt="author thumb"
                          />
                        </span>
                        <span className="testimonial__meta">
                          <span className="testimonial__meta-title">
                            Sami Wade
                          </span>
                          <span className="testimonial__meta-desc">
                            Trustry
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="slider-with-navs slick-initialized slick-slider slick-dotted">
                  <div className="slick-list draggable">
                    <div
                      className="slick-track"
                      style={{ opacity: 1, width: "2550px" }}
                    >
                      <div
                        className="testimonial-item slick-slide slick-current slick-active"
                        data-slick-index="0"
                        style={{ width: "850px" }}
                      >
                        <div className="testimonial__content">
                          <p className="testimonial__desc">
                            They are the best and expertly trained team members
                            who take the extra step and go the extra mile, all
                            to fulfill our promise to deliver innovative and
                            dynamic solutions to our customers to fit the needs
                            of a rapidly changing global environment.
                          </p>
                        </div>
                      </div>
                      <div
                        className="testimonial-item slick-slide"
                        data-slick-index="1"
                        style={{ width: "850px" }}
                      >
                        <div className="testimonial__content">
                          <p className="testimonial__desc">
                            All to fulfill our promise to deliver innovative and
                            dynamic solutions to our customers to fit the needs
                            of a rapidly changing global environment. They are
                            the best and expertly trained team members who take
                            the extra step and go the extra mile.
                          </p>
                        </div>
                      </div>
                      <div
                        className="testimonial-item slick-slide"
                        data-slick-index="2"
                        style={{ width: "850px" }}
                      >
                        <div className="testimonial__content">
                          <p className="testimonial__desc">
                            They are the best and expertly trained team members
                            who take the extra step and go the extra mile, all
                            to fulfill our promise to deliver innovative and
                            dynamic solutions to our customers to fit the needs
                            of a rapidly changing global environment.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="slick-dots" role="tablist">
                    <li className="slick-active" role="presentation">
                      <button
                        type="button"
                        role="tab"
                        aria-controls="slick-slide50"
                        aria-label="1 of 3"
                        aria-selected="true"
                      >
                        1
                      </button>
                    </li>
                    <li role="presentation">
                      <button
                        type="button"
                        role="tab"
                        aria-controls="slick-slide51"
                        aria-label="2 of 3"
                      >
                        2
                      </button>
                    </li>
                    <li role="presentation">
                      <button
                        type="button"
                        role="tab"
                        aria-controls="slick-slide52"
                        aria-label="3 of 3"
                      >
                        3
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

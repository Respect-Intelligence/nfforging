import { Play } from "lucide-react";

export default function Section_3() {
  let highlightsData = [
    {
      img: "/images/highlights/employment.png",
      count: 25,
      title: "Experience",
      subTitle: "Years of Experience",
      para: "Delivering excellence through 25 years of industry expertise.",
    },
    {
      img: "/images/highlights/project-management.png",
      count: 68,
      title: "Projects",
      subTitle: "Projects per Year",
      para: "Consistently managing 60+ projects annually with precision and quality.",
    },
    {
      img: "/images/highlights/boxes.png",
      count: "23K",
      title: "Products",
      subTitle: "Products per Month",
      para: "Manufacturing over 23,000 high-quality products every month.",
    },
    {
      img: "/images/highlights/client.png",
      count: 500,
      title: "Clients",
      subTitle: "Satisfied Clients",
      para: "Trusted by 500+ satisfied clients across various industries.",
    },
  ];

  return (
    <>
      {/* <section className="banner-layout4 mt--100 pb-0">
        <div className="container-fluid col-padding-0">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="inner-padding bg-theme ">
                <div className="heading-layout2 heading-light mb-40">
                  <p className="heading__subtitle">
                    World's Leading Industry Corporation!
                  </p>
                  <h2 className="heading__title">
                    Best A Gra de Commercial &amp; Residential Services
                  </h2>
                  <p className="heading__desc">
                    The world is changing faster than ever before, business is
                    no exception, yet those that embrace change are thriving,
                    building bigger, better, faster &amp; stronger products than
                    ever before. We can help you build on your past and prepare
                    for future.
                  </p>
                </div>
                <div className="row fancybox-light">
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="fancybox-item">
                      <div className="fancybox__icon">
                        <i className="icon-welding"></i>
                      </div>
                      <div className="fancybox__content">
                        <h4 className="fancybox__title">
                          Powerfull Product
                          <br /> Strategy
                        </h4>
                        <p className="fancybox__desc">
                          Our facilities meet high security requirements and are
                          certified to the highest local standards.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="fancybox-item">
                      <div className="fancybox__icon">
                        <i className="icon-checklist"></i>
                      </div>
                      <div className="fancybox__content">
                        <h4 className="fancybox__title">
                          Award Winning <br />
                          Projects{" "}
                        </h4>
                        <p className="fancybox__desc">
                          Our facilities meet high security requirements and are
                          certified to the highest local standards.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-12 col-md-12 col-lg-12 col-xl-6 background-banner bg-img"
              //   style='background-image: url("assets/images/banners/2.jpg"); background-size: cover; background-position: center center;'
            >
              <div className="video__box">
                <a
                  className="video__btn video__btn-white popup-video"
                  href="https://www.youtube.com/watch?v=nrJtHemSPW4"
                >
                  <div className="video__player">
                    <span className="video__player-animation"></span>
                    <span className="video__player-animation video__player-animation-2"></span>
                    <i className="fa fa-play"></i>
                  </div>
                </a>
                <div className="video__box-text">
                  <span className="color-white">Watch Our Video!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="banner-layout4 mt--100 pb-0">
        <div className="container-fluid col-padding-0">
          <div className="row">
            {/* Left Content */}
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="inner-padding bg-theme">
                <div className="heading-layout2 heading-light mb-40">
                  <p className="heading__subtitle">
                    Providing Robust Engineering Solutions
                  </p>
                  <h2 className="heading__title">
                    NF Forgings Private Limited
                  </h2>
                  <p className="heading__desc">
                    A quarter century ago, our founding father Mr. Murari Lal
                    Dhanuka had sown a small seed which, over the years, has
                    grown into a behemoth known as NF Forgings. NF Forgings
                    Private Limited is a flagship of Lal Baba group commanding
                    market leadership in Foundry, Forming and Fabrication. Money
                    can buy machines but at NF, we have always believed that the
                    men behind the machine are more important. Apart from
                    machines, over the past few decades, we have heavily
                    invested into and nurtured an able, experienced and
                    qualified team to help us achieve the highest levels of
                    excellence.
                  </p>
                </div>

                <div className="row fancybox-light">
                  {highlightsData.map(
                    ({ title, subTitle, img, count, para }, index) => {
                      return (
                        <div className="col-sm-6 col-md-6 col-lg-6" key={index}>
                          <div className="fancybox-item">
                            <div className="fancybox__icon">
                              <i className="icon-calendar"></i>
                            </div>
                            <div className="fancybox__content">
                              <h4 className="fancybox__title">
                                {count}+ {subTitle}
                              </h4>
                              <p className="fancybox__desc">{para}</p>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  )}
                  {/* <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="fancybox-item">
                      <div className="fancybox__icon">
                        <i className="icon-calendar"></i>
                      </div>
                      <div className="fancybox__content">
                        <h4 className="fancybox__title">
                          1+ Years of Experience
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="fancybox-item">
                      <div className="fancybox__icon">
                        <i className="icon-folder"></i>
                      </div>
                      <div className="fancybox__content">
                        <h4 className="fancybox__title">
                          4+ Projects Per Year
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="fancybox-item">
                      <div className="fancybox__icon">
                        <i className="icon-box"></i>
                      </div>
                      <div className="fancybox__content">
                        <h4 className="fancybox__title">
                          1K+ Products Per Month
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="fancybox-item">
                      <div className="fancybox__icon">
                        <i className="icon-smile"></i>
                      </div>
                      <div className="fancybox__content">
                        <h4 className="fancybox__title">35+ Happy Clients</h4>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Right Banner / Video */}
            <div
              className="col-sm-12 col-md-12 col-lg-12 col-xl-6 background-banner bg-img"
              style={{
                backgroundImage: 'url("/images/banner3.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className="video__box">
                <a
                  className="video__btn video__btn-white popup-video"
                  href="https://www.youtube.com/watch?v=nrJtHemSPW4"
                >
                  <div className="video__player">
                    <span className="video__player-animation"></span>
                    <span className="video__player-animation video__player-animation-2"></span>
                    <Play strokeWidth={2.25} />
                  </div>
                </a>
                <div className="video__box-text">
                  <span className="color-white">Watch Our Video!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

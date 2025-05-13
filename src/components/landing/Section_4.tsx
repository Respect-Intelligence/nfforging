"use client";

import Image from "next/image";
import portfolio_img from "../../assets/images/portfolio/grid/1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function Section_4() {
  return (
    <>
      <section className="portfolio-standard portfolio-standard-carousel pt-120 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
              <div className="heading text-center mb-50">
                <span className="heading__subtitle">Featured Projects</span>
                <h2 className="heading__title">Our Recent Works</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              {/* <div
                className="slick-carousel"
                data-slick='{"slidesToShow": 3, "slidesToScroll": 1, "arrows": false, "dots": true, "responsive": [ {"breakpoint": 992, "settings": {"slidesToShow": 2}}, {"breakpoint": 767, "settings": {"slidesToShow": 2}}, {"breakpoint": 480, "settings": {"slidesToShow": 1}}]}'
              > */}
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 3000, // 1 second
                  disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  481: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  993: {
                    slidesPerView: 3,
                  },
                }}
              >
                {[0, 0, 0, 0, 0].map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="portfolio-item mx-2">
                        <div className="portfolio__img">
                          <Image src={portfolio_img} alt="portfolio img" />
                          {/* <img src="assets/images/portfolio/grid/1.jpg" > */}
                        </div>
                        <div className="portfolio__content">
                          <h4 className="portfolio__title">
                            <a href="#">The Fallingwater House</a>
                          </h4>
                          <div className="portfolio__cat">
                            <a href="#">Building</a>
                            <a href="#">Interior</a>
                          </div>
                          <p className="portfolio__desc">
                            We understand that data is greatest asset when it
                            comes to analyzing and optimizing your supply chain
                            performance.
                          </p>
                          <a
                            href="projects-single-project.html"
                            className="btn btn__loadMore"
                          >
                            <span>Explore More</span>
                            <i className="icon-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

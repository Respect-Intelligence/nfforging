"use client";

import Image from "next/image";
import portfolio_img from "../../assets/images/portfolio/grid/1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { subtle } from "crypto";

export default function Section_4() {
  let whyUsArr = [
    {
      title: "Advance Technology",
      subtitle:
        "The foundry at N F Forgings is a recent addition to the Eastern India based",
      imgSrc: "https://nfforging.com/images/icon1.png",
    },
    {
      title: "Expert Engineers",
      subtitle:
        "The foundry at N F Forgings is a recent addition to the Eastern India based",
      imgSrc: "https://nfforging.com/images/icon2.png",
    },
    {
      title: "Quality Product",
      subtitle:
        "The foundry at N F Forgings is a recent addition to the Eastern India based",
      imgSrc: "https://nfforging.com/images/icon3.png",
    },
  ];
  return (
    <>
      <section className="portfolio-standard portfolio-standard-carousel pt-120 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
              <div className="heading text-center mb-50">
                <span className="heading__subtitle">NF Forgings</span>
                <h2 className="heading__title">Why Choose Us?</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              {/* <Swiper
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
              > */}
              <div className="row g-4">
                {whyUsArr.map(({ title, subtitle, imgSrc }, index) => {
                  return (
                    // <SwiperSlide key={index}>
                    <div className="col-6 col-md-4 px-3" key={index}>
                      <div className="portfolio-item ">
                        <div
                          className="portfolio__img d-flex justify-content-center d-none"
                          // style={{
                          //   padding: "36px 30px 0 35px",
                          // }}
                        >
                          <img
                            src={imgSrc}
                            alt="portfolio img"
                            style={{
                              height: "100px",
                              width: "100px",
                            }}
                          />
                          {/* <Image src={imgSrc} alt="portfolio img" /> */}
                          {/* <img src="assets/images/portfolio/grid/1.jpg" > */}
                        </div>
                        <div
                          className="portfolio__content pb-3"
                          // style={{
                          //   padding: "36px 30px 36px 35px",
                          // }}
                        >
                          <h4 className="portfolio__title">
                            <a href="#">{title}</a>
                          </h4>
                          <div className="portfolio__cat">
                            <a href="#">Building</a>
                            <a href="#">Interior</a>
                          </div>
                          <p className="portfolio__desc">{subtitle}</p>
                          {/* <a
                            href="projects-single-project.html"
                            className="btn btn__loadMore"
                          >
                            <span>Explore More</span>
                            <i className="icon-arrow-right"></i>
                          </a> */}
                        </div>
                      </div>
                    </div>
                    // </SwiperSlide>
                  );
                })}
              </div>
              {/* </Swiper> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

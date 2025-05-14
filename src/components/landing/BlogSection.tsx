// components/BlogSection.jsx
"use client";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    imgSrc: "https://nfforging.com/images/blog-img1.jpg",
    date: "August 11, 2021",
    title: "Providing Robust Engineering Solutions",
    description:
      "The foundry at N F Forgings is a recent addition to the Eastern India based Lalbaba group",
    link: "#",
  },
  {
    imgSrc: "https://nfforging.com/images/blog-img2.jpg",
    date: "August 11, 2021",
    title: "Providing Robust Engineering Solutions",
    description:
      "The foundry at N F Forgings is a recent addition to the Eastern India based Lalbaba group",
    link: "#",
  },
  {
    imgSrc: "https://nfforging.com/images/blog-img3.jpg",
    date: "August 11, 2021",
    title: "Providing Robust Engineering Solutions",
    description:
      "The foundry at N F Forgings is a recent addition to the Eastern India based Lalbaba group",
    link: "#",
  },
];

const BlogSection = () => {
  return (
    <section className="blog-carousel pt-0 pb-50 z-index-2 mt-80">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="heading heading-layout3 mb-40">
              <h2 className="heading__title">Recent Blogs</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 ">
            <div className="position-relative">
              <div className="carousel-nav-wrapper">
                <button className="carousel-nav-arrow carousel-nav-prev ">
                  <ArrowLeft />
                  <span>Prev</span>
                </button>
                <button className="carousel-nav-arrow carousel-nav-next">
                  <ArrowRight />
                </button>
              </div>
              {/* <button
                className="slick-prev slick-arrow"
                aria-label="Previous"
                type="button"
              >
                Previous
              </button> */}

              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 3000, // 1 second
                  disableOnInteraction: false,
                }}
                spaceBetween={30}
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
                {blogPosts.map(
                  ({ imgSrc, date, title, description, link }, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div
                          className="blog-item slick-slide slick-cloned "
                          data-slick-index="-3"
                          id=""
                          aria-hidden="true"
                          //   style="width: 357px;"
                          tabIndex={-1}
                        >
                          <div className="blog__img">
                            <a href="#" tabIndex={-1}>
                              <img src={imgSrc} alt={title} />
                            </a>
                          </div>
                          <div className="blog__content">
                            <div className="blog__meta">
                              <div className="blog__meta-cat">
                                <a href="#" tabIndex={-1}>
                                  News
                                </a>
                                <a href="#" tabIndex={-1}>
                                  Industry
                                </a>
                              </div>
                            </div>
                            <h4 className="blog__title">
                              <a href={link} tabIndex={-1}>
                                {title}
                              </a>
                            </h4>
                            <span className="blog__meta-date">
                              Oct 24, 2017
                            </span>
                            <p className="blog__desc">{description}</p>
                            <a
                              href={link}
                              className="btn btn__secondary btn__link"
                              tabIndex={-1}
                            >
                              <span>Read More</span>
                              <span className="icon_svg">
                                <ArrowRight />
                              </span>
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  }
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

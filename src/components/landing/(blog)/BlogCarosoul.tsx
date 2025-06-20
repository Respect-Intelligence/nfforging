// components/BlogSection.jsx
"use client";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Blog, blogImageBaseURL } from "@/assets/static/types";
import { getdateToStr } from "@/utils/CommonFuntion";

function BlogCarosoul({ blogPosts }: { blogPosts: Blog[] }) {
  const adjustSlideHeights = (swiper: SwiperClass) => {
    if (!swiper?.slides?.length) return;

    let maxHeight = 0;

    swiper.slides.forEach((slideEl) => {
      const el = slideEl as HTMLElement;
      el.style.height = "auto"; // reset
      const height = el.offsetHeight;
      if (height > maxHeight) maxHeight = height;
    });

    swiper.slides.forEach((slideEl) => {
      const el = slideEl as HTMLElement;
      el.style.height = `${maxHeight}px`;
    });

    swiper.update();
  };
  return (
    <Swiper
      modules={[Pagination, Autoplay, Navigation]}
      pagination={{ clickable: true }}
      navigation={{
        nextEl: ".carousel-nav-next",
        prevEl: ".arousel-nav-prev",
      }}
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
      onSwiper={(swiper) => adjustSlideHeights(swiper)}
      onResize={(swiper) => adjustSlideHeights(swiper)}
    >
      {blogPosts?.map(
        (
          { title, slug, intro, category, published_date, blog_image },
          index: number
        ) => {
          return (
            <SwiperSlide key={index} className=" d-flex">
              <div
                className="blog-item slick-slide slick-cloned  d-flex flex-column"
                data-slick-index="-3"
                id=""
                aria-hidden="true"
                //   style="width: 357px;"
                tabIndex={-1}
              >
                <div className="blog__img">
                  <a href={`/blog/${slug}`} tabIndex={-1}>
                    <img src={`${blogImageBaseURL}${blog_image}`} alt={title} />
                  </a>
                </div>
                <div className="blog__content flex-grow-1 d-flex flex-column justify-content-between">
                  <div className="top">
                    <div className="blog__meta">
                      <div className="blog__meta-cat">
                        <a href="#" tabIndex={-1}>
                          {category}
                        </a>
                      </div>
                    </div>
                    <h4 className="blog__title">
                      <a href={`/blog/${slug}`} tabIndex={-1}>
                        {title}
                      </a>
                    </h4>
                    <span className="blog__meta-date">
                      {getdateToStr(published_date)}
                    </span>
                    <p className="blog__desc truncate-2-lines">{intro}</p>
                  </div>
                  <Link
                    href={`/blog/${slug}`}
                    className="btn btn__secondary btn__link"
                    tabIndex={-1}
                  >
                    <span>Read More</span>
                    <span className="icon_svg">
                      <ArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        }
      )}
    </Swiper>
  );
}

export default BlogCarosoul;

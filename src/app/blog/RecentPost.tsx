"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Blog, blogImageBaseURL } from "@/assets/static/types";
import { getdateToStr } from "@/utils/CommonFuntion";

const RecentPost = ({ recentBlogs }: { recentBlogs: Blog[] | null }) => {
  const slides = [
    {
      img: "/images/banner3.jpg",
      date: "Jan 20, 2020",
      title: "New Additions to our great Metro trucks Fleet",
    },
    {
      img: "/images/banner4.jpg",
      date: "Jan 23, 2020",
      title: "Cargo flow through better supply chain visibility, control.",
    },
  ];

  return (
    <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      loop={true}
      className="mySwiper recent-post-swiper"
    >
      {recentBlogs?.map(({ blog_image, title, published_date }, index) => (
        <SwiperSlide key={index}>
          <div className="widget-post-item">
            <div className="widget__post-img">
              <a href="#">
                <img src={`${blogImageBaseURL}${blog_image}`} alt="thumb" />
              </a>
            </div>
            <div className="widget__post-content">
              <span className="widget__post-date">
                {/* {getdateToStr(published_date)} */}
              </span>
              <h6 className="widget__post-title">
                <a href="#">{title}</a>
              </h6>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default RecentPost;

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { LucideArrowRight } from "lucide-react";
import { jobs } from "@/assets/static/data";

function JobsSection() {
  return (
    <section className="careers pb-70">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div className="heading text-center mb-50">
              <span className="heading__subtitle">Join Our Team!</span>
              <h2 className="heading__title">
                Explore Opportunities to Forge Your Future with Us
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                480: {
                  slidesPerView: 1,
                },
                767: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
              className="slick-carousel px-4 pt-4 pb-5"
            >
              {jobs.map((job, index) => (
                <SwiperSlide key={index}>
                  <div className="job-item">
                    <div className="job__meta d-flex align-items-center">
                      <span className="job__type">{job.type}</span>
                      <span className="job__location">{job.location}</span>
                    </div>
                    <h4 className="job__title">{job.title}</h4>
                    <p className="job__desc">{job.desc}</p>
                    <a href="#" className="btn btn__secondary btn__link">
                      <span>Read More</span>
                      <span className="circleIcon ms-2">
                        <LucideArrowRight size={16} />
                      </span>
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobsSection;

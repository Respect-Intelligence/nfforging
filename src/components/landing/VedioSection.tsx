import React from "react";
import "@/scss/sections/vedioSection.scss";

function VedioSection() {
  return (
    <>
      <section className="vedioSection" data-aos="zoom-in-up">
        <div className="container">
          <div className="px-lg-5 position-relative">
            <div
              className=""
              style={{
                border: "4px solid #fff",
                position: "absolute",
                bottom: "-1px",
                left: "0px",
                width: "100%",
                zIndex: 9,
              }}
            ></div>
            <video
              width="100%"
              height="auto"
              // autoplay=""
              // muted="true"
              //           loop=""

              // playsinline=""
              muted={true}
              autoPlay={true}
              loop={true}
              className="video-viewport swtch-video aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-offset="0"
              data-aos-delay="800"
              data-aos-duration="800"
            >
              <source src="/images/home3/vid.mp4" type="video/webm" />
            </video>
          </div>
        </div>
      </section>
    </>
  );
}

export default VedioSection;

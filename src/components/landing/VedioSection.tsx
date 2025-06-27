import React from "react";
import "@/scss/sections/vedioSection.scss";

function VedioSection() {
  return (
    <>
      <section className="vedioSection" data-aos="zoom-in-up">
        <div className="container">
          <div className="px-lg-5">
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
              <source
                src="https://www.markobrando.com/asset/video/1St%20Cut%20M-Comp.webm"
                type="video/webm"
              />
            </video>
          </div>
        </div>
      </section>
    </>
  );
}

export default VedioSection;

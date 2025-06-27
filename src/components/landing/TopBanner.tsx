import { ArrowRight } from "lucide-react";
import HighlightSection_4 from "./HighlightSection_4";

export default function TopBanner() {
  return (
    <>
      <section className="static-hero relative ">
        {/* <video
          autoPlay
          muted
          loop
          playsInline
          id="myVideo"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className="position-absolute top-0 left-0"
        >
          <source
            src="https://nfforging.com/images/newvideo.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </video> */}
        <div className="container py-3 py-md-0">
          <div className="wraper position-relative  z-50">
            <div className="row ">
              <div className="col-lg-6">
                <div className="content pe-lg-5  ">
                  {/* <h2>Welcome to NF Foregins</h2> */}
                  <h3 className="text-uppercase">
                    Providing Robust <br /> Engineering <br /> Solutions
                  </h3>
                  <p className="text-center text-lg-start w-100">
                    Decades of Excellence in Foundry, Forming & Fabrication –
                    Powered by People, Driven by Precision.
                  </p>
                  <div className="hero-btn ">
                    <a
                      href="contact-us"
                      className="btn btn__primary action__btn-request"
                    >
                      Contact Us
                      <ArrowRight className="h-4 ms-2" />
                    </a>
                    <a href="about-us" className="btn btn__white" tabIndex={0}>
                      More About Us!
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <div className="hero-img">
                  <img src="/images/home3/heroBanner_3.jpg" alt="NF Foregins" />

                  <img
                    src="/images/home3/contactBatch.png"
                    alt=""
                    className="contact-us-img"
                  />
                </div>
              </div>
            </div>
            <HighlightSection_4 />
          </div>
        </div>
      </section>
    </>
  );
}

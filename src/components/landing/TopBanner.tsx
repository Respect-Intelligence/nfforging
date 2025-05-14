import { ArrowRight } from "lucide-react";

export default function TopBanner() {
  return (
    <>
      <section className="static-hero relative">
        <video
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
        </video>
        <div className="container">
          <div className="wraper position-relative z-50">
            <div className="content">
              {/* <h2>Welcome to NF Foregins</h2> */}
              <h3>
                Providing Robust <br /> Engineering Solutions
              </h3>
              <p>
                Decades of Excellence in Foundry, Forming & Fabrication –
                Powered by People, Driven by Precision.
              </p>
              <div className="hero-btn">
                <a
                  href="about.html"
                  className="btn btn__primary action__btn-request"
                >
                  Explore Our Solutions
                  <ArrowRight className="h-4 ms-2" />
                </a>
                <a href="about-us.html" className="btn btn__white" tabIndex={0}>
                  More About Us!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

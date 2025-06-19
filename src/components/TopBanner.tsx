import React from "react";
import backImg from "@/assets/images/page-titles/8.jpg";
import { ArrowRight } from "lucide-react";

function TopBanner() {
  return (
    <section
      className="page-title page-title-layout1 bg-overlay bg-overlay-2 bg-parallax"
      style={{
        backgroundImage: "url(/images/page-titles/1.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* <div className="bg-img">
        <img src="/images/page-titles/1.jpg" alt="background" />
      </div> */}
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <span className="pagetitle__subheading">About NF Forgings</span>
            <h1 className="pagetitle__heading">
              A Legacy of Industrial Innovation Since 1997
            </h1>
            <a
              href="https://youtu.be/_yuxiNA2bRo?si=JmCYVLc1BoFTEqU8"
              target="_blank"
              className="btn btn__white btn__bordered btn__icon"
            >
              <span>Get to Know Us</span>
              <ArrowRight height={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopBanner;

import React from "react";

function BasicTopBanner({ title }: { title: string | undefined }) {
  return (
    <>
      <section
        className="page-title page-title-layout7 bg-overlay bg-overlay-2 bg-parallax text-center bg-img basic-top-banner"
        style={{}}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <h1 className="pagetitle__heading mb-0">{title}</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BasicTopBanner;

import React from "react";

function BasicTopBanner({
  title,
  bannerImgSrc,
}: {
  title: string | undefined;
  bannerImgSrc?: string; // Provide path to image file in public folder. For example, 'images/banner/banner1.jpg'  // If not provided, default background image will be used.  // For example, 'images/banner/banner1.jpg'  // If not provided, default background image will be used.  // For example, 'images/banner/banner1.jpg'  // If not provided, default background image will be used.
}) {
  return (
    <>
      <section
        className="page-title page-title-layout7 bg-overlay bg-overlay-2 bg-parallax text-center bg-img basic-top-banner"
        style={{
          // backgroundImage: `url(${bannerImgSrc})`, // Provide path to image file in public folder. For example, 'images/banner/banner1.jpg'  // If not provided, default background image will be used.  // For example, 'images/banner/banner1.jpg'  // If not provided, default background image will be used.  // For example, 'images/banner/banner1.jpg'  // If not provided, default background image will be used.   // For example, 'images/banner/banner1.jpg'  // If not provided, default background image will be used.   // For example, 'images/banner/banner1.jpg'  // If not provided, default background image will be used.   // For example, 'images/banner/banner1.jpg'  // If not provided, default background image will be used.   // For example, 'images/banner/banner1.
          ["--BasicTopBannerBgImgSrc" as any]: `url(${bannerImgSrc})`,
        }}
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

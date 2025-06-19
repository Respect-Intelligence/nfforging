import BasicTopBanner from "@/components/BasicTopBanner";
import React from "react";
import FeaturesSection from "./components/FeaturesSection";
import BannerCounterSection from "./components/BannerCounterSection";
import StatusSection from "./components/StatusSection";
import Gallery from "@/components/Gallery";
import { defaultGalleryItems } from "@/assets/static/data";

function Page() {
  return (
    <>
      <BasicTopBanner
        bannerImgSrc="/images/sustainability/1.jpg"
        title="Sustainability"
      />
      <FeaturesSection />
      <BannerCounterSection />
      <StatusSection />
      <Gallery
        title="Our Sustainability Initiatives"
        subtitle="Explore how we integrate eco-conscious practices across architecture, design, and operations."
        items={defaultGalleryItems}
      />
    </>
  );
}

export default Page;

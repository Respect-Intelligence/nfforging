import BasicTopBanner from "@/components/BasicTopBanner";
import React from "react";
import FeaturesSection from "./components/FeaturesSection";
import BannerCounterSection from "./components/BannerCounterSection";
import StatusSection from "./components/StatusSection";

function Page() {
  return (
    <>
      <BasicTopBanner title="Sustainability" />
      <FeaturesSection />
      <BannerCounterSection />
      <StatusSection />
    </>
  );
}

export default Page;

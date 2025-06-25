import React from "react";
import JobsSection from "./components/JobsSection";
import BasicTopBanner from "@/components/BasicTopBanner";
import OurCulture_section from "./components/OurCulture_section";
import ApplyForm from "./components/ApplyForm";
import CareForPeopleSection from "@/components/CareForPeopleSection";
import HeroCarosoul from "@/components/HeroCarosoul";

function page() {
  return (
    <>
      {/* <BasicTopBanner bannerImgSrc="/images/careers/3.jpg" title="careers" /> */}
      <HeroCarosoul />
      <JobsSection />
      <OurCulture_section />
      <CareForPeopleSection />
      <ApplyForm />
    </>
  );
}

export default page;

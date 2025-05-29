import React from "react";
import JobsSection from "./components/JobsSection";
import BasicTopBanner from "@/components/BasicTopBanner";
import OurCulture_section from "./components/OurCulture_section";
import ApplyForm from "./components/ApplyForm";

function page() {
  return (
    <>
      <BasicTopBanner bannerImgSrc="/images/careers/3.jpg" title="careers" />
      <JobsSection />
      <OurCulture_section />
      <ApplyForm />
    </>
  );
}

export default page;

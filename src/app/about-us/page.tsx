import CirtificationSection from "@/components/CirtificationSection";
import ContactFormSection from "@/components/landing/ContactFormSection";
import OurTeams_section from "@/components/OurTeams_section";
import RecentWorkSection from "@/components/RecentWorkSection";
import Section_6 from "@/components/Section_6";
import Section_7 from "@/components/Section_7";
import Testimonials from "@/components/Testimonials";
import TopBanner from "@/components/TopBanner";
import React from "react";

function page() {
  return (
    <>
      <TopBanner />
      <Section_6 />
      <Section_7 />
      <RecentWorkSection />
      {/* <Section_8 /> */}
      <CirtificationSection />
      <OurTeams_section />
      {/* <ContactFormSection /> */}
      {/* <Testimonials /> */}
    </>
  );
}

export default page;

import CirtificationSection from "@/components/CirtificationSection";
import ContactFormSection from "@/components/landing/ContactFormSection";
import MilestoneSection from "@/components/MilestoneSection";
import OurTeams_section from "@/components/OurTeams_section";
import RecentWorkSection from "@/components/RecentWorkSection";
import SecondUnitAboutSection from "@/components/SecondUnitAboutSection";
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
      <SecondUnitAboutSection className="pb-70 " />
      <OurTeams_section />
      <Section_7 />
      <MilestoneSection />
      <RecentWorkSection />
    </>
  );
}

export default page;

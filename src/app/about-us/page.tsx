import ContactFormSection from "@/components/landing/ContactFormSection";
import RecentWorkSection from "@/components/RecentWorkSection";
import Section_6 from "@/components/Section_6";
import Section_7 from "@/components/Section_7";
import Section_8 from "@/components/Section_8";
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
      <Section_8 />
      <ContactFormSection />
      <Testimonials />
    </>
  );
}

export default page;

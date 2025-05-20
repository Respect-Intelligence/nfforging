import BasicTopBanner from "@/components/BasicTopBanner";
import ContactInfoSection from "@/components/ContactInfoSection";
import ContactFormSection from "@/components/landing/ContactFormSection";
import Section_8 from "@/components/Section_8";
import TopBanner from "@/components/TopBanner";
import React from "react";

function page() {
  return (
    <>
      <BasicTopBanner title="Contact Us" />
      <ContactFormSection />
      <ContactInfoSection />
    </>
  );
}

export default page;

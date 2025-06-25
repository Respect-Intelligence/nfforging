import BasicTopBanner from "@/components/BasicTopBanner";
import ContactInfoSection from "@/components/ContactInfoSection";
import ContactFormSection from "@/components/landing/ContactFormSection";
import TopBanner from "@/components/TopBanner";
import React from "react";

function page() {
  return (
    <>
      <BasicTopBanner bannerImgSrc="/images/contactus.jpg" title="Contact Us" />
      <ContactFormSection className="contactUs-page" />
      <ContactInfoSection />
    </>
  );
}

export default page;

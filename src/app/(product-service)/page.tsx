import CirtificationSection from "@/components/CirtificationSection";
import ContactFormSection from "@/components/landing/ContactFormSection";
import Product_service_topBanner from "@/components/Product_service_topBanner";
import Section_2 from "@/components/Section_2";
import React from "react";

function page() {
  return (
    <>
      <Product_service_topBanner />
      <Section_2 />
      <CirtificationSection />
      <ContactFormSection />
    </>
  );
}

export default page;

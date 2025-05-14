import BlogSection from "@/components/landing/BlogSection";
import CirtificationSection from "@/components/landing/CirtificationSection";
import ContactFormSection from "@/components/landing/ContactFormSection";
import HighlightSection from "@/components/landing/HighlightSection";
import MapSection from "@/components/landing/MapSection";
import OurClientsSection from "@/components/landing/OurClientsSection";
import Section_2 from "@/components/landing/Section_2";
import Section_3 from "@/components/landing/Section_3";
import Section_4 from "@/components/landing/Section_4";
import TestimonialSection from "@/components/landing/TestimonialSection";
import TopBanner from "@/components/landing/TopBanner";
import ServiceSection from "@/components/landing/ServiceSection";
import AboutUsSection from "@/components/landing/AboutUsSection";
import HighlightSection_2 from "@/components/landing/HighlightSection_2";

export default function Home() {
  return (
    <>
      <TopBanner />
      <HighlightSection_2 />
      {/* <HighlightSection /> */}
      <AboutUsSection />
      <ServiceSection />
      {/* <Section_2 /> */}
      <Section_3 />
      {/* <Section_4 /> */}
      <OurClientsSection />
      <CirtificationSection />
      <ContactFormSection />
      {/* <TestimonialSection /> */}
      <BlogSection />
      <MapSection />
    </>
  );
}

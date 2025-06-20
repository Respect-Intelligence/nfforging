import BlogSection from "@/components/landing/(blog)/BlogSection";
import CirtificationSection from "@/components/CirtificationSection";
import ContactFormSection from "@/components/landing/ContactFormSection";
import HighlightSection from "@/components/landing/HighlightSection";
import MapSection from "@/components/landing/MapSection";
import OurClientsSection from "@/components/landing/OurClientsSection";
import Section_3 from "@/components/landing/Section_3";
import Section_4 from "@/components/landing/Section_4";
import TopBanner from "@/components/landing/TopBanner";
import ServiceSection from "@/components/landing/ServiceSection";
import AboutUsSection from "@/components/landing/AboutUsSection";
import HighlightSection_2 from "@/components/landing/HighlightSection_2";
import HighlightSection_3 from "@/components/landing/HighlightSection_3";
import AboutWithHighlight from "@/components/landing/AboutWithHighlight";
import ManufacturingLocations from "@/components/landing/ManufacturingLocations";

export default function Home() {
  return (
    <>
      <TopBanner />
      {/* <HighlightSection_3 /> */}
      {/* <HighlightSection /> */}
      <AboutUsSection />
      <ServiceSection />
      <AboutWithHighlight />
      {/* <OurClientsSection /> */}
      <CirtificationSection />
      <ContactFormSection />
      <BlogSection />
      <ManufacturingLocations />
      <MapSection />
    </>
  );
}

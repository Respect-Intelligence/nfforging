import HighlightSection from "@/components/landing/HighlightSection";
import Section_2 from "@/components/landing/Section_2";
import Section_3 from "@/components/landing/Section_3";
import Section_4 from "@/components/landing/Section_4";
import TopBanner from "@/components/landing/TopBanner";

export default function Home() {
  return (
    <>
      <TopBanner />
      <HighlightSection />
      <Section_2 />
      <Section_3 />
      <Section_4 />
    </>
  );
}

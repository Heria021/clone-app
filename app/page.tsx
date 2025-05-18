import ResourceManagementSection from "./components/resourceManagement/ResourceManagementSection";
import FAQSection from "./components/faq/FAQSection";
import BookDemoSection from "./components/bookDemoSection/BookDemoSection";
import LogoCarouselSection from "./components/logoCarousel/LogoCarouselSection";
import FutureDataCentersSection from "./components/futureDataCenters/FutureDataCentersSection";
import FeaturesSection from "./components/features/FeaturesSection";
import HeroSection from "./components/hero/HeroSection";

export default function Home() {
  return (
    <div className="bg-black">
      <HeroSection />
      <LogoCarouselSection />
      <FeaturesSection />
      <FutureDataCentersSection />
      <ResourceManagementSection />
      <BookDemoSection />
      <FAQSection />
    </div>
  );
}

import { CTASection } from "../components/home/CTASection";
import { GalleryPreviewSection } from "../components/home/GalleryPreviewSection";
import { HeroSection } from "../components/home/HeroSection";
import { RentalCardsSection } from "../components/home/RentalCardsSection";
import { WhyChooseUsSection } from "../components/home/WhyChooseUsSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <RentalCardsSection />
      <WhyChooseUsSection />
      <GalleryPreviewSection />
      <CTASection />
    </>
  );
}

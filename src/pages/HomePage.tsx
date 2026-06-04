import { CTASection } from "../components/home/CTASection";
import { GalleryPreviewSection } from "../components/home/GalleryPreviewSection";
import { HeroSection } from "../components/home/HeroSection";
import { MechBullSection } from "../components/home/MechBullSection";
import { RentalCardsSection } from "../components/home/RentalCardsSection";
import { WhyChooseUsSection } from "../components/home/WhyChooseUsSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <RentalCardsSection />
      <MechBullSection />
      <WhyChooseUsSection />
      <GalleryPreviewSection />
      <CTASection />
    </>
  );
}
